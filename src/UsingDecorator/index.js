import React from 'react';
import styles from './car.css';
import CSSModules from 'react-css-modules';

@CSSModules(styles)
export default class extends React.Component {
    render () {
        return <div localClassName='car'>
            <div localClassName='front-door'>front-door</div>
            <div localClassName='back-door'>back-door</div>
        </div>;
    }
}
