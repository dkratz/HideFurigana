import { toggleIcon } from "./toggleIcon.js";

chrome.storage.sync.get({ furiganaHidden: true }, (data) => {
    toggleIcon(data.furiganaHidden);
});