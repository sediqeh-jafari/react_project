import { useParams } from "react-router-dom";
import PeopleInformation from "../../components/PeopleInformation";
import './style.css';
import Planetinformation from "../../components/PlanetInformation";
import Header from "../../components/Header";
function Characters() {
    // Personol_Information
    const { url } = useParams();

   
    return (
        <>

            <Header/>
            <div className="charecters">

                <div className="Personol_Information">
                    <PeopleInformation people_url = {url}/>

                </div>
                <div className="Planet_information">
                  <Planetinformation planet_url={url}/>
                </div>


            </div>

        </>



    )
}

export default Characters