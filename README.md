# Chrome Extension
* <chrome://extensions/>
* Enable developer mode
* Load unpacked or Pack extension

# Anki
* Rename `src/contentscript.js` to `_hideFurigana.js`
* Copy `_hideFurigana.js` and `_changeKnownKanji.py` to Anki collections folder.    
  ( `C:\Users\*username*\AppData\Roaming\Anki2\User 1\collection.media` )
* Add to card:    
`<script type="text/javascript" src="_hideFurigana.js"></script>`
* Use `_changeKnownKanji.py` to change known kanji number for the Anki script