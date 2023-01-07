import { useState } from 'react'
import Quotecall from './Quotecall'
import "./App.css"
import { Footer } from './Footer'

function App() {
  

  return (
    <section className='main-container'>
      <h1 className='title'>Quote Generator</h1>
      <Quotecall />
      <Footer />
    </section>
  )
}

export default App
