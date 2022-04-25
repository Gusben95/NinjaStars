import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><a href="#home">Hem</a></li>
                <li><a href="#news">Böcker</a></li>
                <li><a href="#contact">Sök</a></li>
                <li><a href="#about">Om oss</a></li>
            </ul>

        </nav>
    )
}

export default Navbar;