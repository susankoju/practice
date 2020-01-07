import React from 'react'

export const Profile = ({person}) => {
    return (
        <div style={{textAlign: 'center'}}>
            <img style={{width: '25%', borderRadius: '50%', margin:'0em auto'}} src={person.profileImage} alt="profileImage"/>
            <h2> {person.firstName + ' ' + person.lastName}</h2>

        </div>
    )
}