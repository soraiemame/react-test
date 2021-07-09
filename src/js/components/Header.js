import React from "react"
import Title from "./Header/Title";

export default class Header extends React.Component {
    handle(e){
        const t = e.target.value;
        this.props.changeT(t);
    }
    render(){
        console.log(this.props);
        return (
            <div>
                <Title title={this.props.title}/>
                <header>This is a Header!!! hey { this.props.title }</header>
                <input value={this.props.title} onChange={this.handle.bind(this)}/>
            </div>
        );
    }
}
