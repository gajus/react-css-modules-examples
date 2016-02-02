import React from 'react';
import ReactDOM from 'react-dom';
import UsingStyleName from './UsingStyleName';
import UsingStylesProperty from './UsingStylesProperty';
import UsingStylesPropertyStyles from './UsingStylesProperty/custom.css';

ReactDOM.render(<div>
    <UsingStyleName />
    <UsingStylesProperty styles={UsingStylesPropertyStyles} />
</div>, document.querySelector('#app'));
