
import { useState, useEffect } from "react";
import enahncedFetch from "../../Services/http-fetch";
import './style.css'

function Planetinformation({ planet_url }) {
    const [Planet, setPlanet] = useState([]);
    const [Isloading_Planet, setIsloading_Planet] = useState(false);
    const [HasError_Planet, setHaserror_Planet] = useState(false);

    const Planet_Own_information = `https://swapi.dev/api/planets/${planet_url}`

   


    useEffect(() => {
        const fetch_request = async () => {
            try {
                setIsloading_Planet(true)
                const response = await enahncedFetch('Get', Planet_Own_information, Option)
                setPlanet(response)
    
            } catch {
                setHaserror_Planet(true)
                setIsloading_Planet(false)
            } finally {
                setIsloading_Planet(false)
            }
        }
        fetch_request()

    }, [Planet_Own_information])

    const isloading_planet = () => {
        if (Isloading_Planet) {
            return <p>Isloading...</p>
        }
        return (
            <>
                {HasError_Planet && <p>Errored</p>}
                <p>planet name : {Planet.name}</p>
                <p>terrain is : {Planet.terrain}</p>
                <p>population is : {Planet.population}</p>
                <p className="last_line">climate of planet : {Planet.climate}</p>

            </>
        )
    }

    return (
        <div>
            {isloading_planet()}
        </div>
    )
}

export default Planetinformation