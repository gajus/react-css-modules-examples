import React from 'react';
import styles from './car.css';
import CSSModules from 'react-css-modules';

class Car extends React.Component {
    render () {
        return <div styleName='car'>
            <div styleName='front-door'>front-door</div>
            <div styleName='back-door'>back-door</div>
        </div>;
    }
}

export default CSSModules(Car, styles);
