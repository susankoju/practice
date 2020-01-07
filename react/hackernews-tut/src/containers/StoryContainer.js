import React , { useState, useEffect } from 'react'

import { getStoryIds, getStoryById } from '../services/hnApi'
import { Story } from '../components/Story'

export const StoryContainer = () => {
    const [storyIds, setStoryIds] = useState( [] );

    useEffect( () => {
        getStoryIds().then( data => {
            data && setStoryIds(data) ;
        });
    }, [] );

    return (
        <div>
        {
            <ul>
                {storyIds.map(id => {return <li key={id}><Story id={id} /></li>})}
            </ul>
            
        }
        </div>
    )
}

