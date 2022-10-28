import React from 'react'
import { generalInformation } from './db'

const Footer = () => {
    const { nationality, age } = generalInformation[0]
    return (
        <div>
            <p>{nationality}</p>
            <p>{age}</p>
        </div>
    )
}

export default Footer