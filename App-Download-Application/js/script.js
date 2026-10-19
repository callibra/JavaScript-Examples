// ============================================================
// APPLICATION DATA
// ============================================================

const apps = [
    {
        id: 'football',
        title: 'Football Live App',
        icon: '⚽',
        file: 'https://gitlab.com/callibra/intermreza/-/raw/master/Apk/Football-Live-App.apk?ref_type=heads',
        desc: 'Football Live Android апликација',
        detail: 'Преземи ја Football Live App апликацијата директно на Android.',
        cls: ''
    },
    {
        id: 'movies',
        title: 'Movies & Cinema App',
        icon: '🎬',
        file: 'https://gitlab.com/callibra/intermreza/-/raw/master/Apk/Movies-Cinema-App.apk?ref_type=heads',
        desc: 'Movies & Cinema Android апликација',
        detail: 'Преземи ја Movies & Cinema App апликацијата директно на Android.',
        cls: 'movie-detail'
    }
];


// ============================================================
// DOM ELEMENT REFERENCES
// ============================================================

const list = document.getElementById('appList');
const drawer = document.getElementById('drawer');
const panel = document.getElementById('panel');

const detailIcon = document.getElementById('detailIcon');
const detailTitle = document.getElementById('detailTitle');
const detailSub = document.getElementById('detailSub');

const downloadBtn = document.getElementById('downloadBtn');

const fileNameTop = document.getElementById('fileNameTop');
const fileName1 = document.getElementById('fileName1');
const fileName2 = document.getElementById('fileName2');

const toast = document.getElementById('toast');

const appCount = document.getElementById('appCount');
const sectionCount = document.getElementById('sectionCount');

const releaseStatus = document.getElementById('releaseStatus');
const releaseDate = document.getElementById('releaseDate');


// ============================================================
// RELEASE / GITLAB SHA SYSTEM
//
// Check interval: 60 seconds.
// localStorage stores the SHA and release date.
// The SHA is the actual criterion for detecting a new APK.
// ============================================================

const RELEASE_CHECK_INTERVAL = 60 * 1000;

const releaseMemoryCache = new Map();
const releaseChecking = new Map();

// Apps currently known to have a deleted APK on GitLab.
const deletedApps = new Set();


// ============================================================
// RELEASE CACHE
// ============================================================

// Generate the localStorage key for an application.
function getReleaseCacheKey(app) {
    return 'vanapp_release_sha_v1_' + app.id;
}


// Read the cached release information.
function readReleaseCache(app) {
    try {
        const raw = localStorage.getItem(
            getReleaseCacheKey(app)
        );

        if (!raw) return null;

        const data = JSON.parse(raw);

        if (!data || typeof data !== 'object') {
            return null;
        }

        return data;

    } catch (e) {
        console.warn(
            'Release cache read error:',
            e
        );

        return null;
    }
}


// Save the release information to localStorage.
function writeReleaseCache(app, data) {
    try {
        localStorage.setItem(
            getReleaseCacheKey(app),
            JSON.stringify(data)
        );

    } catch (e) {
        console.warn(
            'Release cache write error:',
            e
        );
    }
}


// ============================================================
// GITLAB URL PARSING
// ============================================================

// Extract the GitLab project, branch and file path from a raw URL.
function parseGitLabRawUrl(fileUrl) {
    const u = new URL(fileUrl);

    const parts = u.pathname
        .split('/')
        .filter(Boolean);

    const dashIndex = parts.indexOf('-');

    if (
        dashIndex < 1 ||
        parts[dashIndex + 1] !== 'raw'
    ) {
        throw new Error('Invalid GitLab raw URL');
    }

    const namespace = parts
        .slice(0, dashIndex)
        .join('/');

    const ref = parts[dashIndex + 2];

    const filePath = parts
        .slice(dashIndex + 3)
        .join('/');

    return {
        projectPath: namespace,
        ref: decodeURIComponent(ref),
        filePath: decodeURIComponent(filePath)
    };
}


// ============================================================
// GITLAB API REQUESTS
// ============================================================

// Send a request to GitLab and preserve the HTTP status code.
async function gitLabGet(url) {
    const response = await fetch(
        url,
        {
            method: 'GET',
            cache: 'no-store',
            headers: {
                'Accept': 'application/json',
                'Cache-Control': 'no-cache'
            }
        }
    );

    // Only HTTP 404 responses are treated as a deleted APK.
    if (!response.ok) {
        const error = new Error(
            'GitLab HTTP ' + response.status
        );

        error.status = response.status;

        throw error;
    }

    return response.json();
}


