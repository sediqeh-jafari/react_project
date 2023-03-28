import './style.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='list_of_people'>
            <div className='flex_list_of_people'>

                <div className='part2'>
                    <ul className='top_of_page'>


                        <li>
                            <h4 className=''>Star Wars movie characters </h4>
                        </li>


                        <li id='right_navbar'>
                            <Link id='Header_Home' to={'/'}><h4>Home</h4></Link >
                            <h4> Characters </h4>
                        </li>






                    </ul>
                </div>
            </div>


        </div>


    )
}
export default Header 