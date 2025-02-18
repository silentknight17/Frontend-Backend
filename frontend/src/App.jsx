import './App.css'

import { useEffect, useState } from 'react'

import axios from "axios";

function App() {

  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes').then((response) => {
      console.log({response});
      setJokes(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  },[])
  

  return (
    <>
      <h1>Coffee and Full Stack!</h1>
      <p>Jokes: {jokes.length}</p>

        
        <>{jokes?.map((joke) => {
          return(
            <div key={joke.id}>
              <h3>{joke.title}</h3>
              <p>{joke.content}</p>
            </div>
          )
        })}</>
        
      
    </>
  )
}

export default App
