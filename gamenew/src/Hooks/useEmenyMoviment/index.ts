import { useEffect, useState } from 'react'
import { EDIrection } from '../../settings/constants'

import handNextPosition from '../../contexts/canvas/helpers'




  export default function useEnemyMoviment(initialPosition: any){

    const [positionState, setPositionState]=useState(initialPosition)
    const [direction, setDirection]=useState(EDIrection.RIGHT)
  

   useEffect(()=>{
    setInterval( function movimentoHero (){
      const random = Math.floor(Math.random() * 4)
      const directionArray = Object.values(EDIrection)
      const randomDirection = directionArray[random]
 
      const nextMoviment = handNextPosition(randomDirection, positionState)
      setPositionState(nextMoviment)
      setDirection(randomDirection)
     },2000)

     return ()=>clearInterval()
   },[])
  
  
  return {
      position: positionState,
      direction: direction
  }

}
