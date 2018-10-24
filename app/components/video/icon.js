import React from 'react';

export class Play extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color   : props['color']   || '#fff'
        }
    }

    render(){
        return(
            <svg id="圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
                <path style={{"fill":this.state.color}} d="M131,67.12,41.55,15.48A9.1,9.1,0,0,0,27.9,23.36V126.64a9.1,9.1,0,0,0,13.65,7.88L131,82.88A9.1,9.1,0,0,0,131,67.12Z"/>
                <rect class="cls-1" style={{"fill":"none"}} width="150" height="150"/>
            </svg>
        );
    }
}

export class Prev extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color   : props['color']   || '#fff'
        }
    }

    render(){
        return(
            <svg id="圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
                <path style={{"fill":this.state.color}} d="M41,67.12l78.36-45.24A9.1,9.1,0,0,1,133,29.76v90.48a9.1,9.1,0,0,1-13.65,7.88L41,82.88A9.1,9.1,0,0,1,41,67.12Z"/>
                <rect style={{"fill":this.state.color}} x="21.6" y="21" width="10" height="108" transform="translate(53.19 150) rotate(-180)"/>
                <rect class="cls-1" style={{"fill":"none"}} width="150" height="150"/>
            </svg>
        );
    }
}

export class Next extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color   : props['color']   || '#fff'
        }
    }

    render(){
        return(
            <svg id="圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
                <path style={{"fill":this.state.color}} d="M113.61,67.12,35.24,21.88A9.09,9.09,0,0,0,21.6,29.76v90.48a9.09,9.09,0,0,0,13.64,7.88l78.37-45.24A9.1,9.1,0,0,0,113.61,67.12Z"/>
                <rect style={{"fill":this.state.color}} x="123" y="21" width="10" height="108"/>
                <rect class="cls-1" style={{"fill":"none"}} width="150" height="150"/>
            </svg>
        );
    }
}

export class Next2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color   : props['color']   || '#fff'
        }
    }

    render(){
        return(
            <svg id="圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
                <polygon style={{"fill":this.state.color}} points="53.29 7 39.73 22.99 98.92 75 39.73 127.01 53.29 143 130.27 75 53.29 7"/>
                <rect class="cls-1" style={{"fill":"none"}} width="150" height="150"/>
            </svg>
        );
    }
}

export class FullScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color   : props['color']    || "#fff"
        }
    }

    render(){
        return(
            <svg id="圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
                <rect class="cls-1" style={{"fill":"none"}} width="150" height="150"/>
                <polygon style={{"fill":this.state.color}} points="36 55 36 36 55 36 55 17 17 17 17 55 36 55"/>
                <polygon style={{"fill":this.state.color}} points="114 95 114 114 95 114 95 133 133 133 133 95 114 95"/>
                <polygon style={{"fill":this.state.color}} points="95 36 114 36 114 55 133 55 133 17 95 17 95 36"/>
                <polygon style={{"fill":this.state.color}} points="55 114 36 114 36 95 17 95 17 133 55 133 55 114"/>
            </svg>
        );
    }
}

export class ExitFullScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color   : props['color']    || "#fff"
        }
    }

    render(){
        return(
            <svg id="圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
                <rect class="cls-1" style={{"fill":"none"}} width="150" height="150"/>
                <polygon style={{"fill":this.state.color}} points="114 133 114 114 133 114 133 95 95 95 95 133 114 133"/>
                <polygon style={{"fill":this.state.color}} points="36 17 36 36 17 36 17 55 55 55 55 17 36 17"/>
                <polygon style={{"fill":this.state.color}} points="17 114 36 114 36 133 55 133 55 95 17 95 17 114"/>
                <polygon style={{"fill":this.state.color}} points="133 36 114 36 114 17 95 17 95 55 133 55 133 36"/>
            </svg>
        );
    }
}

export class Repeat extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color   : props['color']    || "#fff"
        }
    }

    render(){
        return(
            <svg id="圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
                <path style={{"fill":this.state.color}} d="M104.52,10V28.53H42.06A37.51,37.51,0,0,0,4.55,66v10.2H26.18V68.79A19.18,19.18,0,0,1,45.35,49.61h59.17V68.32l41.31-29.16Z"/>
                <path style={{"fill":this.state.color}} d="M125.32,73.58a1.51,1.51,0,0,0-1.5,1.51v6a19.17,19.17,0,0,1-19.17,19.17H45.48V81.68L4.17,110.84,45.48,140V121.29h62.46a37.51,37.51,0,0,0,37.51-37.51V73.58Z"/>
                <rect class="cls-1" style={{"fill":"none"}} width="150" height="150"/>
            </svg>
        );
    }
}

export class Norepeat extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color   : props['color']    || "#fff"
        }
    }

    render(){
        return(
            <svg id="圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
                <path style={{"fill":this.state.color}} d="M66.69,49.61l6.38-21.08h-31A37.51,37.51,0,0,0,4.55,66v10.2H26.18V68.79A19.18,19.18,0,0,1,45.35,49.61Z"/>
                <polygon style={{"fill":this.state.color}} points="145.83 39.16 109.6 13.59 98.69 49.61 104.52 49.61 104.52 68.32 145.83 39.16"/>
                <polygon style={{"fill":this.state.color}} points="51.37 100.21 45.48 100.21 45.48 81.68 4.17 110.84 40.4 136.41 51.37 100.21"/>
                <path style={{"fill":this.state.color}} d="M125.32,73.58a1.51,1.51,0,0,0-1.5,1.51v6a19.17,19.17,0,0,1-19.17,19.17H83.36L77,121.29h31a37.51,37.51,0,0,0,37.51-37.51V73.58Z"/>
                <polygon style={{"fill":this.state.color}} points="45.31 140 65.31 140 104.69 10 84.69 10 45.31 140"/>
                <rect class="cls-1" style={{"fill":"none"}} width="150" height="150"/>
            </svg>
        );
    }
}

