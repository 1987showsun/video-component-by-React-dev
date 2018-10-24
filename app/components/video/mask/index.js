import React                 from 'react';

//Components
import Opacity               from './opacity';
import Volume                from './volume';
import HideTimeline          from './hide_time_line';

//Icons
import {
    Play,
    Pause,
} from '../icon';

//Stylesheets
import './style.scss';

export default class Index extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            ...props['setup'],
            opacity   : 0,
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            ...nextProps['setup']
        })
    }

    getOpacityStatus(status){
        this.setState({
            opacity : status,
        })
    }

    render(){
        return(
            <div className="video_mask" style={{"background": `rgba(0,0,0,${this.state.opacity})`}}>
                <Opacity 
                    setup             = {this.state}
                    getNowVideoStatus = {this.props.getNowVideoStatus}
                    getOpacityStatus  = {this.getOpacityStatus.bind(this)}
                />
                <div className="center">
                    {
                        this.state.playStatus=='pause'?(
                            <div className="video_mask_play" onClick={this.props.getNowVideoStatus.bind(this,'play')}>
                                <span className="icon">
                                    <Play color="#fff"/>
                                </span>
                            </div>
                        ):(
                            <div className="video_mask_play" style={{"opacity":0}} onClick={this.props.getNowVideoStatus.bind(this,'pause')}>
                                <span className="icon">
                                    <Pause color="#fff"/>
                                </span>
                            </div>
                        )
                    }

                    <HideTimeline
                        setup             = {this.state}
                        callbackDuration  = {this.props.callbackDuration}
                    />
                </div>
                <Volume 
                    setup             = {this.state}
                    callbackVolume    = {this.props.callbackVolume}
                    getNowVideoStatus = {this.props.getNowVideoStatus}
                />
            </div>
        );
    }
}