import React from 'react'
import { generalInformation } from './db'
const PersonalInformation = () => {
    const [informacion] = generalInformation;
    return (
        <div>
            <h1>{informacion.name}</h1>
            <img src={informacion.avatar} alt="foto perfil" />
        </div>
    )
}

export default PersonalInformation