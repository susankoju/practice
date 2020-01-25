import React from 'react';

export default function NotFound(){
    return (
        <div style={{textAlign:'center', padding:'20%'}}>
            <h1>404 Not Found!</h1>
            <p>
                The page you are searching is not found!
            </p>
            <a href="/home">Go To Home</a>
        </div>
    )
}