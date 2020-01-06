import React from "react"

class Search extends React.Component{


    constructor(props){
        super(props);

        this.state = {
            searchText : ''
        }
    }


    render(){
        return (
            <div className="searchBar">
                <input type="text" placeholder="Search" onKeyDown={this.keyDownHandler} onChange={this.changeHandler} value={this.state.searchText}></input>
                {this.state.searchText !== '' ? <button onClick={this.clearSearchText}>X</button> : '' } 
            </div>
        )
    }

    changeHandler = e =>{
        this.setState({ searchText : e.target.value });
        this.props.searchFxn(e.target.value);
    }
    keyDownHandler = (e) =>{

        this.props.searchFxn(this.state.searchText);
        if(e.keyCode === 13){
            this.setState({ searchText : '' });
        }
    }
    clearSearchText = () => {
        this.setState({ searchText : '' });
        this.props.searchFxn('');
        
    }

}


export default Search;