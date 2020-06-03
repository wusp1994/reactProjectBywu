//Square : 正方形
import React from "react";

//函数组件
export default function Square (props){
    return (
        <button className={"square"} onClick={props.onclick}>
            { props.value }
            
        </button>
    )
}


//类组件
// export default class Square extends React.Component {
//     constructor(props) {
//         // 在这里, 它调用了父类的构造函数,
//         super(props);
//         console.log(props)
//         let { value } = props;
//         // 注意: 在派生类中, 必须先调用 super() 才能使用 "this"。
//         // 忽略这个，将会导致一个引用错误。
//         this.value = value
//         this.state = {
//             value: null,
//         }
//     }
//
//     render() {
//         return (
//             <button
//                 className="square"
//                 onClick={()=> this.props.onclick() }  //监听父级点击事件
//             >
//                 {this.props.value}
//             </button>
//         );
//     }
// }