const { remote } = require('electron');

document.getElementById('min-btn').addEventListener('click', minWin);
document.getElementById('close-btn').addEventListener('click', closeWin);


function minWin() {
    var window = remote.getCurrentWindow();
    window.minimize();
}

function closeWin() {
    var window = remote.getCurrentWindow();
    window.close();
}
