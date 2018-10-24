import React from 'react';

//Icons
import {
    Repeat,
    Norepeat,
    Onerepeat
} from '../icon';

export default class RepeatComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            ...props['setup'],
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            ...nextProps['setup'],
        })
    }

    render(){
        let renderComponent;
        switch(this.state.repeatStatus){
            case 0:
                renderComponent = <Norepeat color={this.state.controlsIconColor}/>;
                break;

            case 1:
                renderComponent = <Repeat color={this.state.controlsIconColor}/>;
                break;

            default:
                renderComponent = <Onerepeat color={this.state.controlsIconColor}/>
                break;
        }

        return(
            <span className="icon btn" onClick={this.props.repeatFunction.bind(this)}>
                {renderComponent}
            </span>
        );
    }
}