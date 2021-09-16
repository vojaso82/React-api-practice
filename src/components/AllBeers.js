import React, { useState, useEffect } from 'react';
import axios from 'axios'


function AllBeers() {

const [allBeers, setAllBeers] = useState([])
const [message, setMessage] = useState('')

const showAllBeers = async () => {
    try{
let res = await axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
// console.log(res.data)
// let allBeersArr = res.data.map((eachBeer) => eachBeer)
setAllBeers(res.data)
    }catch(e){
        setMessage('Link is broken')
    }
}

const showBeers = () =>{
    return allBeers.map((eachBeer, i) => {
        return(
            <div key={i}>
                <h1>{eachBeer.name}</h1>
                <img src={eachBeer.image_url} width='60px'/>
                <p>{eachBeer.description}</p>
            </div>
        )
    })
    }
    
    // console.log(allBeers)

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // setAllBeers(e.target.value)
    //     // e.target.reset()
    //     console.log(allBeers)
        
    // }

    

    return (
        <div>
            <button onClick={showAllBeers} type="submit">Show All beers</button>
            <div>{showBeers()}</div>
        </div>
    )
}




export default AllBeers
