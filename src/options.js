function getCheckedCheckboxes(checkboxName) {
    var checkboxes = document.querySelectorAll('input[name="' + checkboxName + '"]:checked'), values = [];
    Array.prototype.forEach.call(checkboxes, (el) => {
        values.push(el.value);
    });
    return values;
}

function loadOptions() {
    chrome.storage.sync.get({ extraKanji: "", kanjiSets: [], kanjiSetsLevel: {} }, (data) => {
        document.getElementById("extraKanji").value = data.extraKanji;
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
    let extraKanji = document.getElementById("extraKanji").value;
    let kanjiSets = getCheckedCheckboxes("kanjiSets");
    let kanjiSetsLevel = {};
    let nodes = document.querySelectorAll(".kanjiSetsLevel");
    for(let i = 0; i < nodes.length; i++) {
        kanjiSetsLevel[nodes[i].dataset.name] = nodes[i].value;
    }
    let options = { extraKanji: extraKanji, kanjiSets: kanjiSets, kanjiSetsLevel: kanjiSetsLevel };
    chrome.storage.sync.set(options, () => { });
}

(function () {
    "use strict";

    loadOptions();
    let inputs = document.querySelectorAll("input");
    for(let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("input", saveOptions);
    }
})();