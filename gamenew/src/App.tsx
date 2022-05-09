import { useState } from 'react'
import tikeset from './assets/assets/tileset.gif'

import './App.css'
import Board from './components/Board'
import { GAME_SIZE } from './settings/constants'
import Debugger from './components/debugger'

function App() {


  return (
    <div className="App">
      <div style={{position: 'relative', height: GAME_SIZE, width: GAME_SIZE}}
      className="App-header">
      <Debugger />
      <Board />
      </div>
    </div>
  )
}

export default App
