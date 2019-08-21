let anh=null;
anh= document.getElementById('anhdong');

function hinhanh() {
    anh=document.getElementById('anhdong');
    anh.style.position='ralative';
    anh.style.left='opx';

    
}
function dichuyen() {
    anh.style.left=parseInt(anh.style.left) +30 +'px';


}
window.onload=hinhanh;