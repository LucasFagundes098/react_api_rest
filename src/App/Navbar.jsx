import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar'>
            <h1>API Movies</h1>
            <div className='links'>
                <Link to='/'>Films</Link>
                <Link to='/'>Series</Link>
            </div>
        </nav>
    )
}

export default Navbar;
