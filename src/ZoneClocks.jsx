import Clock from "./Clock.jsx";
import {useState} from "react";
function ZoneClocks() {
    const [zone, setZone] = useState(0);
    function handleZone(Event) {
        setZone(Event.target.value);        
    }

    return(
        <div  className="cards">
        <div className="clock">
            <span>Current time in:</span>
         <select  onChange={handleZone}>
         <option value='0'>UTC</option>
         <option value='-60'>UTC+01:00</option>
         <option value='-120'>UTC+02:00</option>
         <option value='-180'>UTC+03:00</option>
         <option value='-210'>UTC+03:30</option>
         <option value='-240'>UTC+04:00</option>
            <option value='-270'>UTC+04:30</option>
            <option value='-300'>UTC+05:00</option>
            <option value='-330'>UTC+05:30</option>
            <option value='-345'>UTC+05:45</option>
            <option value='-360'>UTC+06:00</option>
            <option value='-390'>UTC+06:30</option>
            <option value='-420'>UTC+07:00</option>
            <option value='-480'>UTC+08:00</option>
            <option value='-525'>UTC+08:45</option>
            <option value='-540'>UTC+09:00</option>
            <option value='-570'>UTC+09:30</option>
            <option value='-600'>UTC+10:00</option>
            <option value='-630'>UTC+10:30</option>
            <option value='-660'>UTC+11:00</option>
            <option value='-720'>UTC+12:00</option>
            <option value='-765'>UTC+12:45</option>           
            <option value='-780'>UTC+13:00</option>
            <option value='-825'>UTC+13:45</option>
            <option value='-840'>UTC+14:00</option>
            <option value='720'>UTC-12:00</option>
            <option value='660'>UTC-11:00</option>
            <option value='600'>UTC-10:00</option>
            <option value='570'>UTC-09:30</option>
            <option value='540'>UTC-09:00</option>
            <option value='480'>UTC-08:00</option>
            <option value='420'>UTC-07:00</option>
            <option value='360'>UTC-06:00</option>
            <option value='300'>UTC-05:00</option>
            <option value='240'>UTC-04:00</option>
            <option value='210'>UTC-03:30</option>
            <option value='180'>UTC-03:00</option>
            <option value='150'>UTC-02:30</option>
            <option value='120'>UTC-02:00</option>
            <option value='60'>UTC-01:00</option>
         </select>
         <Clock timezone={zone}/>
        </div>
        </div>
    );
}
export default ZoneClocks;