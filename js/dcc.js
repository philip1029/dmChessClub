function start() {
    let person = ["권오승", "장세녹", "정서율", "김민재(small)", "이필립", "이유은", "김민재(big)", "박지혁"];
    person.sort(() => Math.random() - 0.5);
    let n = person.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        let first = person[0];
        let second = person[1];
        console.log((i + 1) + " 라운드: " + first + " vs. " + second);
        alert((i + 1) + " 라운드: " + first + " vs. " + second);
        //document.write((i + 1) + " 라운드: " + first + " vs. " + second + "<br>");
        person.splice(0, 2);
        }
    if (n % 2 === 1) {
    console.log("부전승: " + person[0]);
    alert("부전승: " + person[0]);
    //document.write("부전승: " + person[0]);
        }
}

function goToScroll(name) {
    var location = document.querySelector("." + name).offsetTop;
    window.scrollTo({top: location, behavior: 'smooth'});
}