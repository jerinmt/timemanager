import { useState, useEffect} from "react";

function Clock({timezone}) {

    const [time,setTime] = useState(new Date());
    
    useEffect(() => {
        const x = setInterval(() => {setTime(new Date());},1000);
    
        return () => {clearInterval(x);}
    },[]);
    
    function currentTime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let offset=time.getTimezoneOffset();
        offset=offset-timezone;
        minutes=minutes+(offset%60);    
        offset=offset-(offset%60);
        hours=hours+(offset/60);  
        if(minutes>60){
          minutes-=60;
          hours++;
        }
        if(minutes<0){
          minutes=60+minutes;
          hours--;
        }
        if(hours>24){
            hours-=24;
        }
        if(hours<0){
            hours=24+hours;
        }
        let part = hours>= 12?'PM':'AM';
        hours = hours%12||12;
        hours=String(hours).padStart(2,'0');
        minutes=String(minutes).padStart(2,'0');
        seconds=String(seconds).padStart(2,'0');

        return (hours+':'+minutes+':'+seconds+' '+part); 
    }
    
    return (
        <div className="container">
            <div className="clock">
                <h1>{currentTime()}</h1>

            </div>
        </div>
    );
}

export default Clock;