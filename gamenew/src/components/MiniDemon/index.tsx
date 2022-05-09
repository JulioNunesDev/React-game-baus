import styled from 'styled-components'
import useEnemyMoviment from '../../Hooks/useEmenyMoviment'
import { EDIrection, HEAD_OFFSET, TILE_SIZE } from '../../settings/constants'
import './hero.css'



interface IProps {
  initialPosition: {
    x: number;
    y: number;
  }
 
}
export default function MiniDemon(props: IProps) {
  const moviment = useEnemyMoviment(props.initialPosition)
  
  return (
    
      <div style={{
        position: 'absolute',
        top: TILE_SIZE * moviment.position.y,
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
