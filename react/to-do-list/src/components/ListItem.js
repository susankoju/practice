import React from "react"


const ListItem = (props) => {

    return (
        <div>
            <p>
                <label>
                    {props.task.id + 1}
                </label>
                <label>
                    {props.task.title}
                </label>

                <span>
                
                    <input type="checkbox" checked={props.task.completed} onChange= {() => props.toggleComplete(props.task.id)}></input>
                </span>
            </p>
        </div>
    )
        
    
}


export default ListItem