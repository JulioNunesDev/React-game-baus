import styled from 'styled-components'
import { TILE_SIZE } from '../../settings/constants'
import './hero.css'




export default function Hero() {
  return (
    
      <div style={{
        position: 'absolute',
        bottom: 48,
        left: 48,
        backgroundImage: 'url(../../../../../public/assets/HERO.png)',
        height: 100,
        width: TILE_SIZE,
        animation: 'HeroAnimation steps(4) 1s infinite'
      }}>

      </div>
    
  )
}
