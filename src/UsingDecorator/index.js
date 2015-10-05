import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './../table.css';

@CSSModules(styles)
export default class extends React.Component {
    render () {
        return <div styleName='table'>
            <div styleName='row'>
                <div styleName='cell'>A0</div>
                <div styleName='cell'>B0</div>
            </div>
        </div>;
    }
}
