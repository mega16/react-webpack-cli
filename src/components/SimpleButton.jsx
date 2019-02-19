import React from 'react';
import { Button } from 'antd';
import './simpleButton.scss';
import Icon from '../images/react.png';

export default class SimpleButton extends React.Component {
    render() {
        return (
            <div className="btn_style">

                <img src={Icon} />
                <div className="ele">Test</div>
                <Button>Button</Button>
            </div>
        );
    }
}

