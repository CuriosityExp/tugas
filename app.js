let string = `BIODATA INTERVIEW\n\nNAMA: NAMA SAYA\nSEKOLAH: BACHELOR OF DEGREE UNIVERSITY OF INDONESIA\nTANGGAL DAN JAM: 7/12/2021 15:22:32\n\nPROGRAMMING LANGUAGES: PHP, GO, JAVASCRIPT, SQL, PYTHON, RUBY, CSS, HTML, FRAMEWORK DLL(VUE JS, CODEIGNITER, RUBY ON RAILS, JQUERY, BOOTSTRAP, MYSQL, WORDPRESS) GOOGLE SERVICE(FIREBASE, GOOGLE ANALYTICS, BIGQUERY) VCS(GIT, GITLAB)\nTERIMA KASIH`;

let lines = string.split('\n')
let flag = false
let colonPosition = -Infinity;
lines = lines.map((line,idx) => {
    //set posisi titik dua
    if (colonPosition < line.search(":")) {
      colonPosition = line.search(":");
    }
    //flagging untuk indentasi
    if (idx === 1 || idx === lines.length - 1) {
        flag = !flag
    }
    //memecah string berdasarkan empty space
    let words = line.split(' ')
    if (words.length > 1) {
        //Mengubah capital letter
        let newWords = words.map(element => {
            element = element[0] + element.slice(1).toLowerCase();
            return element
        })
        newWords = newWords.join(' ')
        flag ? (newWords = " ".repeat(3) + newWords) : "";
        return newWords
    }
    return ' '
})
lines = lines.map((line)=>{
    //Mengubah jarak antara titik dua
    if (line.search(":") > 0) {
        line = line.slice(0,line.search(":")) + " ".repeat(colonPosition+3+5-line.search(":"))+ ':' + " ".repeat(2) + line.slice(line.search(":")+1)
    }
    return line
})
lines[lines.length-2] += "\n"

let proLang = lines[lines.length-2].split(",")
let indentSpacing = colonPosition+11
//Menambah spacing saat new line
for (let index = 6; index < proLang.length; index+=4) {
     proLang[index] = "\n"+" ".repeat(indentSpacing)+proLang[index]
}
lines[lines.length-2] = proLang.join(",")
lines=lines.join("\n")
console.log(lines)
