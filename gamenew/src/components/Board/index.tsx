import { GAME_SIZE } from "../../settings/constants";
import Chest from "../chest";
import Demon from "../Demon";
import Hero from "../Hero";
import MiniDemon from "../MiniDemon";
import Trap from "../Trap";


export default function Board() {
  return (
      <div>
        <MiniDemon initialPosition={{x: 2, y:4 }} />
        <MiniDemon initialPosition={{x: 10, y:10 }} />
        <Chest />
        <Demon />
          <Hero />
          <Trap />
        <img src={'../../../public//assets/tileset.gif'} 
        width={GAME_SIZE} height={GAME_SIZE}
        />
    </div>
  )
}
