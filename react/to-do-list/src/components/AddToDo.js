import React from "react"

class AddToDo extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            addText : ''
        }
    }


    render(){
        return (
            <div className="addBar">
            <input type="text" placeholder="Add To Do" onKeyDown={this.keyDownHandler} onChange={this.changeHandler} value={this.state.addText}></input>
            <button onClick={this.onClickHandler}>+</button>
            </div>
        )
    }

    changeHandler = e =>{
        this.setState({ addText : e.target.value });
    }
    keyDownHandler = (e) =>{
        if(e.keyCode === 13){
            if(!(this.state.addText === ''))
                this.props.addFxn(this.state.addText);
            this.setState({ addText : '' });
        }
    }
    onClickHandler = () =>{
        if(!(this.state.addText === ''))
            this.props.addFxn(this.state.addText);
        this.setState({ addText : '' });
    }
}


export default AddToDo