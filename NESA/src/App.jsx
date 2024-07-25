import { useState } from 'react'
import './App.css'
import Content from './Content.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className=" bg-[url('./assets/homeBG.jpg')] bg-cover flex flex-col h-screen">
      <Header />
      <Content />
      <Footer />
    </div>

  )
}

export default App
