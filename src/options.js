function loadOptions() {
    chrome.storage.sync.get({ kklcLevel: 0, additionalKanji: "" }, function (data) {
        document.getElementById("kklcLevel").value = data.kklcLevel;
        document.getElementById("additionalKanji").value = data.additionalKanji;
    });
}

function saveOptions() {
    console.log("save")
    let kklcLevel = document.getElementById("kklcLevel").value;
    let additionalKanji = document.getElementById("additionalKanji").value
    chrome.storage.sync.set({ kklcLevel: kklcLevel, additionalKanji: additionalKanji }, function () {
        document.getElementById("status").textContent = "Options saved."
    });
}

(function () {
    "use strict";

    loadOptions();
    document.getElementById("save").addEventListener("click", saveOptions);
})();