import React from 'react';
import 'antd/dist/antd.less';
import './css/common.scss';
import { render } from 'react-dom';
import icon from './images/react.png';
import SimpleButton from './components/SimpleButton';
import { add } from './utils/math';

class HelloReact extends React.Component {
    render() {
        return (
            <div>
                {/* <img src={icon} /> */}
                <SimpleButton />
        Hello {this.props.name} {add(1, 3)}
            </div>
        );
    }
}

render(
    <HelloReact name="React" />,
    document.getElementById('root')
);
