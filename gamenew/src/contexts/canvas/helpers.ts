import { EDIrection } from "../../settings/constants"


export default function handNextPosition (direction: any, position: any){

  switch(direction){

      case EDIrection.LEFT:
      return {x: position.x - 1, y: position.y}
      break
            
      case EDIrection.UP:
      return {x: position.x , y: position.y + 1}
      break

      case EDIrection.RIGHT:
      return {x: position.x + 1 , y: position.y}
      break

      case EDIrection.DOWN:
      return {x: position.x, y: position.y - 1}
      break
     
  }

   
}