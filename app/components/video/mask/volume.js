import React from 'react';

export default class Volume extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            ...props['setup'],
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            ...nextProps['setup']
        },()=>{
            this.controlsVolume();       
        })
    }

    controlsVolume(){
        
        let video          = this.state.video;
        let $touchBlock    = $(video).nextAll('.video_mask').find('.right');
        let windowThis     = this;
        let $this          = null;
        let _switch        = false;
        let _this_offset_y = 0;
        let _this_h        = 0;
        let start_y        = 0;
        let move_y         = 0;
        let volume         = 0;
        
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
        })

        const volumeResult = (e,$this,device) => {
            e.preventDefault();
            _this_h         = $this.height();
            _this_offset_y  = $this.offset().top;
            if( device=='pc' ){
                move_y          = _this_h-(e.pageY - _this_offset_y);
            }else{
                move_y          = _this_h-(e.originalEvent.touches[0].pageY - _this_offset_y);
            }
            volume          = 1*(move_y/_this_h);

            if( volume<0 ){
                volume = 0;
            }else if( volume>1 ){
                volume = 1;
            }

            windowThis.props.callbackVolume(volume);
        }
    }

    render(){
        return(
            <div className="right" onDoubleClick={this.props.getNowVideoStatus.bind(this,'next')}></div>
        );
    }
}