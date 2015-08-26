import React from 'react';
import styles from './car.css';
import CSSModules from 'react-css-modules';

class Car extends React.Component {
    render () {
        return <div className='car'>
            <div className='front-door'>front-door</div>
            <div className='back-door'>back-door</div>
        </div>;
    }
}

export default CSSModules(Car, styles);
