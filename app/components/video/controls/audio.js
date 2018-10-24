import React from 'react';

//Icons
import {
    Audio100,
    Audio60,
    Audio30,
    AudioClose
} from '../icon';

export default class Audio extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            ...props['setup'],
            showStatus   : false,
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            ...nextProps['setup']
        },()=>{
            this.moveVolume();
        })
    }

    hurrySwitshVolume(){
        let volume = localStorage.getItem('volume');
        if( volume>0 ){
            volume  = 0;
        }else{
            volume  = 1;
        }
        this.props.callbackVolume(volume);
    }

    moveVolume(){
        const volumeline    = $(this.state.videoWrap.current).find('.tuchblock');
        let   windowThis    = this;
        let   $this         = null;
        let   line_h        = 0;
        let   start_y       = 0; 
        let   line_offset_y = 0; 
        let   videoVolume   = 0;
        let   _switch       = false;

        volumeline.off().on({
            mousedown : function(e){

                _switch       = true;
                $this         = $(this);
                volumeResult(e,$this);

                $('body').off().on({
                    mousemove : (e)=>{
                        if( _switch ){
                            volumeResult(e,$this);
                        }
                    },

                    mouseup   : (e)=>{
                        _switch = false;
                    }
                })
            }
        })

        const volumeResult = (e,$this) => {
            e.preventDefault();
            line_h        = $this.height();
            line_offset_y = $this.offset().top;
            start_y       = line_h-(e.pageY-line_offset_y);
            videoVolume   = 1*(start_y/line_h);
            if( videoVolume<0 ){
                videoVolume = 0;
            }else if( videoVolume>1 ){
                videoVolume = 1;
            }

            windowThis.props.callbackVolume(videoVolume);
        }
    }

    showBar(status){
        this.setState({
            showStatus : status
        })
    }

    render(){
        const volume          = this.state.videoVolume;
        let renderComponent = null;
        if( volume>=0.6 ){
            renderComponent = <Audio100 color={this.state.controlsIconColor}/>
        }else if( volume<0.6 && volume>=0.3 ){
            renderComponent = <Audio60 color={this.state.controlsIconColor}/>
        }else if( volume<0.3 && volume>0 ){
            renderComponent = <Audio30 color={this.state.controlsIconColor}/>
        }else{
            renderComponent = <AudioClose color={this.state.controlsIconColor}/>
        }

        return(
            <div className="volume_wrap" onMouseOver={this.showBar.bind(this,true)} onMouseLeave={this.showBar.bind(this,false)}>
                <span className="icon btn" onClick={this.hurrySwitshVolume.bind(this)}>
                    {renderComponent}
                </span>
                {
                    this.state.showStatus&&
                        <div className={`audio_change_bar_wrap `} onMouseOver={this.moveVolume.bind(this)}>
                            <div className="tuchblock">
                                <div className="now_audio_line" style={{"height": `${volume*100}%`}}>
                                    <span className="now_play_audio_do"></span>
                                </div>
                            </div>
                        </div>
                }
            </div>
        );
    }
}