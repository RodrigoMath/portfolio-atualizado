import { useState } from 'react'
import Home from './components/home/Home'

const App = () => {

 const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
    </>
  )
}

export default App
