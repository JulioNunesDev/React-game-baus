

import { EDIrection, HERO_HEKMET_OFFSET, TILE_SIZE } from '../../settings/constants'
import './hero.css'
import useEventListener from "@use-it/event-listener";
import useHeroMoviment from '../../Hooks/useHeroMoviment';

const initialPosition ={
  x: 8,
  y: 3
}

export default function Hero() {

  const moviment = useHeroMoviment(initialPosition)
  
  return (
    
      <div style={{
        position: 'absolute',
        bottom: TILE_SIZE * moviment.position.y,
        left: TILE_SIZE * moviment.position.x,
        backgroundImage: 'url(../../../../../public/assets/HERO.png)',
        height: TILE_SIZE + HERO_HEKMET_OFFSET,
        width: TILE_SIZE,
        backgroundPosition: `0px -${TILE_SIZE - HERO_HEKMET_OFFSET}px`,
        animation: 'HeroAnimation steps(4) 1s infinite',
        transform: `scaleX(${moviment.direction === EDIrection.RIGHT ? 1 : -1})`,
        zIndex: 1
      }}>

      </div>
    
  )
}
