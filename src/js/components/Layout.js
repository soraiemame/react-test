import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {title: "soraie"};
    }
    changeTitle = (title) => {
        this.setState({title});
    }
    render(){
        return (
            <div>
                <Header changeT={this.changeTitle} title={this.state.title} />
                <Footer />
            </div>
        );
    }
}
