
import {NavLink} from "react-router";

const HomePage = () => {
    return (
        <div className="d-flex justify-space-between home-page-wrapper">
            <div>
                <NavLink
                    to="/about-user"
                >
                    Check Information about user
                </NavLink>
            </div>
            <div >
                <NavLink
                    to="/registration"
                >
                    Registration
                </NavLink>
            </div>
        </div>
    )
}


export default HomePage;