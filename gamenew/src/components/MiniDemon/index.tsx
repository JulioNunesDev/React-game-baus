import styled from 'styled-components'
import useEnemyMoviment from '../../Hooks/useEmenyMoviment'
import { EDIrection, HEAD_OFFSET, TILE_SIZE } from '../../settings/constants'
import './hero.css'




export default function MiniDemon() {
  const moviment = useEnemyMoviment({x: 8, y: 15})
  return (
    
      <div style={{
        position: 'absolute',
        bottom: TILE_SIZE * moviment.position.y,
        left: TILE_SIZE * moviment.position.x,
        backgroundImage: 'url(../../../../../public/assets/MINI-DEMON.png)',
        height: TILE_SIZE + HEAD_OFFSET,
        backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
        width: TILE_SIZE,
        animation: 'minidemon steps(4) 1s infinite',
        transform: `scaleX(${moviment.direction === EDIrection.RIGHT ? 1 : -1})`,
      }}>

      </div>
    
  )
}
