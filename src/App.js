//import { getCharacter, getCharacters } from 'rickmortyapi'
import {useEffect, useState } from 'react'
import GetCharacter from './GetCharacter';
import './App.css';

function App() { 
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    const fetchData = async() => {
     // const characters = await getCharacters()
     const res = await fetch('https://rickandmortyapi.com/api/character')
     const data = await res.json()
      console.log(data.results)
      setCharacters(data.results)
    }
    fetchData()
  },[])

  return (
    <div className="App" style={{backgroundColor: "green"}}> 

     <h1>Rick and morty App</h1>
     < GetCharacter characters={characters} /> 
    </div>
  );
}

export default App;
