import React from 'react';
import './Button.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Button extends React.Component {
    constructor(props) {
        super(props);
    }
render() {
        let {children} = this.props
        return (
            <div className='button_wrapper'>
                <button className="button"> <FontAwesomeIcon icon={["fa", "sync"]} fixedWidth />{children}</button>
            </div>
        );
    }
}
export default Button;