import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState("My First React App");
  const [countries, setCountries] = useState([]);
  const sum = 5;
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => setCountries(data))
  },[]);
  // const titleStyle = {
  //   color: "red",
  //   fontSize : "30px" 
  // }

  function changeTitle(newTitle)
  {
    setTitle(newTitle);
  }

  return (
    <div style = {{border: "1px solid black", padding: "5px"}}>
      <h1>{countries.length}</h1>

      {
        // countries.map(x => <p>{x.name.common}</p>)
      }



      <h1>{title}</h1>
      <h2 style={{ color: "red", backgroundColor: "black" }}>Hello from here</h2>

      <div style={{display: "flex", gap: "20px", border: "1px solid black", justifyContent: "space-between"}}>

        <Person changeTitle={changeTitle} name="abul kalam" cgpa="3.999"></Person>
        {
          [<Person changeTitle={changeTitle} name="Asif" cgpa="4.00"/>,
            <Person changeTitle={changeTitle} name="jamil" cgpa="3.00"/>,
            <Person changeTitle={changeTitle} name="Shujoy" cgpa="5.00"/>
            ]
        }
      </div>
      <Employee setTitle = {setTitle}></Employee>
    </div>
  )
}

function Person({changeTitle, name, cgpa}) {
  // const {name, cgpa} = props;
  const [currentCgpa, setCurrentCgpa] = useState(cgpa);
  return (<div>
    <h2>Hello</h2>
    <p>Name: {name}</p>
    <p>CGPA: {parseFloat(currentCgpa).toFixed(3)}</p>
    {/* <button onClick={ () => setCurrentCgpa(parseFloat(currentCgpa) + 1)}>Inc</button>
    <button onClick={ () => setCurrentCgpa(parseFloat(currentCgpa) - 2)}>Dec</button> */}
    <button onClick = {() => changeTitle(name)}>Greet</button>
  </div>)
}

function Employee({setTitle}) {
  const name = "Poyshawala Asif";
  return (<div>
    <p>Name: {name}</p>
    <p>Salary: 100k usd</p>
    <button onClick={()=>setTitle(name)}>Greet</button>
  </div>)
}

export default App
