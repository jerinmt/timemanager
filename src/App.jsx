import './App.css'
import Notepad from './Notepad.jsx'
import Stopwatch from './Stopwatch.jsx'
import Timer from './Timer.jsx'
import ZoneClocks from './ZoneClocks.jsx'

function App() {
  
  return (
    <div className='cardapps'>
      <div className='firstrow'>
        <ZoneClocks/>
        <ZoneClocks/>
        <ZoneClocks/>
      </div>
      <div className='secondrow'>
        <Timer/>
        <Stopwatch/>
        <Notepad/>
      </div>
    </div>
  )
}

export default App