import React from 'react';

export default class Opacity extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            ...props['setup']
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            ...nextProps['setup']
        },()=>{
            this.controlsOpacity();
        });
    }

    controlsOpacity(){
        let video          = this.state.video;
        let $touchBlock    = $(video).nextAll('.video_mask').find('.left');
        let windowThis     = this;
        let $this          = null;
        let _switch        = false;
        let _this_offset_y = 0;
        let _this_h        = 0;
        let start_y        = 0;
        let move_y         = 0;
        let opacity        = 0;

        $touchBlock.off().on({
            mousedown : function(e){

                _switch         = true;
                $this           = $(this);

                $('body').off().on({
                    mousemove : function(e){
                        if( _switch ){
                            opacityResult(e,$this,'pc');
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
                            opacityResult(e,$this,'mobile');
                        }
                    },

                    touchend : function(e){
                        _switch = false;
                    }
                })
            }
        });

        const opacityResult = (e,$this,device) => {
            e.preventDefault();
            _this_h         = $this.height();
            _this_offset_y  = $this.offset().top;
            if( device=='pc' ){
                move_y          = _this_h-(e.pageY - _this_offset_y);
            }else{
                move_y          = _this_h-(e.originalEvent.touches[0].pageY - _this_offset_y);
            }
            
            opacity         = 1*(move_y/_this_h);

            if( opacity<0 ){
                opacity = 0;
            }else if( opacity>1 ){
                opacity = 1;
            }
            this.props.getOpacityStatus(opacity);
        }
    }

    render(){
        return(
            <div className="left" onDoubleClick={ this.props.getNowVideoStatus.bind(this,'prev') }></div>
        );
    }
}