// Retrieve the current APK information from GitLab.
async function getCurrentGitLabFile(app) {
    const parsed = parseGitLabRawUrl(app.file);

    const project = encodeURIComponent(
        parsed.projectPath
    );

    const file = encodeURIComponent(
        parsed.filePath
    );

    const url =
        `https://gitlab.com/api/v4/projects/${project}/repository/files/${file}` +
        `?ref=${encodeURIComponent(parsed.ref)}`;

    const data = await gitLabGet(url);

    if (!data.blob_id) {
        throw new Error(
            'GitLab blob_id/SHA not found'
        );
    }

    return {
        projectPath: parsed.projectPath,
        filePath: parsed.filePath,
        ref: parsed.ref,

        // GitLab blob_id represents the current APK SHA.
        blobId: data.blob_id,

        // The latest commit that changed the file.
        lastCommitId: data.last_commit_id || null
    };
}


// ============================================================
// RELEASE DATE RETRIEVAL
// ============================================================

// Retrieve the commit date associated with the APK.
async function getCommitDate(projectPath, commitId) {
    if (!commitId) {
        throw new Error(
            'GitLab commit ID missing'
        );
    }

    const project = encodeURIComponent(
        projectPath
    );

    const url =
        `https://gitlab.com/api/v4/projects/${project}/repository/commits/${commitId}`;

    const data = await gitLabGet(url);

    const date =
        data.committed_date ||
        data.authored_date ||
        data.created_at;

    if (!date) {
        throw new Error(
            'Commit date not found'
        );
    }

    const d = new Date(date);

    if (Number.isNaN(d.getTime())) {
        throw new Error(
            'Invalid commit date'
        );
    }

    return d;
}


// ============================================================
// RELEASE STATUS DISPLAY
// ============================================================

// Display whether the release is new or old.
function showReleaseStatus(createdDate) {
    const now = new Date();

    const oneMonthAgo = new Date(now);

    // One calendar month earlier defines the release boundary.
    oneMonthAgo.setMonth(
        oneMonthAgo.getMonth() - 1
    );

    if (createdDate >= oneMonthAgo) {
        releaseStatus.className =
            'release-status new';

        releaseStatus.textContent = 'NEW LINK';

    } else {
        releaseStatus.className =
            'release-status old';

        releaseStatus.textContent = 'OLD LINK';
    }

    releaseDate.textContent =
        'Released: ' +
        createdDate.toLocaleDateString(
            'mk-MK',
            {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            }
        );
}


// Display the deleted APK status.
function showDeletedStatus(lastDate) {
    releaseStatus.className =
        'release-status deleted';

    releaseStatus.textContent = 'DELETED APK';

    if (
        lastDate &&
        !Number.isNaN(lastDate.getTime())
    ) {
        releaseDate.textContent =
            'Last release: ' +
            lastDate.toLocaleDateString(
                'mk-MK',
                {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                }
            );

    } else {
        releaseDate.textContent = '';
    }
}


// Display the loading status while checking the release.
function showReleaseLoading() {
    releaseStatus.className =
        'release-status loading';

    releaseStatus.textContent = 'CHECKING...';

    releaseDate.textContent = '';
}


// ============================================================
// RELEASE CHECKING AND CACHE VALIDATION
// ============================================================

