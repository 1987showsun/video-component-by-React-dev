import React from 'react';

export default class HideTimeline extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            ...props['setup']
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            ...nextProps['setup']
        },()=>{
            this.controlsPlayTime();
        })
    }

    controlsPlayTime(){
        let video          = this.state.video;
        let $touchBlock    = $(video).nextAll('.video_mask').find('.center .hidden_time_line');
        let windowThis     = this;
        let $this          = null;
        let _switch        = false;
        let _this_offset_x = 0;
        let _this_w        = 0;
        let start_x        = 0;
        let move_w         = 0;
        let videoDuration  = 0;

        $touchBlock.off().on({
            mousedown : function(e){
                _switch         = true;
                $this           = $(this);
                $('body').off().on({
                    mousemove : function(e){
                        if( _switch ){
                            volumeResult(e,$this,'pc');
                        }
                    },

                    mouseup : function(e){
                        _switch = false;
                    }
                })
            },
            touchstart : function(e){
                _switch         = true;
                $this           = $(this);
                $('body').off().on({
                    touchmove : function(e){
                        if( _switch ){
                            volumeResult(e,$this,'mobile');
                        }
                    },

                    touchend : function(e){
                        _switch = false;
                    }
                })
            }
        });

        const volumeResult = (e,$this,device) => {
            e.preventDefault();
            _this_w         = $this.width();
            _this_offset_x  = $this.offset().left;
            if( device=='pc' ){
                move_w          = (e.pageX - _this_offset_x);
            }else{
                move_w          = (e.originalEvent.touches[0].pageX - _this_offset_x);
            }
            
            videoDuration   = windowThis.state.videoDuration*(move_w/_this_w);
            if( videoDuration<0 ){
                videoDuration = 0;
            }else if( videoDuration>windowThis.state.videoDuration ){
                videoDuration = windowThis.state.videoDuration;
            }

            windowThis.props.callbackDuration(videoDuration);
        }
    }

    render(){
        return(
            <div className="hidden_time_line"></div>
        );
    }
}