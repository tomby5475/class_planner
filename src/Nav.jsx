import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav_menu">
            <ul className="nav_menu_ul">
                <li className="nav_menu_li">
                    <Link to='/'>Home</Link>
                </li>
                <li className="nav_menu_li">
                    <Link to='/GroupedLessons'>Schedule</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;