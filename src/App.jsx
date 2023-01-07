import { useState } from 'react'
import Quotecall from './Quotecall'
import "./App.css"
import { Footer } from './footer'

function App() {
  

  return (
    <section className='main-container'>
      <h1 className='title'>Zen Quote</h1>
      <Quotecall />
      <Footer />
    </section>
  )
}

export default App
