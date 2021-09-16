import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Beers() {
const [search, setSearch] = useState('')
const [beer, setBeer] = useState([])
const [message, setMessage] = useState('')


const searchBeers = async () => {
    try{
        let res = await axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
        // console.log(res.data)
        let filteredArr = res.data.filter((ele, i) => i < 5)
        // console.log(filteredArr)
        setBeer(filteredArr)
        // console.log(res.data) 
    }catch(e){
        setMessage('This beer does not exist in our database')
    }
}
// console.log(beer)


const showBeers = () =>{
    return beer.map((eachBeer,i) => {
        return(
            <div key={i}>
                <h1>{eachBeer.name}</h1>
                <img src={eachBeer.image_url} width='60px'/>
                <p>{eachBeer.description}</p>
            </div>
        )
    })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        searchBeers()
        setBeer([])
        e.target.reset()
    }
    
    const handleChange = (e) => {
    e.preventDefault();
    // console.log(e)
    setSearch(e.target.value)
    }


  return (
        <div>
            <form onSubmit={handleSubmit}>
            <input onChange={handleChange} name="beers" type="text" placeholder="search beers"/>
            <button type="submit">Search</button>
            </form>
            <h2>{message}</h2>
            <div>{showBeers()}</div>
        </div>
    )
  }

export default Beers
