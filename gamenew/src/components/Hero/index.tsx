import { useEffect, useState } from 'react'

import { HERO_HEKMET_OFFSET, TILE_SIZE } from '../../settings/constants'
import './hero.css'
import useEventListener from "@use-it/event-listener";


const initialPosition ={
  x: 8,
  y: 3
}
export default function Hero() {

  const [positionState, setPositionState]=useState(initialPosition)
  const [direction, setDirection]=useState('RIGHT')
  
  useEffect(()=>{
   

    const movimentoHero =(event)=>{
      if(event.key === 'ArrowLeft'){
        setPositionState({x: positionState.x - 1, y: positionState.y})
        setDirection("LEFT")
      }
      else if(event.key === 'ArrowUp'){
        setPositionState({x: positionState.x , y: positionState.y + 1})
      }
      else if(event.key === 'ArrowRight'){
        setPositionState({x: positionState.x + 1 , y: positionState.y})
        setDirection("RIGHT")
      }

      else if(event.key === 'ArrowDown'){
        setPositionState({x: positionState.x, y: positionState.y - 1})
      }
    }
    window.addEventListener('keydown', movimentoHero)

    return ()=>{
      window.removeEventListener('keydown', movimentoHero)
    }

  },[positionState])


  return (
    
      <div style={{
        position: 'absolute',
        bottom: TILE_SIZE * positionState.y,
        left: TILE_SIZE * positionState.x,
        backgroundImage: 'url(../../../../../public/assets/HERO.png)',
        height: TILE_SIZE + HERO_HEKMET_OFFSET,
        width: TILE_SIZE,
        backgroundPosition: `0px -${TILE_SIZE - HERO_HEKMET_OFFSET}px`,
        animation: 'HeroAnimation steps(4) 1s infinite',
        transform: `scaleX(${direction === 'RIGHT' ? 1 : -1})`
      }}>

      </div>
    
  )
}
