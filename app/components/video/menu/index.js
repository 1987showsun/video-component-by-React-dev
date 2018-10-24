import React            from 'react';
import PerfectScrollbar from '@opuscapita/react-perfect-scrollbar';

//Components
import Items            from './item';

//Icons
import { Next2 }        from '../icon';

//Stylesheets
import './style.scss';

export default class Index extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            ...props['setup'],
            data             : props['data'],
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            ...nextProps['setup'],
            data      : nextProps['data']
        })
    }

    render(){
        return(
            <div className={`video_menu_wrap ${this.state.menuShowstatus}`} style={{"height" : this.state.video_h}}>
                <PerfectScrollbar>
                    {
                        this.state.menu['title']!=""  && this.state.menu['title']!=null &&
                            <div className="menu_title">
                                {this.state.menu['title']}
                                <div className="btn" onClick={this.props.callbackMenuShowStatus.bind(this,this.state.menuShowstatus? false : true)}>
                                    <span className="icon">
                                        <Next2 color="#fff"/>
                                    </span>
                                </div>
                            </div>
                    }
                    <ul className={`video_menu_ul ${this.state.menuShowstatus}`}>
                        {
                            this.state.data.map((item,i)=>{
                                return (
                                    <Items 
                                        key                        = {`video_menu_${i}`}
                                        item                       = {item}
                                        setup                      = {this.state}
                                        i                          = {i}
                                        callbackSelectedPlayVideo  = {this.props.callbackSelectedPlayVideo}
                                    />
                                );
                            })
                        }
                    </ul>
                </PerfectScrollbar>
            </div>
        );
    }
}