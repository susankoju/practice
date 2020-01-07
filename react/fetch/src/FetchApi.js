import React from "react"

class FetchAPI extends React.Component{
    constructor(){
        super();

        this.state = {
            data: [],
        }
    }

    render(){
        
        return (
            <div>
                <h1> Random User </h1>
                {  this.state.data.map( data => <p style={{ width:'75%', margin:'0px auto'}} key={data.email}> Name: {data.name.first+" " +data.name.last}   <span style={{float:'right'}}> Email: {data.email} </span> </p> ) }
            </div>
        );
    };

    componentWillMount(){
        
        fetch("https://randomuser.me/api/?results=1200")
                .then((respond) => { return respond.json() })
                .then((myJson) => {
                    this.setState({
                        data: myJson.results
                    });
                })
                
    }
}


export default FetchAPI;