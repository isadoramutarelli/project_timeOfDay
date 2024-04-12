document.getElementById("currentYear").textContent = new Date().getFullYear();

function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('img');
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();

    msg.innerHTML = `<strong>Agora são ${hour}:${min} </strong>`;
    if(hour >=0 && hour < 12 ){
        //BOM DIA
        img.src = 'photo_morning.png'
        document.body.style.background = '#cac9c5';
    }else if(hour <= 18){
        //BOA TARDE
        img.src = 'photo_afternoon.png';
        // document.body.style.background ='#f9ac8c';
        //document.body.style.background ='#9b6550';
        document.body.style.background ='#dc8965';

    }else{
        //BOA NOITE
        img.src = 'photo_nigth.png';
        document.body.style.background = '#022241';


    }

}
