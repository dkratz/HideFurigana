function getCheckedCheckboxesFor(checkboxName) {
    var checkboxes = document.querySelectorAll('input[name="' + checkboxName + '"]:checked'), values = [];
    Array.prototype.forEach.call(checkboxes, function (el) {
        values.push(el.value);
    });
    return values;
}

function loadOptions() {
    console.log("loadOptions");
    chrome.storage.sync.get({ additionalKanji: "", kanjiSets: [], kanjiSetsLevel: {} }, function (data) {
        console.log(data);
        document.getElementById("additionalKanji").value = data.additionalKanji;
        //document.getElementById("kklcLevel").value = data.kklcLevel;
        for(let i = 0; i < data.kanjiSets.length; i++) {
            document.querySelector("input[name='kanjiSets'][value='" + data.kanjiSets[i] + "']").checked = true;
        }
        for(key in data.kanjiSetsLevel) {
            document.querySelector(".kanjiSetsLevel[data-name='" + key + "']").value = data.kanjiSetsLevel[key];
        }
    });
}

function saveOptions() {
    console.log("saveOptions");
    let additionalKanji = document.getElementById("additionalKanji").value;
    let kanjiSets = getCheckedCheckboxesFor("kanjiSets");
    let kanjiSetsLevel = {};
    let nodes = document.querySelectorAll(".kanjiSetsLevel");
    for(let i = 0; i < nodes.length; i++) {
        kanjiSetsLevel[nodes[i].dataset.name] = nodes[i].value;
    }
    let options = { additionalKanji: additionalKanji, kanjiSets: kanjiSets, kanjiSetsLevel: kanjiSetsLevel };
    chrome.storage.sync.set(options, function () {
        console.log(options);
        document.getElementById("status").textContent = "Options saved."
    });
}

(function () {
    "use strict";

    loadOptions();
    document.getElementById("save").addEventListener("click", saveOptions);
})();