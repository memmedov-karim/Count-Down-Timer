const current_date = document.getElementById("current");

const day = document.getElementById("day");
const hours = document.getElementById("hours");
const minute = document.getElementById("minute");
const second = document.getElementById("second");


current_date.addEventListener("keypress",(e)=>{
    if(e.keyCode==13){

        console.log(current_date.value)
        function countdown(){
            const dt = new Date(current_date.value);
            const crnt = new Date();
            const totalseconds = (crnt-dt)/1000;
            const days = -Math.floor(totalseconds/3600/24);
            const hour = -Math.floor(totalseconds/3600) % 24;
            const mins = -Math.floor(totalseconds / 60) % 60;
            const sec = -Math.floor(totalseconds) % 60;
            day.innerHTML = days;
            hours.innerHTML = hour;
            minute.innerHTML = mins;
            second.innerHTML = sec;


            console.log(days,hour,mins,sec);
            

        }
        countdown();
        setInterval(countdown,1000);
        
    }
    
})