import React from "react"

import Search from "./Search"
import AddToDo from "./AddToDo"
import ToDoList from "./ToDoList"


class MainContent extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            list : [
                { id:0, title:"Init To Do List App" , completed: true},
    
                { id:1, title:"Start making To Do List App", completed: true },
    
                { id:2, title:"Complete To Do List App", completed: false }
            ],
            searchText : '',
            page : props.page
        }
        
        
    }

    updatePage(){
        this.setState ({page : this.props.page})
    }

    getSnapshotBeforeUpdate(){
        
        if(this.props.page !== this.state.page){
            this.setState ({page : this.props.page})
        }
        
        return null;
    }

    componentDidUpdate(){

        if(this.props.page !== this.state.page){
            this.setState ({page : this.props.page})
        }

    }

    componentDidMount(){
        
        if(this.props.page !== this.state.page){
            this.setState ({page : this.props.page})
        }
    }

    render(){
        
        
        return (
            <section className="mainContent">
                <div className="wrappper">
                    < Search searchFxn={this.setSearchText}/>
                    < AddToDo addFxn={this.addToDo} />
                    < ToDoList list={this.state.list} toggleComplete={this.toggleComplete} search={this.state.searchText} page={this.state.page}/>
                </div>
            </section>
        )
    }

    addToDo = (title) => {
        this.setState({
            list : [...this.state.list , {id: this.state.list.length, title: title, completed: false}]
        });
    }

    toggleComplete = (index) => {
        
        this.setState(
        {
            list : this.state.list.map( toDo => {
                if(toDo.id === index){
                    toDo.completed = !toDo.completed;
                } 

                return toDo;
            })
        });
        // this.task.completed = !this.task.completed;
        // this.list[index].completed = !this.list[index].completed ;
    }

    setSearchText = (search) => {
        this.setState(
        {
            searchText : search
        });
        
    }
}


export default MainContent