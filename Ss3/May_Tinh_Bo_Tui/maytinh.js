function set(value) {
    document.getElementById("output").value += value;
}

function trave() {
    let output = document.getElementById("output").value;
    document.getElementById("output").value = eval(output);
}

function clean() {
    document.getElementById("output").value = '';
}

function del() {
    let del = document.getElementById('output').value;
    document.getElementById('output').value = del.substring(0, del.length - 1);
}