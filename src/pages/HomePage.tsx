
import {NavLink} from "react-router";

const HomePage = () => {
    return (
        <div className="d-flex justify-center home-page-wrapper">
            <div>
                <NavLink
                    to="/about-user"
                >
                    Check Information about user
                </NavLink>
            </div>
            <div style={{ padding: "0 30px 0 0" }}>
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