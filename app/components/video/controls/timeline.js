import React from 'react';

export default class TimeLine extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ...props['setup'],
            now_play_line_w : 0,
        }
    }

    componentWillMount(){
        this.changeTimelineSet();
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            ...nextProps['setup']
        },()=>{
            this.changeTimelineSet();
        })
    }

    changeTimelineSet(){
        const time_line_w = $('.time_line').find('>.line').width();
        const videoOntimeupdate = this.state.videoOntimeupdate;
        const videoDuration     = this.state.videoDuration;
        this.setState({
            now_play_line_w : (videoOntimeupdate/videoDuration)*100,
        },()=>{
            this.movePlayTime();
        })
    }

    movePlayTime(){

        const video_wrap    = $(this.state.videoWrap.current);
        const vdieo         = this.state.video;
        const timeline      = video_wrap.find('.line');
        let   windowThis    = this;
        let   $this         = null;
        let   line_w        = 0;
        let   start_x       = 0; 
        let   move_x        = 0;
        let   line_offset_x = 0; 
        let   videoDuration = 0;
        let   moveStart     = false;

        $(timeline).off().on({
            mousedown : function(e){

                vdieo.pause();
                moveStart     = true;
                $this         = $(this);
                line_w        = $this.width();
                line_offset_x = $this.offset().left;
                start_x       = e.pageX-line_offset_x;
                videoDuration = windowThis.state.videoDuration*((start_x/line_w));
                windowThis.props.callbackDuration(videoDuration);

                $('body').off().on({
                    mousemove : (e)=>{
                        if( moveStart ){
                            move_x        = e.pageX-line_offset_x;
                            videoDuration = windowThis.state.videoDuration*((move_x/line_w));
                            windowThis.props.callbackDuration(videoDuration);
                        }
                    },

                    mouseup   : (e)=>{
                        if(moveStart){
                            vdieo.play();
                        }
                        moveStart = false;
                    }
                })
            }
        })
    }

    render(){
        return(
            <div className="time_line">
                <div className="line">
                    <div className="now_play_line" style={{"width" : `${this.state.now_play_line_w}%`}}>
                        <span className="now_play_line_do"></span>
                    </div>
                </div>
            </div>
        );
    }
}