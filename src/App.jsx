import React, { useState } from 'react'
import Background from './components/background'
import Foreground from './components/Foreground'

function App() {
  useState
  return (
    <div className='relative w-full h-screen bg-zinc-900'>
      <Background/>
      <Foreground/>
    </div>
  )
}

export default App