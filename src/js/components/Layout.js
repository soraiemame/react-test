import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {title: "soraie"};
    }
    // changeTitle(title){
    //     this.setState({title: title})
    // }
    changeTitle = (title) => {
        this.setState({title});
    }
    render(){
        return (
            <div>
                <Header changeTitle={this.changeTitle} title={this.state.title} />
                <Footer />
            </div>
        );
    }
}
