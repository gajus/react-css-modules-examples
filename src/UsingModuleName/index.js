import React from 'react';
import styles from './car.css';
import CSSModules from 'react-css-modules';

class Car extends React.Component {
    render () {
        return <div moduleName='car'>
            <div moduleName='front-door'>front-door</div>
            <div moduleName='back-door'>back-door</div>
        </div>;
    }
}

export default CSSModules(Car, styles, {
    useModuleName: true
});
