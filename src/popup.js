"use strict";

var toggleOnStr = "ON";
var toggleOffStr = "OFF";

function toggleFurigana(callback) {
    chrome.storage.sync.get({ furiganaHidden: true }, function (data) {
        let newState = !data.furiganaHidden;
        chrome.storage.sync.set({ furiganaHidden: newState }, function () {
            // send to all tabs
            chrome.tabs.query({}, function (tabs) {
                for(let i = 0; i < tabs.length; i++) {
                    chrome.tabs.sendMessage(tabs[i].id, { toggleFurigana: newState }, function (response) {
                        callback(newState)
                    });
                }
            });
        });
    });
}

function toggleButtonString(state) {
    if(state) {
        document.querySelector("#toggleFurigana").textContent = "Toggle: " + toggleOnStr;
    } else {
        document.querySelector("#toggleFurigana").textContent = "Toggle: " + toggleOffStr;
    }
}

document.querySelector("#toggleFurigana").addEventListener("click", function () {
    toggleFurigana(function (newState) {
        toggleButtonString(newState);
    });
});

document.querySelector("#openOptions").addEventListener("click", function () {
    if(chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
    } else {
        window.open(chrome.runtime.getURL("options.html"));
    }
});

(function () {
    chrome.storage.sync.get({ furiganaHidden: true }, function (data) {
        toggleButtonString(data.furiganaHidden);
    });
})();