function tren() {
    let anh = document.getElementById('hotgirl');
    anh.style.top = parseInt(anh.style.top) - 20 + 'px';
}

function duoi() {
    let anh = document.getElementById('hotgirl');
    anh.style.top = parseInt(anh.style.top) + 20 + 'px';
}

function trai() {
    let anh = document.getElementById('hotgirl');
    anh.style.left = parseInt(anh.style.left) - 20 + 'px';
}

function phai() {
    let anh = document.getElementById('hotgirl');
    anh.style.left = parseInt(anh.style.left) + 20 + 'px';
}
function phimbam(phimbam) {

    switch (phimbam.keyCode) {
        case 87:

            tren();
            break;
        case 83:
            duoi();
            break;
        case 65:

            trai();
            break;
        case 68:

            phai();
            break;

    }

}

function trave() {
    window.addEventListener('keydown', phimbam);

}

