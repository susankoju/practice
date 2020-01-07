import React from 'react';

import '../styles/personRow.css';

export const PersonRow = ({personInfo}) => {
    return <p className="personRow">
        <img style={{ borderRadius:'50%', width: '10%'}} src={personInfo.profileImage} alt="profile" />
        <div style={{width:'85%', float: 'right'}}>
            <span className="personName" style={{fontSize: '2.42vw', lineHeight: '2.75em'}}>{personInfo.firstName + ' ' + personInfo.lastName}</span>
            <span style={{float: 'right', padding: '0em 1em',fontSize: '1vw', textAlign:'right'}}>
                <p>{personInfo.phone}</p>
                <p>{personInfo.address.streetAddress + ', ' + personInfo.address.country}</p>
            </span>
        </div>
    </p>
}