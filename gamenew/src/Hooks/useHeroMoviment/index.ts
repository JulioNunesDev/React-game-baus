import React, { useEffect, useState } from 'react'
import handNextPosition from '../../contexts/canvas/helpers'
import { EDIrection } from '../../settings/constants'





  export default function useHeroMoviment(initialPosition: any){
    const [positionState, setPositionState]=useState(initialPosition)
    const [direction, setDirection]=useState(EDIrection.RIGHT)
  
  useEffect(()=>{
   

    const movimentoHero =(event: any)=>{

      const direction  = event.key as EDIrection
      const nextPosition = handNextPosition(direction, positionState)
        setDirection(direction)
        setPositionState(nextPosition)
    }
    window.addEventListener('keydown', movimentoHero )

    return ()=>{
      window.removeEventListener('keydown', movimentoHero )
    }

  },[positionState])

  return {
      position: positionState,
      direction: direction
  }

}