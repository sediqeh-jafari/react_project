import { useState, useEffect } from "react";
import enahncedFetch from "../../Services/http-fetch";


function PeopleInformation({ people_url }) {

    const [Data, setData] = useState([]);
    const [Isloading, setIsloading] = useState(false);
    const [HasError, setHaserror] = useState(false);

    const Personol_Information = `https://swapi.dev/api/people/${people_url}`

    useEffect(() => {
        const fetchrequest = async () => {
            try {
                setIsloading(true)
                const response = await enahncedFetch('Get', Personol_Information, Option)
                setData(response)

            } catch {
                setHaserror(true)
                setIsloading(false)
            } finally {
                setIsloading(false)
            }
        }
        fetchrequest()
    }, [Personol_Information]);





    const loading_people = () => {

        if (Isloading) {
            return <p>Isloading...</p>
        }
        return (
            <div className="peopl_information">
                <div className="partone">
                    <p>{Data.name}</p>
                    <p>birth year is : {Data.birth_year}</p>
                    <p>hear color is : {Data.hair_color}</p>
                    <p className="last_line">height : {Data.height}</p>
                </div>
            </div>
        )

    }
 
        return (
            
            <div>
                {HasError && <p>Errored</p>}
                {loading_people()}
            </div>
        )
}


export default PeopleInformation