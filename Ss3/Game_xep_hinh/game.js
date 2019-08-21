function f(number) {
    let random = Math.ceil(Math.random() * 5);
    let anh = document.getElementById('anh' + number);
    let name = "";

    switch (random) {
        case 1:
            name = "x" + number;
            break;
        case 2:
            name = "xx" + number;
            break;
        case 3:
            name = "xxx" + number;
            break;
        case 4:
            name = 'xxxx' + number;
            break;
        case 5:
            name = 'xxxxx' + number;
            break
    }

    anh.src = "anh/" + name + ".jpg";
    if ("anh/"+name+1 =="anh/"+name+2 && "anh/"+name+2 =="anh/"+name+3 && "anh/"+name+3 =="anh/"+name+4 && "anh/"+name+4 =="anh/"+name+5 ){
        document.getElementById('chucmung').innerHTML='chuc mung'
    }
}
