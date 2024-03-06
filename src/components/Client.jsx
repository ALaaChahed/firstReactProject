import React, { useState } from 'react'

const Client = () => {
    const[nom,setNom]=useState("ESPS")
    const[ville,setVille]=useState("Sfax")
    const[adresse,setAdresse]=useState("Route El Ain")
    const modifier =()=>{
        setNom("University")
        setVille("Sousse")
        setAdresse("Mseken")
    }
  return (
    <div>
        <h1>Nom est {nom}</h1>
        <h1>Ville est {ville}</h1>
        <h1>Adresse {adresse}</h1>
        <button onClick={()=> modifier()}> Modifier </button>

      
    </div>
  )
}

export default Client
