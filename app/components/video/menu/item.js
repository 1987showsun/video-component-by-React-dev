import React from 'react';

export default class Items extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            ...props['item'],
            ...props['setup'],
            i       : props['i']
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            ...nextProps['item'],
            ...nextProps['setup'],
            i       : nextProps['i']
        })
    }

    render(){
        const i    = this.state.i;
        return(
            <li className={`${this.state.selectedPlay==i? 'active':''}`}>
                <figure>
                    <img src={this.state['poster']} alt={this.state['title']} title={this.state['title']} onClick={this.props.callbackSelectedPlayVideo.bind(this,i)}/>
                    <figcaption onClick={this.props.callbackSelectedPlayVideo.bind(this,i)}>
                        <h3>{this.state['title']}</h3>
                    </figcaption>
                </figure>
            </li>
        );
    }
}