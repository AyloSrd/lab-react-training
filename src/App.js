import React from 'react'
import Cards from './components/Cards/Cards'
import GreetingsCont from './components/Greetings/GreetingsCont'
import Randoms from './components/Random/Randoms'
import Boxes from './components/BoxColor/Boxes'
import './App.css'

function App() {
  return (
    <>
      <Cards/>
      <GreetingsCont />
      <Randoms />
      <Boxes />
    </>
  )
}

export default App
