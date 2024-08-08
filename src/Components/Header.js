import React from 'react';
import { Link } from 'react-router-dom';
import banerImg from '../Assets/restauranfood.jpg';

function Header () {
return(
<header className="header">
<section>
    <div className="banner">
        <h2>
            Little Lemon
        </h2>
        <h3>
            Chicago
        </h3>
        <p>
            Mediterranean restaurant, focused on traditional recipes
        </p>
        <Link to="/booking">
            <button aria-label='On Click'>
                Reserve
            </button>
        </Link>
        <div className='banner-img'>
            <img src={banerImg} alt='' />
        </div>
    </div>
</section>
</header>
)

}
export default Header;