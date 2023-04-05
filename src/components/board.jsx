import React, { useState } from "react";
import Square from "./square";
import "../App.css";
import "./winner_gif.gif";
let cnt = 0;
const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] != null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return false;
    };
    const isWinner = checkWinner();
    console.log("state: ", state);

    const handleClick = (index) => {
        cnt += 1;
        if (state[index] != null) {
            return;
        }
        const copyState = [...state];
        copyState[index] = isXTurn ? "X" : "O";
        setState(copyState);
        setIsXTurn(!isXTurn);
    };
    const handleReset = () => {
        setState(Array(9).fill(null));
        cnt = 0;
    }
    return (
        <div className="board-container">
            {
                isWinner ? (
                    <>
                        <h1>{isWinner} won the game{" "}</h1>
                        <button onClick={() => handleReset()} style={{background:"white",border:"none", borderRadius:"6%", width:"40%", height:"10%"}}>Play Again</button>
                    </>
                ) : (
                    <>
                        {
                            (cnt === 9) ? (<><h1>Game is Draw{" "}</h1><button onClick={() => handleReset()}  style={{background:"white",border:"none", borderRadius:"6%", width:"40%", height:"10%"}}>Play Again</button></>) :
                            (
                                <>
                                    <div className="myTurn"><h4>Player {isXTurn ? "X" : "O"} please move</h4></div>
                                        <div className="board-row">
                                            <Square onClick={() => handleClick(0)} value={state[0]}></Square>
                                            <Square onClick={() => handleClick(1)} value={state[1]}></Square>
                                            <Square onClick={() => handleClick(2)} value={state[2]}></Square>
                                        </div>
                                        <div className="board-row">
                                            <Square onClick={() => handleClick(3)} value={state[3]}></Square>
                                            <Square onClick={() => handleClick(4)} value={state[4]}></Square>
                                            <Square onClick={() => handleClick(5)} value={state[5]}></Square>
                                        </div>
                                        <div className="board-row">
                                            <Square onClick={() => handleClick(6)} value={state[6]}></Square>
                                            <Square onClick={() => handleClick(7)} value={state[7]}></Square>
                                            <Square onClick={() => handleClick(8)} value={state[8]}></Square>
                                        </div>
                                </>
                            )
                        }
                    </>
                )

            }

        </div>

    );
};
export default Board;
