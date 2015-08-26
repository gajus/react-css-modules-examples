import React from 'react';
import ReactDOM from 'react-dom';
import Car from './Car';
import UsingDecorator from './UsingDecorator';
import UsingModuleName from './UsingModuleName';

ReactDOM.render(<div>
    <Car />
    <UsingDecorator />
    <UsingModuleName />
</div>, document.querySelector('#app'));