// Check the APK SHA and update the release information.
async function loadReleaseDate(app) {

    // Prevent duplicate requests for the same application.
    if (releaseChecking.has(app.id)) {
        return releaseChecking.get(app.id);
    }

    const promise = (async () => {

        const now = Date.now();

        const memory = releaseMemoryCache.get(
            app.id
        );

        const cached =
            memory ||
            readReleaseCache(app);


        // Display the deleted state immediately when cached.
        if (
            cached &&
            cached.deleted === true
        ) {
            deletedApps.add(app.id);

            if (cached.date) {
                const deletedDate = new Date(
                    cached.date
                );

                if (
                    !Number.isNaN(
                        deletedDate.getTime()
                    )
                ) {
                    showDeletedStatus(
                        deletedDate
                    );

                } else {
                    showDeletedStatus(null);
                }

            } else {
                showDeletedStatus(null);
            }

        } else {
            deletedApps.delete(app.id);

            // Display the last known release date first.
            if (
                cached &&
                cached.date
            ) {
                const knownDate = new Date(
                    cached.date
                );

                if (
                    !Number.isNaN(
                        knownDate.getTime()
                    )
                ) {
                    showReleaseStatus(
                        knownDate
                    );
                }

            } else {
                showReleaseLoading();
            }
        }


        // Reuse recent results until the next check interval.
        // GitLab remains the source of truth.
        if (
            cached &&
            cached.checkedAt &&
            (now - cached.checkedAt) <
                RELEASE_CHECK_INTERVAL
        ) {
            return;
        }


        try {

            // Retrieve the current APK SHA from GitLab.
            const current =
                await getCurrentGitLabFile(app);


            // The APK exists again, so clear its deleted state.
            deletedApps.delete(app.id);


            // If the SHA is unchanged, preserve the release date.
            if (
                cached &&
                cached.blobId === current.blobId &&
                cached.date
            ) {
                const sameRelease = {
                    blobId: current.blobId,
                    date: cached.date,

                    commitId:
                        current.lastCommitId ||
                        cached.commitId ||
                        null,

                    // The APK exists again.
                    deleted: false,

                    checkedAt: Date.now()
                };

                releaseMemoryCache.set(
                    app.id,
                    sameRelease
                );

                writeReleaseCache(
                    app,
                    sameRelease
                );

                showReleaseStatus(
                    new Date(sameRelease.date)
                );

                return;
            }


            // A different SHA indicates changed APK content.
            // Retrieve the release date from the latest commit.
            const createdDate = await getCommitDate(
                current.projectPath,
                current.lastCommitId
            );

            if (
                !createdDate ||
                Number.isNaN(createdDate.getTime())
            ) {
                throw new Error(
                    'Could not determine release date'
                );
            }


            // Store the new release information.
            const newRelease = {
                blobId: current.blobId,
                date: createdDate.toISOString(),
                commitId: current.lastCommitId,

                // This APK exists.
                deleted: false,

                checkedAt: Date.now()
            };

            releaseMemoryCache.set(
                app.id,
                newRelease
            );

            writeReleaseCache(
                app,
                newRelease
            );

            showReleaseStatus(createdDate);


        } catch (error) {

            console.error(
                'Release check failed:',
                app.id,
                error
            );


            // Only HTTP 404 means the APK is missing.
            if (
                error &&
                error.status === 404
            ) {
                const fallback =
                    releaseMemoryCache.get(app.id) ||
                    readReleaseCache(app);


                // Preserve the last known information and mark
                // the APK as deleted.
                const deletedRelease = {
                    blobId:
                        fallback?.blobId || null,

                    date:
                        fallback?.date || null,

                    commitId:
                        fallback?.commitId || null,

                    deleted: true,

                    checkedAt: Date.now()
                };

                releaseMemoryCache.set(
                    app.id,
                    deletedRelease
                );

                writeReleaseCache(
                    app,
                    deletedRelease
                );

                deletedApps.add(app.id);

                const lastDate =
                    deletedRelease.date
                        ? new Date(deletedRelease.date)
                        : null;

                showDeletedStatus(lastDate);

                return;
            }


            // If GitLab is temporarily unavailable, preserve
            // the cached release information when possible.
            const fallback =
                releaseMemoryCache.get(app.id) ||
                readReleaseCache(app);

            if (
                fallback &&
                fallback.date
            ) {
                const fallbackDate = new Date(
                    fallback.date
                );

                if (
                    !Number.isNaN(
                        fallbackDate.getTime()
                    )
                ) {
                    showReleaseStatus(
                        fallbackDate
                    );

                    return;
                }
            }


            // Display a fallback status when no date is available.
            releaseStatus.className =
                'release-status loading';

            releaseStatus.textContent = 'RELEASE';

            releaseDate.textContent =
                'Date unavailable';
        }

    })();


    // Track the current request for this application.
    releaseChecking.set(
        app.id,
        promise
    );

    try {
        await promise;

    } finally {
        releaseChecking.delete(app.id);
    }
}


// ============================================================
// AUTOMATIC ONE-MINUTE RELEASE CHECK
// ============================================================

let releaseInterval = null;


// Start the periodic release checker.
function startReleaseChecker() {

    // Clear any existing interval before creating a new one.
    if (releaseInterval) {
        clearInterval(releaseInterval);
    }

    releaseInterval = setInterval(() => {

        // Only check releases while the drawer is open.
        if (
            !drawer.classList.contains('show')
        ) {
            return;
        }

        const currentId =
            location.hash.replace('#', '');

        const currentApp = apps.find(
            x => x.id === currentId
        );

        if (currentApp) {
            loadReleaseDate(currentApp);
        }

    }, RELEASE_CHECK_INTERVAL);
}


// ============================================================
// APPLICATION LIST UI
// ============================================================

