import React from 'react'
import { TILE_SIZE } from '../../../settings/constants'

interface IProps {
    position :{x: number; y: number;}
    text: number
}

export default function Tile(props: IProps) {

    function getTextColor(){
        switch(props.text){
            case 0:
            return 'yellow'
            case 1:
            return 'red'
        }
    }

    const color = getTextColor()

  return (
    <div style={{width: TILE_SIZE, height: TILE_SIZE, border: `2px solid ${color}`,
    top:TILE_SIZE * props.position.y,left: TILE_SIZE * props.position.x,
    position: 'absolute',
    color: color
    }}>
        {props.text}
    </div>
  )
}
