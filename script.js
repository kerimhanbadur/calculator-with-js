function dis(val) {
    document.getElementById("result").value += val;
}

function solve() {
    try {
        let x = document.getElementById("result").value;
        let y = eval(x);
        document.getElementById("result").value = y;
    }
    catch {
        document.getElementById("result").value = "HATA";
    }
}

function clr() {
    document.getElementById("result").value = "";
}