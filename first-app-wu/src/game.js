//game : 游戏
import React from "react";
import Board from "./gameBoard";
import {calculateWinner} from './util'

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null),
                }
            ],
            stepNumber: 0,//走到哪一步，当前显示history的下标
            xIsNext: true,//下一步是X还是O
        }
    }
    
    //点击下棋
    handleClick(i) {
        let {xIsNext, history,stepNumber} = this.state
        let squares = history[history.length - 1].squares.slice()
        const winner = calculateWinner(squares)
        if(winner){
            alert("Congratulations on winning!")
            return
        }
        console.log(history)
        squares[i] = xIsNext ? 'X' : 'O'
        this.setState({
            history: history.concat([{squares: squares}]),
            xIsNext: !xIsNext,
            stepNumber: history.length,//设置当前显示步数为最新
        })
        console.log(stepNumber)
    }
    
    //根据参数展示历史记录
    jumpTo(stepIndex){
        this.setState({
            stepNumber: stepIndex,
            xIsNext: (stepIndex % 2) === 0,
        })
    }
    
    //渲染
    render() {
        let status = '';
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares)
        if (winner) {
            status = 'Winner:' + winner
        } else {
            status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
        }
        
        const moves = history.map((step,stepIndex)=>{
            const desc = stepIndex ?
                '跳转到 #' + stepIndex + '步':
                '重置游戏';
            return (
                <li key={stepIndex}>
                    <button onClick={
                        ()=>{
                            this.jumpTo(stepIndex)
                        }
                    }>
                        {desc}
                    </button>
                </li>
            )
        })
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}