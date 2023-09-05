function start() {
    let person = ["권오승", "장세녹", "정서율", "김민재(small)", "이필립", "이유은", "김민재(big)", "박지혁", "장민정", "박민주", "박주호"];
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

function win()  {
    const a = document.getElementById('a').value;
    const b = document.getElementById('b').value;
    const c = 1-(1 / ((10 ** ((Number(a) - Number(b)) / 400)) + 1));
    document.getElementById("result1").innerText = Math.round((c) * 10000) / 100 + "%";
    document.getElementById("result2").innerText = Math.round((1 - c) * 10000) / 100 + "%";

    const k = 60
    const d = document.querySelector('input[name="options"]:checked').value;
    const e = Math.round(k * (d - c))
    var pm = ""
    if (e > 0) {var pm = "+"}
    document.getElementById("result3").innerText = String(Number(a) + e) + "("+pm+String(e)+")";
    const f = Math.round(k * (Math.abs(d - 1) - (1 - c)))
    var pm = ""
    if (f > 0) {var pm = "+"}
    document.getElementById("result4").innerText = String(Number(b) + f) + "("+pm+String(f)+")";
}

//document.getElementById("result").innerText = "입력값에 오류가 있습니다.";

function goToScroll(name) {
    var location = document.querySelector("." + name).offsetTop;
    window.scrollTo({top: location, behavior: 'smooth'});
}