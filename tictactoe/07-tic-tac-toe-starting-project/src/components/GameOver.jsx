export default function GameOver({winner,onSet}){
    return(<div id="game-over">
        <h2>Game Over!</h2>
        {winner? <p>You, Won {winner}!!</p>:<p>It's A draw</p>}
        <button onClick={onSet}>Rematch?</button>
    </div>)
}