"use strict";

import { toggleIcon } from "./toggleIcon.js";

const TOGGLE_ON_STR = "ON";
const TOGGLE_OFF_STR = "OFF";

function toggleFurigana(callback) {
    chrome.storage.sync.get({ furiganaHidden: true }, (data) => {
        let newState = !data.furiganaHidden;
        chrome.storage.sync.set({ furiganaHidden: newState }, () => {
            // send to all tabs
            chrome.tabs.query({}, function (tabs) {
                for(let i = 0; i < tabs.length; i++) {
                    chrome.tabs.sendMessage(tabs[i].id, { toggleFurigana: newState }, (response) => {
                        callback(newState);
                    });
                }
            });
        });
    });
}

function toggleButtonStyle(state) {
    let button = document.querySelector("#toggleFurigana");
    if(state) {
        button.textContent = TOGGLE_ON_STR;
        button.classList.add("on");
        button.classList.remove("off");
    } else {
        button.textContent = TOGGLE_OFF_STR;
        button.classList.add("off");
        button.classList.remove("on");
    }
}

document.querySelector("#toggleFurigana").addEventListener("click", () => {
    toggleFurigana((newState) => {
        toggleButtonStyle(newState);
        toggleIcon(newState);
    });
});

document.querySelector("#openOptions").addEventListener("click", () => {
    if(chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
    } else {
        window.open(chrome.runtime.getURL("options.html"));
    }
});

(function () {
    chrome.storage.sync.get({ furiganaHidden: true }, (data) => {
        toggleButtonStyle(data.furiganaHidden);
        toggleIcon(data.furiganaHidden);
    });
})();