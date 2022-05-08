import styled from 'styled-components'
import { DEMON_TILE_SIZE, TILE_SIZE } from '../../settings/constants'
import './hero.css'




export default function Demon() {
  return (
    
      <div style={{
        position: 'absolute',
        bottom: 48,
        left: 48 * 10,
        backgroundImage: 'url(../../../../../public/assets/DEMON.png)',
        height: DEMON_TILE_SIZE,
        width: DEMON_TILE_SIZE,
        animation: 'demon steps(4) 1s infinite'
      }}>

      </div>
    
  )
}
