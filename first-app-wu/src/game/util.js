/**
 * @description 判断游戏输赢
 * @param squares
 * @returns {null|*} 默认返回null，分出胜负则返回下子的类型
 */
export function calculateWinner(squares) {
    const lines = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,4,6],
        [2,5,8],
        [3,4,5],
        [6,7,8],
    ];
    for(let i = 0;i < lines.length; i++){
        const [a ,b, c] = lines[i]
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }
    return null;
}