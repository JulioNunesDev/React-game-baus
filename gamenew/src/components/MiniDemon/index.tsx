import styled from 'styled-components'
import { HEAD_OFFSET, TILE_SIZE } from '../../settings/constants'
import './hero.css'




export default function MiniDemon() {
  return (
    
      <div style={{
        position: 'absolute',
        bottom: 48 * 15,
        left: 48,
        backgroundImage: 'url(../../../../../public/assets/MINI-DEMON.png)',
        height: TILE_SIZE + HEAD_OFFSET,
        backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
        width: TILE_SIZE,
        animation: 'minidemon steps(4) 1s infinite'
      }}>

      </div>
    
  )
}
