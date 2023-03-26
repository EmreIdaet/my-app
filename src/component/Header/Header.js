import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

export const Header = () => {
    const { isAuthenticated, userEmail } = useContext(AuthContext);

    return (
        <header>
            <nav>
                <ul>
                    {isAuthenticated && (<li>{userEmail}</li>)}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/catalog">Catalog</Link></li>

                    {isAuthenticated ? (
                        <>
                            <li><Link to="/create">Create</Link></li>
                            <li><Link to="/logout">Logout</Link></li>
                        </>
                    ) : 
                    (<>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </>)}



                </ul>
            </nav>
        </header>
    )
}