import { useState } from "react"


export default function (){
    

    const [player, setPlayer] = useState(0);
    //add player
    const handleAddPlayer = ()=>{
        setPlayer(player + 1);
    }
    //remove player
    const handleRemovePlayer = ()=>{
        setPlayer(player - 1);
    }
    return(
        <div>
            <h3>Total Player: {player}</h3>

            <button style={{border: "1px solid purple", backgroundColor: "lightGreen", marginRight: "16px"}} onClick={handleAddPlayer}>Add Player</button>
            
            <button style={{border: "1px solid purple", backgroundColor: "red"}} onClick={handleRemovePlayer}>Remove Player</button>
        </div>
    )
}