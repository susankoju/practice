import React from "react"

class Nav extends React.Component{
    
    

    render(){
        
        return (
            <div className="nav">
                <ul>
                    <li className={this.props.currentPage === 'home' ? 'currentPage' : ''} onMouseDown={this.clickHandler}> Home </li>
                    <li className={this.props.currentPage === 'completed' ? 'currentPage' : ''}  onMouseDown={this.clickHandler}> Completed </li>
                    <li className={this.props.currentPage === 'remaining' ? 'currentPage' : ''}  onMouseDown={this.clickHandler}> Remaining </li>
                </ul>
            </div>
        )
    }

    clickHandler = (e) => {
        e.preventDefault();

        switch(e.target.innerText.toLowerCase()){
            case 'home':
                this.props.setPage('home');
                break;
            case 'completed':
                this.props.setPage('completed');
                break;
            case 'remaining':
                this.props.setPage('remaining');
                break;
            default:
                this.props.setPage('home');
        }
    }
}


export default Nav