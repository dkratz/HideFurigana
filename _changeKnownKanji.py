import os
import re


def main():
    #folder = "C:/Users/Dominik/AppData/Roaming/Anki2/User 1/collection.media/"
    folder = "./"
    filepath = "_hideFurigana.js"
    renameFilepaths = {
        "_rename_a.txt": "_rename_b.txt",
        "_rename_b.txt": "_rename_a.txt"
    }

    # attach folder
    filepath = os.path.join(folder, filepath)
    renameFilepathsFolder = {}
    for oldFilename, newFilename in renameFilepaths.items():
        renameFilepathsFolder[os.path.join(folder, oldFilename)] = os.path.join(folder, newFilename)

    # change kklc level
    print(filepath)
    levelRegex = re.compile(r"    let ankiKklcLevel = (\d+);")
    with open(filepath, "r+", encoding="utf-8") as f:
        fileText = f.read()
        currentLevel = levelRegex.findall(fileText)
        if not currentLevel:
            print("Error: Couldn't find current level in {}.".format(filepath))
            return
        currentLevel = currentLevel[0]

        print("KKLC Level: {}".format(currentLevel))
        newLevel = input("New KKLC Level: ")
        if not newLevel.isdigit():
            print("Error: New level is not a number.")
            return

        f.seek(0)
        fileText = levelRegex.sub("    let ankiKklcLevel = {};".format(newLevel), fileText)
        f.write(fileText)

        print("{} updated.".format(filepath))

    # rename file
    for oldFilename, newFilename in renameFilepathsFolder.items():
        try:
            os.rename(oldFilename, newFilename)
            print("Renamed {} -> {}.".format(oldFilename, newFilename))
            break
        except OSError:
            pass


if __name__ == "__main__":
    main()
