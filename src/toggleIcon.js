export function toggleIcon(state) {
    let newIconPath;
    if(state) {
        newIconPath = "assets/icon16.png"
    } else {
        newIconPath = "assets/icon16_inactive.png"
    }
    chrome.browserAction.setIcon({ path: newIconPath });
}