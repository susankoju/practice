import React from "react"

import Nav from "./Nav"

class Header extends React.Component{


    constructor(props){
        super(props);

        this.heading = props.heading;
    }

    render(){
        return (
            <header>
                <h1> {this.heading} </h1>
                < Nav setPage={this.props.setPage} currentPage={this.props.page}/>
            </header>
        )
    }
}


export default Header