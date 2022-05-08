import { GAME_SIZE } from "../../settings/constants";
import Hero from "../Hero";


export default function Board() {
  return (
      <div>
          <Hero />
        <img src={'../../../public//assets/tileset.gif'} 
        width={GAME_SIZE} height={GAME_SIZE}
        />
    </div>
  )
}