// Render the application cards and update the counters.
function render() {

    appCount.textContent = apps.length;

    sectionCount.textContent =
        `${apps.length} ${apps.length === 1 ? 'app' : 'apps'} достапни`;


    // Generate the application card markup.
    list.innerHTML = apps.map(a => `
        <article
            class="app-card"
            tabindex="0"
            data-id="${a.id}"
            role="button"
            aria-label="Отвори ${a.title}"
        >
            <div class="app-icon ${
                a.id === 'football' ? 'football' : ''
            } ${
                a.id === 'movies' ? 'movie' : ''
            }">
                ${a.icon}
            </div>

            <div class="app-info">
                <h3 class="app-title">
                    ${a.title}
                </h3>

                <p class="app-desc">
                    ${a.desc}
                </p>

                <div class="app-meta">
                    APK · ANDROID · VIEW & DOWNLOAD
                </div>
            </div>

            <div class="open-pill">
                <span>Open</span>
                <span class="chev"> › </span>
            </div>
        </article>
    `).join('');


    // Register click and keyboard handlers for each card.
    document
        .querySelectorAll('.app-card')
        .forEach(el => {

            el.addEventListener(
                'click',
                () => openApp(el.dataset.id)
            );

            el.addEventListener(
                'keydown',
                e => {

                    if (
                        e.key === 'Enter' ||
                        e.key === ' '
                    ) {
                        e.preventDefault();

                        openApp(el.dataset.id);
                    }
                }
            );
        });
}


// ============================================================
// OPEN APPLICATION DETAILS
// ============================================================

// Populate and open the selected application's drawer.
function openApp(id) {

    const a = apps.find(
        x => x.id === id
    );

    if (!a) return;


    // Extract the APK filename from the download URL.
    const fileName = decodeURIComponent(
        a.file
            .split('/')
            .pop()
            .split('?')[0]
    );


    // Populate the application details.
    detailIcon.textContent = a.icon;

    detailTitle.textContent = a.title;

    detailSub.textContent = a.detail;


    // Populate the filename in all instruction sections.
    fileNameTop.textContent = fileName;

    fileName1.textContent = fileName;

    fileName2.textContent = fileName;


    // Set the application download URL.
    downloadBtn.href = a.file;


    // Apply the application-specific panel class.
    panel.className =
        'panel ' + (a.cls || '');


    // Open the drawer and lock background scrolling.
    drawer.classList.add('show');

    drawer.setAttribute(
        'aria-hidden',
        'false'
    );

    document.body.classList.add('lock');

    drawer.scrollTop = 0;


    // Check the release information.
    loadReleaseDate(a);


    // Update browser history with the selected application.
    history.pushState(
        {
            app: id
        },
        '',
        `#${id}`
    );
}


// ============================================================
// CLOSE APPLICATION DETAILS
// ============================================================

// Close the drawer and optionally update browser history.
function closeDrawer(push = true) {

    drawer.classList.remove('show');

    drawer.setAttribute(
        'aria-hidden',
        'true'
    );

    document.body.classList.remove('lock');


    // Remove the application hash when requested.
    if (
        push &&
        location.hash
    ) {
        history.pushState(
            {},
            '',
            location.pathname + location.search
        );
    }
}


// ============================================================
// DRAWER EVENT HANDLERS
// ============================================================

// Close the drawer using the top close button.
document.getElementById('closeTop').onclick =
    () => closeDrawer();


// Close the drawer using the bottom return button.
document.getElementById('closeBottom').onclick =
    () => closeDrawer();


// Close the drawer when clicking its backdrop.
drawer.addEventListener(
    'click',
    e => {

        if (e.target === drawer) {
            closeDrawer();
        }
    }
);


// Close the drawer when the Escape key is pressed.
document.addEventListener(
    'keydown',
    e => {

        if (
            e.key === 'Escape' &&
            drawer.classList.contains('show')
        ) {
            closeDrawer();
        }
    }
);


// ============================================================
// DOWNLOAD BUTTON HANDLER
// ============================================================

// Prevent downloads for deleted APKs and display a notification.
downloadBtn.addEventListener(
    'click',
    e => {

        const currentId =
            location.hash.replace('#', '');


        // Block the download if the APK is marked as deleted.
        if (deletedApps.has(currentId)) {

            e.preventDefault();

            toast.textContent = 'APK IS DELETED';

            toast.classList.add('show');

            setTimeout(() => {
                toast.classList.remove('show');
            }, 2200);

            return;
        }


        // Display the normal download notification.
        toast.textContent =
            'Преземањето е започнато.';

        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 2200);
    }
);


// ============================================================
// BROWSER HISTORY HANDLING
// ============================================================

// Synchronize the drawer with browser back and forward navigation.
window.addEventListener(
    'popstate',
    () => {

        if (!location.hash) {

            closeDrawer(false);

        } else {

            openApp(
                location.hash.slice(1)
            );
        }
    }
);


// ============================================================
// APPLICATION INITIALIZATION
// ============================================================

// Render the application list.
render();


// Start the automatic release checker.
startReleaseChecker();


// Reopen an application if its ID is present in the URL hash.
if (location.hash) {
    openApp(
        location.hash.slice(1)
    );
}