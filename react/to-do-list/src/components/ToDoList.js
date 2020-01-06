import React from "react"

import ListItem from "./ListItem"

const ToDoList =(props)=>{

    // constructor(props){
    //     super(props);
    //     this.state = {

    //         // list: this.props.list.map( toDo => {
    //         //     toDo.filter( (toDo) => {
    //         //         toDo.title.includes('a')
    //         //     })
    //         // } )
            
    //         list: this.props.list
    //         // list: this.props.list.filter( (toDo) => toDo.title.includes('Start'))
            
            

    //         // list: this.props.list.map({ (this.props.search, this.props.list) => {
    //         //     value =
    //         //     filter(value => value.includes(this.props.search));
    //         // } })
    //     }        
    // }
    const displayList=(task, key)=>{
        
        return (                
            <li key={key}>
                < ListItem task={task} toggleComplete={props.toggleComplete} index={key}/>
            </li>
        );
    }
    // render(){
        return (
            <section className="toDoList">


                <ul>
                    <li>

                        <div style={{borderBottom: "1px solid grey", fontWeight: "bold"}}>
                            <p>
                                <label>ID</label>
                                <label>Task</label>
                            </p>
                        </div>

                    </li>
                    
                    
                    {
                        
                        (props.list.filter( (toDo) => toDo.title.toLowerCase().includes(props.search.toLowerCase()))  ).length > 0 ? 
                        [

                            (
                                (   props.list.filter( (toDo) => (props.page === 'home') ? 1 : ( (props.page === 'completed') ? toDo.completed : !toDo.completed )  )  )
                            .filter( (toDo) => toDo.title.toLowerCase().includes(props.search.toLowerCase()))  ).map( (task, key) => displayList(task, key))
                        ]
                        :
                        [
                            <div key="0" className="noData">
                            </div>
                        ]
                    }

                </ul>
            </section>
        )
    // }

   
        

        // console.log(this.list)
        // this.list.map( (task) =>{

        //     return (                
        //         <li>
        //             < ListItem title={task} />
        //         </li>
        //     );
        // } )

        // for(var i=0; i< this.list.length; i++){
        //     return (                
        //         <li>
        //             < ListItem title={this.list[i].title} />
        //         </li>
        //     );
        // }
    
}


export default ToDoList;