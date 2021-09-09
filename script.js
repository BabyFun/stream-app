var min = document.getElementById('minutes');
var sec = document.getElementById('seconds');
now_date = Date.now();
new_date = now_date;

function updateChrono() {


    // const new_date = new Date()
    new_date+=1000;
    const diff = new_date - now_date;

    const m = Math.floor(diff / 1000 / 60) %60 ;
    const s = Math.floor(diff / 1000) %60 ;

    min.innerHTML = m < 10 ? '0' + m : m;
    sec.innerHTML = s < 10 ? '0' + s : s;


}
setInterval(updateChrono, 1000);