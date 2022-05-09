import styled from 'styled-components'
import useEnemyMoviment from '../../Hooks/useEmenyMoviment'
import { DEMON_TILE_SIZE, EDIrection, TILE_SIZE } from '../../settings/constants'
import './hero.css'




export default function Demon() {

  const moviment = useEnemyMoviment({x: 5, y: 5})

  return (
    
      <div style={{
        position: 'absolute',
        bottom: TILE_SIZE * moviment.position.y,
        left: TILE_SIZE * moviment.position.x,
        backgroundImage: 'url(../../../../../public/assets/DEMON.png)',
        height: DEMON_TILE_SIZE,
        width: DEMON_TILE_SIZE,
        animation: 'demon steps(4) 1s infinite',
        transform: `scaleX(${moviment.direction === EDIrection.RIGHT ? 1 : -1})`,
      }}>

      </div>
    
  )
}
