import React, {useState, useEffect} from 'react'


import { getStoryById } from '../services/hnApi'

export const Story = ({id}) => {

    const [story, setStory] = useState({})


    useEffect(
        () => {
            getStoryById(id).then( data => data && data.url && setStory(data) )
        }
        ,[])

    return (
    <p >{JSON.stringify(story)}</p>
    )
}