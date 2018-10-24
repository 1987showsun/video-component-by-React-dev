import React from 'react';

//Compontents
import TimeLine from './timeline';
import Repeat   from './repeat';
import Audio    from './audio';

//Icons
import {
    Play,
    Pause,
    Next,
    Prev,
    FullScreen,
    ExitFullScreen
} from '../icon';

//Stylesheets
import './style.scss';

export default class Index extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            ...props['setup'],
            controlsIconColor : props['controlsIconColor']    || "#fff",
            fullScreen        : false,
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            ...nextProps['setup'],
        })
    }

    setupVideoWindow(){
        let fullScreen  = this.state.fullScreen;
        let videoWindow =  this.state.videoWrap.current;
        if ( document.fullscreenElement!=null || document.webkitFullscreenElement!=null || document.mozFullScreenElement!=null || document.msFullscreenElement!=null ) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            fullScreen = false;
        }else{
            if (videoWindow.requestFullscreen) {
                videoWindow.requestFullscreen();
            } else if (videoWindow.mozRequestFullScreen) {
                videoWindow.mozRequestFullScreen();
            } else if (videoWindow.webkitRequestFullscreen) {
                videoWindow.webkitRequestFullscreen();
            } else if (videoWindow.msRequestFullscreen) { 
                videoWindow.msRequestFullscreen();
            }
            fullScreen = true;
        }

        this.setState({
            fullScreen
        })
    }

    render(){
        return (
            <div className="controls">
                <ul className="play_action">
                    <li>
                        <span className="icon btn" onClick={ this.props.getNowVideoStatus.bind(this,'prev') }>
                            <Prev color={this.state.controlsIconColor}/>
                        </span>
                    </li>
                    <li>
                        {
                            this.state.playStatus == 'pause'?(
                                <span className="icon btn" onClick={ this.props.getNowVideoStatus.bind(this,'play') }>
                                    <Play color={this.state.controlsIconColor}/>
                                </span>
                            ):(
                                <span className="icon btn" onClick={ this.props.getNowVideoStatus.bind(this,'pause') }>
                                    <Pause color={this.state.controlsIconColor}/>
                                </span>
                            )
                        }
                    </li>
                    <li>
                        <span className="icon btn" onClick={ this.props.getNowVideoStatus.bind(this,'next') }>
                            <Next color={this.state.controlsIconColor}/>
                        </span>
                    </li>
                </ul>
                <TimeLine setup={this.state} callbackDuration={this.props.callbackDuration}/>
                <ul className="play_action">
                    <li>
                        <Audio 
                            setup          = {this.state}
                            callbackVolume = {this.props.callbackVolume}
                        />
                    </li>
                    <li>
                        <Repeat setup={this.state} repeatFunction={this.props.repeatFunction}/>
                    </li>
                    <li>
                        {
                            !this.state.fullScreen ?(
                                <span className="icon btn" onClick={ this.setupVideoWindow.bind(this) }>
                                    <FullScreen color={this.state.controlsIconColor}/>
                                </span>
                            ):(
                                <span className="icon btn" onClick={ this.setupVideoWindow.bind(this) }>
                                    <ExitFullScreen color={this.state.controlsIconColor}/>
                                </span>
                            )
                        }
                    </li>
                </ul>
            </div>
        );
    }
}