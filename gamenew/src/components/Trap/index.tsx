import styled from 'styled-components'
import { HERO_HEKMET_OFFSET, TILE_SIZE } from '../../settings/constants'
import './hero.css'




export default function Trap() {
  return (
    
      <div style={{
        position: 'absolute',
        top: 48 * 2,
        left: 48,
        backgroundImage: 'url(../../../../../public/assets/TRAP.png)',
        height: TILE_SIZE + HERO_HEKMET_OFFSET,
        width: TILE_SIZE,
        backgroundPosition: `0px -${TILE_SIZE - HERO_HEKMET_OFFSET}px`,
        animation: 'trap steps(8) 1s infinite'
      }}>

      </div>
    
  )
}
