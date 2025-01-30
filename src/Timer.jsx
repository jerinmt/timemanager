import {useState, useEffect, useRef} from "react";

function Timer() {
  const [isRun, setIsRun] = useState(false);
  const [required, setRequired] = useState(0);
  const interval = useRef(null);
  const endTime = useRef(0);
  const [startSeconds, setStartSeconds] = useState(0); 
  const [startMinutes, setStartMinutes] = useState(0); 
  const [startHours, setStartHours] = useState(0); 

  useEffect(()=> {
    if(isRun){ 
      interval.current = setInterval(()=>{
        setRequired(endTime.current - Date.now());
      },10);
    }
    
    return ()=> {
      clearInterval(interval.current);
    }
  },[isRun]);
  function startStop(){
    if(isRun){
      setIsRun(false);
    }
    else {
      setIsRun(true);
      endTime.current = Date.now() + required;
    }
  }
  function setDuration(){
    setRequired(startHours*3600000+startMinutes*60000+startSeconds*1000);
    setIsRun(false);
  }
  function timeShow(){
    if(required>999) {
      let hours = Math.floor(required/(1000*60*60));
      let minutes = Math.floor(required/(1000*60)%60);
      let seconds = Math.floor(required/(1000)%60);
      hours=String(hours).padStart(2,'0');
      minutes=String(minutes).padStart(2,'0');
      seconds=String(seconds).padStart(2,'0');
      return (hours+':'+minutes+':'+seconds);
    }
    else {
      clearInterval(interval.current);
      return ('00:00:00');
    }
  }
  function hourChange(Event) {
    setStartHours(Event.target.value);
  }
  function minuteChange(Event) {
    setStartMinutes(Event.target.value);
  }
  function secondChange(Event) {
    setStartSeconds(Event.target.value);
  }
  
  return (<>
    <div className="cards">
      <div className="timer">
        <span><u><b>Timer</b></u></span>
        <div className="clock2">{timeShow()}</div>
        <div className="controls">
          <input type="number" min='0' id="hours" value={startHours} onChange={hourChange}/>
          <input type="number" min='0' max='59' id="minutes" value={startMinutes} onChange={minuteChange}/>
          <input type="number" min='0' max='59' id="seconds" value={startSeconds} onChange={secondChange}/>
            <button onClick={setDuration} className="reseter">SET</button>
            <button onClick={startStop} className="pauser">START/STOP</button>
        </div>
      </div>
    </div>
  </>);
}

export default Timer;