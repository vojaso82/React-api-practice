import React, { useState, useEffect } from 'react';
import axios from 'axios'

function NewBeer() {
  
    let [name, setName] = useState("name");
    let [tagline, setTagline] = useState("");
    let [description, setDescription] = useState("");
    let [firstBrewed, setFirstBrewed] = useState("");
    let [brewerTips, setBrewerTips] = useState("");
    let [attenuationLevel, setAttenuationLevel] = useState("");
    let [contributedBy, setContributedBy] = useState("");


    const handleChange = (e) => {
        // console.log(req)
        // console.log(e.target.name)
        e.target.name = e.target.value
        setName(e.target.name)

    }
    
    const handleSubmit = async (req) => {
      console.log(req)
        let res = await axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, { name: name })

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>    
                <label>Beer Name
                <input onChange={handleChange} placeholder="Beer name" type="text" name="name"/>  
                </label>
                <br/>
                <label>Tagline
                <input onChange={handleChange} placeholder="Tagline" type="text" name="tagline"/>
                </label>
                <br/>
                <label>Description
                <input onChange={handleChange} placeholder="Description" type="text" name="description"/>
                </label>
                <br/>
                <label>First Brewed
                <input onChange={handleChange} placeholder="First Brewed" type="text" name="firstbrewed"/>
                </label>
                <br/>
                <label>Brewer Tips
                <input onChange={handleChange} placeholder="Brewer Tips" type="text" name="brewertips"/>
                </label>
                <br/>
                <label>Attenuation Level
                <input onChange={handleChange} placeholder="Attenuation Level" type="text" name="attenuationlevel"/>
                </label>
                <br/>
                <label>Contributed By
                <input onChange={handleChange} placeholder="Contributed By" type="text" name="contributedby"/>
                </label>
                <br/>
                <button>Add New Beer</button>
            </form>
        </div>
    )
}

export default NewBeer
