import { useState } from 'react'
import Header from './components/header'
import CardList from './components/CardList'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <CardList/>
    </>
  )
}

export default App
