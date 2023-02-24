import Login from "../../pages/Login/Login"


const PrivateRoute = ({user, children, setUser}) => {
    
    if (!user) {
        return <Login setUser={setUser} />
    }

    return children
}

export default PrivateRoute