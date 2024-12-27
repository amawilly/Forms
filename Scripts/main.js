const leftPanel = document.getElementById('left-panel');
const rightPanel = document.getElementById('right-panel');
const resizer = document.getElementById('resizer');
let isResizing = false;

function initializePanels() {
    const totalWidth = window.innerWidth;
    leftPanel.style.width = `${totalWidth}px`;
    rightPanel.style.display = 'none';
}

resizer.addEventListener('mousedown', () => {
    isResizing = true;
    document.body.style.cursor = 'ew-resize';
});

document.addEventListener('mousemove', (e) => {
    if (!isResizing) return;

    const minWidth = 50;
    const maxWidth = window.innerWidth - minWidth;

    const leftWidth = Math.max(minWidth, Math.min(e.clientX, maxWidth));
    leftPanel.style.width = `${leftWidth}px`;
    rightPanel.style.width = `${window.innerWidth - leftWidth - resizer.offsetWidth}px`;
});

document.addEventListener('mouseup', () => {
    isResizing = false;
    document.body.style.cursor = 'default';
});

function showForum(index) {
    const forums = document.querySelectorAll('.forum');
    forums.forEach(forum => forum.classList.remove('active'));
    const activeForum = document.getElementById(`forum${index}`);
    activeForum.classList.add('active');
    rightPanel.style.display = 'block';
    leftPanel.style.width = '50%';
}
