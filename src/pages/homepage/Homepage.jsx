import "./Homepage.css"
import {NavLink, useNavigate} from "react-router-dom";

function Homepage() {

    const navigate = useNavigate();

    return (
        <div className="Homepage">
            <h1>Dit is de Homepage!</h1>

            <ul>
                <li>
                    <NavLink to="/detail/:id">Item 3</NavLink>
                </li>
                <li>
                    <NavLink to="/detail/:id">Item 4</NavLink>
                </li>
                <li>
                    <NavLink to="/detail/:id">Item 13</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Homepage