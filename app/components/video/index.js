import React from 'react';

//Components
import Controls from './controls/';
import Mask     from './mask/';
import Menu     from './menu';

//Stylesheets
import './style.scss';

export default class Index extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            data              : props['data']               || [],
            menu              : props['menu']               || {"switch":false},
            selectedPlay      : props['initSelectedPlay']   || 0,
            videoTitle        : props['videoTitle']         || "Sun Video Player",
            videoSrc          : props['videoSrc']           || null,
            videoWrap         : React.createRef(),
            video             : null,
            repeatStatus      : 0,
            playStatus        : 'pause',
            videoDuration     : 0,
            videoOntimeupdate : 0,
            videoVolume       : localStorage.getItem('volume') || 1,
            resize_w          : 0,
            video_h           : 0,
            menuShowstatus    : false,
        }
    }

    componentDidMount(){
        this.getVideoInfo();
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            data              : nextProps['data']       || [],
            videoTitle        : nextProps['videoTitle'] || "Sun Video Player",
            videoSrc          : nextProps['videoSrc']   || null
        },()=>{
            this.getVideoInfo();
        })
    }  

    getVideoInfo(){
        let video      = null;
        video = this.state.videoWrap.current.firstChild;
        this.setState({
            video : video
        },()=>{
            this.rwd();
            video.onloadeddata = () => {
                this.setState({
                    videoVolume    : localStorage.getItem('volume') || video.volume,
                    videoDuration  : video.duration
                })
            }

            video.ontimeupdate = () => {
                this.setState({
                    videoOntimeupdate : video.currentTime 
                })
            }

            video.onplaying = () => {
                this.setState({
                    playStatus : 'play'
                })
            }

            video.onpause = () => {
                this.setState({
                    playStatus : 'pause'
                })
            }

            video.onended = () => {

                let repeatStatus = this.state.repeatStatus;
                let selectedPlay = this.state.selectedPlay;
                let data         = this.state.data;
                let dataLength   = data.length;

                switch(repeatStatus){
                    case 0:
                        video.currentTime = 0;
                        video.pause();
                        break;

                    case 1:
                        selectedPlay++;
                        if( selectedPlay>=dataLength ){
                            selectedPlay=0;
                        }
                        this.setState({
                            selectedPlay
                        },()=>{
                            video.play();
                        })
                        break;

                    default:
                        video.currentTime = 0;
                        video.play();
                        break;
                }
            }
        })
    }

    componentDidUpdate = (prevProps, prevState) => {
      if(prevState.ccc!=this.state.ccc ){
          this.callbac();
      }
    }
    
    

    getNowVideoStatus(status){

        const playStatus   = this.state.playStatus;
        const video        = this.state.video;
        const data         = this.state.data;
        const dataLength   = data.length;
        let   selectedPlay = this.state.selectedPlay;

        switch(status){
            case 'play':
                video.play();
                break;

            case 'pause' :
                video.pause();
                break;

            case 'prev':
                selectedPlay--;
                if( selectedPlay<=-1 ){
                    selectedPlay = dataLength-1;
                }
                this.setState({
                    selectedPlay
                },()=>{
                    if( playStatus=='play' ){
                        video.play();
                    }
                })
                break;

            case 'next':
                
                selectedPlay++;
                if( selectedPlay>=dataLength ){
                    selectedPlay = 0;
                }
                this.setState({
                    selectedPlay
                },()=>{
                    if( playStatus=='play' ){
                        video.play();
                    }
                })
                break;
        }
    }
    
    repeat(){
        let repeatStatus = this.state.repeatStatus;
        repeatStatus++;
        if( repeatStatus>=3 ){
            repeatStatus = 0;
        }
        this.setState({
            repeatStatus
        })
    }

    callbackDuration(videoDuration){
        let video  = this.state.video;
        this.setState({
            videoOntimeupdate : videoDuration,
        },()=>{
            video.currentTime = videoDuration;
        })
    }

    rwd(){
        let $video   = $(this.state.video);
        const reset=()=>{
            this.setState({
                resize    : $video.width(),
                video_h   : $video.width()/1.777
            });
        }

        reset();
        $(window).resize(()=>{
            clearTimeout(this.videoResizeDelayTime);
            this.videoResizeDelayTime = setTimeout(()=>{
                reset();
            },100);
        });
    }

    callbackVolume( videoVolume ){
        let video = this.state.video;
        this.setState({
            videoVolume
        },()=>{
            localStorage.setItem('volume',videoVolume);
            video.volume = videoVolume;
        })
    }

    callbackSelectedPlayVideo(selected_idx){
        const video        = this.state.video;
        this.setState({
            selectedPlay : selected_idx,
        },()=>{
            video.play();
        })
    }

    render(){
        const data         = this.state.data;
        const selectedPlay = this.state.selectedPlay;
        return(
            <div className={`sun_video ${this.state.menuShowstatus}`}>
                <div className={`video_wrap ${this.state.menu? "nenu_true":""}`} ref={this.state.videoWrap} >
                    <video 
                        src    = {data[selectedPlay]['src']} 
                        poster = {data[selectedPlay]['poster']}
                        style  = {{"height" : this.state.video_h}}
                    />
                    <div className="vider_header">
                        <h3>{data[selectedPlay]['title']}</h3>
                    </div>
                    <Mask 
                        setup             = {this.state} 
                        getNowVideoStatus = {this.getNowVideoStatus.bind(this)}
                        callbackVolume    = {this.callbackVolume.bind(this)}
                        callbackDuration  = {this.callbackDuration.bind(this)}
                    />
                    <Controls 
                        setup             = {this.state} 
                        getNowVideoStatus = {this.getNowVideoStatus.bind(this)}
                        repeatFunction    = {this.repeat.bind(this)}
                        callbackDuration  = {this.callbackDuration.bind(this)}
                        callbackVolume    = {this.callbackVolume.bind(this)}
                        videoWindow       = {this.video}
                    />
                </div>
                {
                    this.state.menu['switch'] &&
                        <Menu 
                            data          = {this.state.data}
                            setup         = {this.state} 
                            callbackSelectedPlayVideo = {this.callbackSelectedPlayVideo.bind(this)}
                            callbackMenuShowStatus    = {(status)=>{this.setState({menuShowstatus : status})}}
                        />
                }
            </div>
        );
    }
}