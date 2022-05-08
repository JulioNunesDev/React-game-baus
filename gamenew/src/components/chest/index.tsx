import styled from 'styled-components'
import { HERO_HEKMET_OFFSET, TILE_SIZE } from '../../settings/constants'
import './hero.css'




export default function Chest() {
  return (
    
      <div style={{
        position: 'absolute',
        bottom: 48 * 5,
        left: 48,
        backgroundImage: 'url(../../../../../public/assets/CHEST.png)',
        height: TILE_SIZE,
        width: TILE_SIZE,
        
        animation: 'chestanimation steps(3) 1s infinite'
      }}>

      </div>
    
  )
}
