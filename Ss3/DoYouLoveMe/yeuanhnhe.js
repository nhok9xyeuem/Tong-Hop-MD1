function yes() {
    document.getElementById('yes').innerHTML= '<3 I Love You <3 ';

}
function no() {
let x=Math.round(Math.random() * window.innerWidth);
let y = Math.round(Math.random() * window.innerHeight);
document.getElementById('no').style.top= x+'px';
document.getElementById('no').style.left=y+'px';
}