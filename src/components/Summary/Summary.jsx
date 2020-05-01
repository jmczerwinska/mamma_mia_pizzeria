import React from 'react';

import Timer from '../Timer/Timer';
import './Summary.scss';

function Summary() {
    return (
        <div>
            <p>Dziękujemy za złożenie zamówienia!</p>
            <Timer deliveryTime={124} />
        </div>
    )

}

export default Summary;