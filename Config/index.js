import Characters from "../pages/Characters"
import Home from "../pages/Home"
import {Navigate} from 'react-router-dom'
export const router = [
    {
        path:'/',
        element:<Home/>
    }
    ,
    {
        path:'/Characters/https://swapi.dev/api/people/:url',
        element:<Characters/>
    },
    {
        path:'*',
        element:<Navigate to='/'/>
    }
   
]