import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import enahncedFetch from "../../Services/http-fetch";
import './style.css'
import Footer from "../Footer";

function Main() {


    const [Characters, setCharacters] = useState([])
    const [isloading, setIsloading] = useState(false);
    const [haserror, setHaserror] = useState(false);
    const [number, setNumber] = useState(1);

    const BASE_API = `https://swapi.dev/api/people/?page=${number}`;

    useEffect(() => {
        const fetchpeople = async () => {
            try {

                setIsloading(true)

                const response = await enahncedFetch("GET", BASE_API, Option)
                setCharacters(response.results)
            } catch {
                setHaserror(true)
                console.log('it has error');
                setIsloading(false)
            } finally {
                setIsloading(false)
            }


        }
        fetchpeople()

    }, [BASE_API])
    
    
    const render_list_of_people = ()=>{
        if (isloading) {
                return <p className="is_loading">isloading...</p>
            }
            if (haserror) {
                return <p className="has_error">errored</p>
            }
            return (
                Characters.map((data) => {
                    return  <Link id="people_card" key={data.name}  to={`/Characters/${data.url}`}>
                            <div url={data.url}>
                                 

                                <p>{data.name}</p>
                                <p>mass is :{data.mass}</p>
                                <p> height is {data.height}</p>
                           
                            </div>
                            </Link>
                })
            )
    }

    return (
        <>

            <div className='list_of_people'>

                <div className='list_of_people_template'>
                    {render_list_of_people()}
                </div>
                <Footer hasError={haserror} load={isloading} className='pagination' Number={number} NewNumber={setNumber} />

            </div>
        </>
    )
}

export default Main