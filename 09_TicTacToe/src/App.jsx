import { useState } from 'react'
import './App.css'

export function Square({ value, onSquareClick }) {

  return (
    <>
      <button className='square' onClick={onSquareClick}>{value}</button>
    </>
  )
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const isX = history.length%2 !== 0 ? true : false;
  let [currentMove, setCurrentMove] = useState(history[history.length - 1]);

  function handlePlay(values) {
    
    setHistory([...history, values]);
    console.log(history);
    setCurrentMove(values);
  }

  function jumpTo({each}){
    let historyArray = history.slice(0 , each+1);
    setHistory(historyArray);
    setCurrentMove(history[each])
  }

  let moves =  history.map((square,each)=>{
    
    let description;
    if(each > 0){
      description = `go to position ${each}`;
    }
    else{
      description =  `go to game start`;
    }
    return (
    <li  key={each}>
      <button className='button' onClick={()=>jumpTo({each})}>{description}</button>
    </li>
    )
  })

  return (
    <>
      <div className='game'>
        <div>
          <Board values={currentMove} handlePlay={handlePlay} isX={isX} />
        </div>
        <div>
          <ol>
            {
             moves
            }
          </ol>
        </div>
      </div>

    </>
  )
}

export function Board({ values, handlePlay, isX }) {

  let win = wining(values);
  //copying the all the value from original values;

  function handleClick(i) {
    const nextValues = values.slice();
    if (values[i] || wining(nextValues)) {
      return;
    }
    nextValues[i] = isX ? "X" : "O";
    handlePlay(nextValues);
  }

  return (
    <>
      <h1>Turn for: {isX ? "X" : "O"}</h1>
      <h1> {win ? `Win: ${win} ` : ""}</h1>
      <div className='board-row'>
        <Square value={values[0]} onSquareClick={() => handleClick(0)} />
        <Square value={values[1]} onSquareClick={() => handleClick(1)} />
        <Square value={values[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className='board-row'>
        <Square value={values[3]} onSquareClick={() => handleClick(3)} />
        <Square value={values[4]} onSquareClick={() => handleClick(4)} />
        <Square value={values[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className='board-row'>
        <Square value={values[6]} onSquareClick={() => handleClick(6)} />
        <Square value={values[7]} onSquareClick={() => handleClick(7)} />
        <Square value={values[8]} onSquareClick={() => handleClick(8)} />
      </div>

    </>
  )
}

function wining(square) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    let [a, b, c] = lines[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
  return null;
}
