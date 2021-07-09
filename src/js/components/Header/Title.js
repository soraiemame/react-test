import React from "react";

const Title = (props) => {
    return (<h1>Welcome!!!!!!  { props.title }</h1>)
}

export default Title;

// こっちでもOK
// export default class Title extends React.Component {
//     render(){
//         return (<h1>Welcome!!!!!!  { this.props.title }</h1>)
//     }
// }