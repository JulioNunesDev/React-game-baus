import { useState } from 'react'
import tikeset from './assets/assets/tileset.gif'

import './App.css'
import Board from './components/Board'
import { GAME_SIZE } from './settings/constants'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div 
      style={{
        position: 'relative',
        height: GAME_SIZE,
        width: GAME_SIZE
      }}
      className="App-header">
      <Board />
      </div>
    </div>
  )
}

export default App
