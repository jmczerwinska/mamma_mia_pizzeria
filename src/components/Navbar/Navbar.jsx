import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { ContextConsumer } from '../..';

function Navbar() {

    return (
        <nav className='navbar'>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/compose">Skomponuj</NavLink>
            {/* <NavLink to="/contact">Kontakt</NavLink> */}
            <NavLink to="/order/basket">
                <FontAwesomeIcon icon={faShoppingBasket} />
                <ContextConsumer>
                    {context => context.basket.length > 0
                        ? <span className="basket-counter">{context.basket.length}</span>
                        : null
                    }
                </ContextConsumer>

            </NavLink>
        </nav>
    )
}

export default Navbar;