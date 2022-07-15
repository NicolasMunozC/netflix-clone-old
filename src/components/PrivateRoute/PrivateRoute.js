import Login from "../../pages/Login/Login"


const PrivateRoute = ({user, children}) => {

    if (!user) {
        return <Login />
    }

    return children
}

export default PrivateRoute