import React from 'react'

import '../styles/profile.css'

export const Profile = ({person}) => {
    return (
        <div className="profile">
            <img style={{width: '25%',boxShadow: '2px 2px 20px grey', borderRadius: '50%', margin:'0em auto'}} src={person.profileImage} alt="profileImage"/>
            <h2> {person.firstName + ' ' + person.lastName}</h2>
            <div className="info">
                <div className="col3-1" style={{textAlign: 'left'}}>
                    <ul>
                        <li><span style={{ fontWeight: 'bold', textDecoration: 'underline', textShadow:'1px 1px 2px grey'}}>Basic Information </span></li>
                        <li><span>ID: </span> {person.id }</li>
                        <li><span>First Name: </span> {person.firstName }</li>
                        <li><span>Last Name: </span> { person.lastName}</li>
                        <li><span>Phone: </span> {person.phone}</li>
                        <li><span>Email: </span> {person.email}</li>
                        <li><span>Address: </span> {person.address.streetAddress + ', ' + person.address.country}</li>
                    </ul>                    
                </div>
                <div className="col3-1" style={{ borderRadius: '25%', background: '#82ccdd', color: 'white', padding: '1.25vw',  margin:'1.5vw', display: 'inline-block', width:'2vw'}}>
                    ID: {person.id}          
                </div>
                <div className="col3-1"  style={{textAlign: 'right'}}>
                    <ul>
                        <li><span style={{ fontWeight: 'bold', textDecoration: 'underline', textShadow:'1px 1px 2px grey'}}>Detail Address </span></li>
                        <li><span>City: </span> {person.address.city }</li>
                        <li><span>State: </span> {person.address.state }</li>
                        <li><span>Country: </span> {person.address.country }</li>
                        <li><span>Zip Code: </span> {person.address.zipCode }</li>
                        <li><span>Country Code: </span> {person.address.countryCode }</li>
                        <li><span>Street Address: </span> {person.address.streetAddress }</li>
                    </ul>                    
                </div>
            </div>
        </div>
    )
}