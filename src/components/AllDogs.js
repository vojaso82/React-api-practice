import React, { useState, useEffect } from 'react';
import axios from 'axios'


function AllDogs() {

const [search, setSearch] = useState('')
const [dogs, setDogs] = useState([])
const [message, setMessage] = useState('')


const searchDogs = async () => {
    try{
        let res = await axios.get(`https://dog.ceo/api/breed/${search}/images`)
        console.log(res)
        let filteredArr = res.data.message.filter((ele, i) => i < 5)
        // console.log(filteredArr)
        setDogs(filteredArr)
        // console.log(res.data) 
    }catch(e){
        setMessage('This breed does not exist in our database')
    }
}

const showDogs = () =>{
return dogs.map((eachDogPhoto,i) => {
    return(
        <div key={i}>
            <img src={eachDogPhoto} width='300px'/>
        </div>
    )
})
}

const handleSubmit = (e) => {
    e.preventDefault();
    searchDogs()
    setSearch('')
    setMessage('')
    setDogs([])
    e.target.reset()
}

const handleChange = (e) => {
e.preventDefault();
// console.log(e)
setSearch(e.target.value)
}
// console.log(dogs)

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input onChange={handleChange} name="breed" type="text" placeholder="search dogs"/>
            <button type="submit">Search</button>
            </form>
            <h2>{message}</h2>
            <div>{showDogs()}</div>
        </div>
    )
}

export default AllDogs
