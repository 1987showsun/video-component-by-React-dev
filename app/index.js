import React                               from 'react';
import ReactDOM                            from 'react-dom';

//Components
import Video                               from './components/video';

//CSS
import './public/stylesheets/style.scss';

export default class Index extends React.Component{

  constructor(props){
    super(props);
    this.state = { 
      videoList : [
        {
          "id"      : "1",
          "title"   : "茄子蛋EggPlantEgg - 浪流連 Waves Wandering (Official Music Video)",
          "src"     : "./assets/file/videoplayback1.mp4",
          "poster"  : "https://i.ytimg.com/vi/3Y0Ut5ozaKs/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDlohyjxrPwOpwJU1i2ipVms3wYJQ",
        },
        {
          "id"      : "2",
          "title"   : "李玖哲Nicky Lee-分身有術 (Official MV) 人際關係事務所片尾曲",
          "src"     : "./assets/file/videoplayback2.mp4",
          "poster"  : "https://i.ytimg.com/vi/KEgOrgcLu0s/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCKiF18Y99Jo5QV1HSbQM1PGEOOyg"
        },
        {
          "id"      : "3",
          "title"   : "李榮浩 Ronghao Li - 年少有為 If I Were Young (華納 Official HD 官方MV)",
          "src"     : "./assets/file/videoplayback3.mp4",
          "poster"  : "https://i.ytimg.com/vi/Dnj5Tcpev0Q/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBWdr9xhdnaS1V0FwBTaVhjW7xIQA"
        },
        {
          "id"      : "4",
          "title"   : "女神卡卡, 布萊德利庫柏 Lady Gaga, Bradley Cooper - 擱淺",
          "src"     : "./assets/file/videoplayback4.mp4",
          "poster"  : "https://i.ytimg.com/vi/h2Cg_02Jfak/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLClVIIsYXJsDr6vrbF1Qalljc4kVA",
        },
        {
          "id"      : "5",
          "title"   : "Mayday五月天 [ 後來的我們 Here, After, Us ] Official Lyric",
          "src"     : "./assets/file/videoplayback5.mp4",
          "poster"  : "https://i.ytimg.com/vi/1xvQFNDwQzs/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBmaV16H82ReHOcdz-PtBOF8If4UA"
        },
        {
          "id"      : "6",
          "title"   : "茄子蛋EggPlantEgg - 浪子回頭 Back Here Again (Official Music Video)",
          "src"     : "./assets/file/videoplayback6.mp4",
          "poster"  : "https://i.ytimg.com/vi/x3bDhtuC5yk/default.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBWdr9xhdnaS1V0FwBTaVhjW7xIQA"
        },
        {
          "id"      : "7",
          "title"   : "陳勢安 Andrew Tan - 壞掉的大人 How Did We End Up Here (華納official 高畫質HD官方完整版MV)",
          "src"     : "./assets/file/videoplayback7.mp4",
          "poster"  : "https://i.ytimg.com/vi/1nTIdmNYVPQ/default.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBWdr9xhdnaS1V0FwBTaVhjW7xIQA"
        },
        {
          "id"      : "8",
          "title"   : "潘瑋柏 Will Pan - Moonlight (feat. TIA RAY 袁婭維) (English Ver.)【華納 Official MV】",
          "src"     : "./assets/file/videoplayback8.mp4",
          "poster"  : "https://i.ytimg.com/vi/N9yS6lll1rk/default.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBWdr9xhdnaS1V0FwBTaVhjW7xIQA"
        }
      ]
    }
  }

  render(){
    return(
      <div>
        <Video 
          data       = {this.state.videoList}
          menu       = {{
            "switch" : true,
            "title"  : "Menu"
          }}
        />
      </div>
    )
  }
}

ReactDOM.render(<Index/>, document.getElementById('root'));
