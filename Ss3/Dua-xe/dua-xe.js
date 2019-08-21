let change=false;

function run() {
    let anh1 = document.getElementById('anhdong2');
    let maxtop = window.innerHeight;
    let maxleft = window.innerWidth;

    let top = parseInt(anh1.style.top);
    let left = parseInt(anh1.style.left);
    if (!change) {
        if (left < maxleft - 300) {
            left += 5;
        } else if (top < maxtop - 200) {
            top += 5;
        } else {
            change = true;
        }
    }
    if (change) {
        if (left > 0) {
            left -= 5;
        } else if (top > 0) {
            top -= 5;
        } else {
            change = false;
        }
    }
    anh1.style.left = left + 'px';
    anh1.style.top = top + 'px';

}
