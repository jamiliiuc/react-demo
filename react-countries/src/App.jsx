import './App.css'
import Countries from './Components/Countries/Countries.jsx'
import VisitedCountries from './Components/VisitedCountries/VisitedCountries.jsx'
function App() {
  function handleVisitedCountries(){

  }
  return (
    <>
      <VisitedCountries handleVisitedCountries = {handleVisitedCountries}></VisitedCountries>
      <Countries></Countries>
    </>
  )
}

export default App
