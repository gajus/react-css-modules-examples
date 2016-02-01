import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './../table.css';

@CSSModules(styles)
export default class extends React.Component {

    constructor(props) {

      super(props);

      this.state = {
          count: 0
      };

      // force updates in the component to break safari
      setInterval(() => {
        this.setState({
            count: this.state.count + 1
        });
      })
    }

    render () {
        return <div styleName='table'>
            <div styleName='row'>
                <div styleName='cell'>A0 {this.state.count}</div>
                <div styleName='cell'>B0</div>
            </div>
        </div>;
    }
}
