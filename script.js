area = document.getElementById('area');
area2 = document.getElementById('area2');

function zero(x) {
    if (x < 10) {
        x = '0' + x;
    } return x;
}
function setar(){
    var data = new Date();
    area.innerHTML = zero(data.getHours()) + " : " + zero(data.getMinutes()) + " : " + zero(data.getSeconds());
    area2.innerHTML = zero(data.getDate()) + "/" + zero((data.getMonth()+ 1)) + "/" + data.getFullYear();
}
setInterval(setar, 1000);
