let programDictionary = {
                         txt: "notepad.exe", 
                         bmp: "paint.exe", 
                         dib: "paint.exe", 
                         rtf: "wordpad.exe"
                        };

for (var key in programDictionary) {
    console.log(key + ' = ' + programDictionary[key]);
}