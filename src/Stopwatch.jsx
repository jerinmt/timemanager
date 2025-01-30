import {useState, useEffect, useRef} from "react";
function Stopwatch(){
    const [isRun, setIsRun] = useState(false);
    const [elapsed, setElapsed] = useState(0);
    const interval = useRef(null);
    const startTime = useRef(0);
    useEffect(()=> {
        if(isRun){
            interval.current = setInterval(()=>{
                setElapsed(Date.now()- startTime.current);
            },10);
        }
        return ()=> {
            clearInterval(interval.current);
        }
    },[isRun]);
    function startStop(){
        if(isRun) {
            setIsRun(false);
        }
        else {
            setIsRun(true);
            startTime.current = Date.now() - elapsed;
        }
    }
    function reset(){
        setElapsed(0);
        setIsRun(false);
    }
    function timeShow(){
        let hours = Math.floor(elapsed/(1000*60*60));
        let minutes = Math.floor(elapsed/(1000*60)%60);
        let seconds = Math.floor(elapsed/(1000)%60);
        hours=String(hours).padStart(2,'0');
        minutes=String(minutes).padStart(2,'0');
        seconds=String(seconds).padStart(2,'0');

        return (hours+':'+minutes+':'+seconds);
    }
    return(
        <div className="cards">
            <div className="stopwatch">
            <span><u><b>Stopwatch</b></u></span>
            <div className="clock2">{timeShow()}</div>
            <div className="controls">
                <button onClick={startStop} className="starter">START/STOP</button>
                <button onClick={reset} className="reseter">RESET</button>
            </div>
            </div>
        </div>
    );
}

export default Stopwatch;