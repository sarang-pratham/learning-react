import React from 'react'
import {useEffect} from 'react'
import './App.css'
import searchIcon from './search.svg'

const API_URL = ' http://www.omdbapi.com/?apikey=63a5ac4c'

const App = ()=>{
    const SearchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json()
        console.log(data);
    }


    useEffect(()=>{
        SearchMovies('spiderman')
    },[])

    return (
        <h1>App</h1>
    )
}

export default App