import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RenderClasses() {
    const [ dnd, setDnd ] = useState([])
    const [classes, setClasses] = useState('')

    useEffect(() => {
    axios
        .get(`https://www.dnd5eapi.co/api/classes/`)
        .then(res => {
        setDnd(res.data.results)
        // console.log('aw: app.js: .get: ', res.data)
        })
        .catch(err => {
        console.log('error', err.message, err.response)
        })
    }, [])

    const classClick = e => {
        e.preventDefault();
        console.log('classClick', dnd)
    }

    return (
        <div>
        {dnd.map(DnD => (
            <div key={DnD.results}>
            <button onClick={classClick}>{DnD.name}</button>
            </div>
        ))}
    </div>
    )
}

export default RenderClasses;