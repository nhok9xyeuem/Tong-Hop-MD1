function kiemtra() {
    let chieucao = parseFloat(document.getElementById('chieucao').value);
    let cannang = parseFloat(document.getElementById('cannang').value);
    let bmi = cannang / (chieucao * chieucao);
    if (bmi < 18.5) {
        document.getElementById('trave').innerHTML = ('Ban Qua Gay , Co Gang Tang Can:'  + bmi);
    } else if (18.5 < bmi && bmi < 25) {
        document.getElementById('trave').innerHTML = ('Ban Can Doi , Luon Giu Vung Suc Khoe Nhe:'  + bmi);
    } else if (25 <= bmi && bmi < 30) {
        document.getElementById('trave').innerHTML = 'Ban Dang Beo , Giam Can Di : ' + bmi;
    } else {alert(2);
        document.getElementById('trave').innerHTML = ' Ban Qua Beo , Giam Can Ngay De Giu Suc Khoe :' + bmi;
    }
}