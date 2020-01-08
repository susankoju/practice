import React from 'react'

import {PersonRow} from './PersonRow'
import {Profile} from './Profile'

// function withClose(Component){
//     return function(props) {
//         console.log(JSON.stringify(props));
//         return(
//             <div>
//                 <div style={{position: 'absolute', right: '25px', top: '25px', background: 'rgba(100,100,100,0.25)', borderRadius: '50%', padding: '1em'}}>X</div>
//                 <Component/>
//             </div>
//         )
//     }
// }

class MainContain extends React.Component {

    constructor(){
        super()

        this.state = {
            people : [],
            profile: null,
        }
    }

    componentDidMount(){
        fetch("https://mock-io.herokuapp.com/users").then( response => response.json()).then( jsonObj => {
            jsonObj.map( person => {
                this.setState({
                    people : [...this.state.people, person]
                } );
                return person
            });
        })
    }



    render(){
        return <section style={{background: 'rgba(200,200,200,0.2)', padding: '2%', margin: '2% auto', borderRadius:'1.5em', boxShadow: '2px 2px 5px silver'}}>
            { !this.state.profile  ? (
                <ul>
                {
                    this.state.people.length>0?
                    this.state.people.map( (person,index) => {
                        return (
                            <li key={index} onClick={() => this.showProfile(person)}><PersonRow personInfo={person}/></li>
                        )
                    } )
                    :
                    <p style={{textAlign: 'center', fontSize: '2em'}}> Loading... </p>
                }
                </ul>
            ) : (
                // withClose(<Profile person={this.state.profile} />)

                <div style={{position: 'relative' , transition: '2s all'}}>
                    <div onClick={this.closeProfile} style={{position: 'absolute', right: '1em', top: '1em', background: 'rgba(255,50,50,0.25)', color: 'grey' ,cursor: 'pointer' , boxShadow: '2px 2px 4px silver', borderRadius: '50%', padding: '1em 1.2em'}}>X</div>
                    <Profile person={this.state.profile} />
                </div>
            )}
        </section>
    }


    showProfile = (person) => {
        this.setState({
            profile: person
        });
    }

    closeProfile = () => {
        this.setState({
            profile: null
        });
    }
}

export default MainContain;