export class Onerepeat extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color   : props['color']    || "#fff"
        }
    }

    render(){
        return(
            <svg id="圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
                <path style={{"fill":this.state.color}} d="M104.52,53c.49,0,1,0,1.48,0a47.93,47.93,0,0,1,16.23,2.82l23.6-16.66L104.52,10V28.53H42.06A37.51,37.51,0,0,0,4.55,66v10.2H26.18V68.79A19.18,19.18,0,0,1,45.35,49.61h59.17Z"/>
                <path style={{"fill":this.state.color}} d="M58,101c0-.26,0-.52,0-.79H45.48V81.68L4.17,110.84,45.48,140V121.29h17A47.8,47.8,0,0,1,58,101Z"/>
                <path style={{"fill":this.state.color}} d="M145.45,73.67v-.09h-.06Z"/>
                <path style={{"fill":this.state.color}} d="M106,62a39,39,0,1,0,39,39A39,39,0,0,0,106,62Zm7.44,72.34H102.7V80.08H93.62V71h19.82Z"/>
                <rect class="cls-1" style={{"fill":"none"}} width="150" height="150"/>
            </svg>
        );
    }
}

export class Audio100 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color   : props['color']    || "#fff"
        }
    }

    render(){
        return(
            <svg id="圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
                <path style={{"fill":this.state.color}} d="M83.2,18.59,50.21,42l-9.37,6.64H16.5a8.17,8.17,0,0,0-8.18,8.17V93.23a8.17,8.17,0,0,0,8.18,8.17H41.08l9.13,6.47,33,23.39a8.54,8.54,0,0,0,13.48-7V25.56A8.54,8.54,0,0,0,83.2,18.59Z"/>
                <path style={{"fill":this.state.color}} d="M101,22.78V33a43,43,0,0,1,0,84.1v10.17a53,53,0,0,0,0-104.44Z"/>
                <path style={{"fill":this.state.color}} d="M101,40.13v13.7a23,23,0,0,1,0,42.34v13.7a36,36,0,0,0,0-69.74Z"/>
                <path style={{"fill":this.state.color}} d="M101,61.77V88.23a16,16,0,0,0,0-26.46Z"/>
            </svg>
        );
    }
}

export class Audio60 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color   : props['color']    || "#fff"
        }
    }

    render(){
        return(
            <svg id="圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
                <path style={{"fill":this.state.color}} d="M83.2,18.59,50.21,42l-9.37,6.64H16.5a8.17,8.17,0,0,0-8.18,8.17V93.23a8.17,8.17,0,0,0,8.18,8.17H41.08l9.13,6.47,33,23.39a8.54,8.54,0,0,0,13.48-7V25.56A8.54,8.54,0,0,0,83.2,18.59Z"/>
                <path style={{"fill":this.state.color}} d="M101,40.13v13.7a23,23,0,0,1,0,42.34v13.7a36,36,0,0,0,0-69.74Z"/>
                <path style={{"fill":this.state.color}} d="M101,61.77V88.23a16,16,0,0,0,0-26.46Z"/>
            </svg>
        );
    }
}

export class Audio30 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color   : props['color']    || "#fff"
        }
    }

    render(){
        return(
            <svg id="圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
                <path style={{"fill":this.state.color}} d="M83.2,18.59,50.21,42l-9.37,6.64H16.5a8.17,8.17,0,0,0-8.18,8.17V93.23a8.17,8.17,0,0,0,8.18,8.17H41.08l9.13,6.47,33,23.39a8.54,8.54,0,0,0,13.48-7V25.56A8.54,8.54,0,0,0,83.2,18.59Z"/>
                <path style={{"fill":this.state.color}} d="M101,61.77V88.23a16,16,0,0,0,0-26.46Z"/>
            </svg>
        );
    }
}

export class AudioClose extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color   : props['color']    || "#fff"
        }
    }

    render(){
        return(
            <svg id="圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
                <polygon style={{"fill":this.state.color}} points="52.32 133 65.32 133 97.68 17 84.68 17 52.32 133"/>
                <path style={{"fill":this.state.color}} d="M70.22,43.74l-6.88,4.88H39a8.17,8.17,0,0,0-8.18,8.17V93.23A8.17,8.17,0,0,0,39,101.4H54.13Z"/>
                <path style={{"fill":this.state.color}} d="M105.7,18.59l-1.82,1.29L78.24,111.79l27.46,19.47a8.54,8.54,0,0,0,13.48-7V25.56A8.54,8.54,0,0,0,105.7,18.59Z"/>
                <rect class="cls-1" style={{"fill":"none"}} width="150" height="150"/>
            </svg>
        );
    }
}

export class Pause extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color   : props['color']    || "#fff"
        }
    }

    render(){
        return(
            <svg id="圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
                <rect style={{"fill":this.state.color}} x="87.5" y="16" width="26" height="118" rx="4.48" ry="4.48"/>
                <rect style={{"fill":this.state.color}} x="36.5" y="16" width="26" height="118" rx="4.48" ry="4.48"/>
                <rect class="cls-1" style={{"fill":"none"}} width="150" height="150"/>
            </svg>
        );
    }
}