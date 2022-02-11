import React, { useEffect, useState } from "react";
import "./css/style.css";
import 'tachyons';

const Tempapp = () =>{

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("karachi");
    useEffect( () =>{

        const fetchApi = async () =>{

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=fa6c4badc042b7154be0ac44694fb5dd`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        };

        fetchApi();
    },[search]) 

    return(

      <div  className="box shadow-5">  
        <div>
           <div className="inputData shadow-5">
             <input type="search" value={search} className="inputFeild" onChange={ (event) =>{
                 setSearch(event.target.value)

             }} />
            </div>
        </div>
        {!city ? (
            <p>no data found</p>
        )

        : (
            <div>
            <div className="info">
            <h2 className="location">
            <i className="fas fa-street-view"></i>{search}
            </h2>
            <h1 className="temp"> 
             {city.temp}°Cel
            </h1>
            <h3 className="min-max-temp">
                Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel
            </h3>
          </div>
        <div className="wave -one"></div>
        <div className="wave -two"></div>       
        <div className="wave -three"></div>       
        </div>
        )}
            

    </div> 

    )
}

export default Tempapp;