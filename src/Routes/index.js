import Login from "../Components/Login"
import Signup from "../Components/Signup"

export const RouteList = [
    {
        name: 'Login',
        path: '/',
        element: <Login />,
        authRequired: false
    },
    {
        name: 'Signup',
        path: '/signup',
        element: <Signup />,
        authRequired: false
    },
]