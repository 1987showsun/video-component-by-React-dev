# Video Play component to React

## NPM
```js
npm i react-videoplayer-beta
```

## Demo
[Demo](https://1987showsun.github.io/video-component-by-React-dev/index.html)

## data
```json
  [
    {
      "id"      : "1",
      "title"   : "茄子蛋EggPlantEgg - 浪流連 Waves Wandering (Official Music Video)",
      "src"     : "./assets/file/videoplayback1.mp4",
      "poster"  : "https://i.ytimg.com/vi/3Y0Ut5ozaKs/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDlohyjxrPwOpwJU1i2ipVms3wYJQ"
    }
  ]
```
id       : render item key
title    : playing video title
src      : video file path/src
poster   : video player init main image

## Api

| Api                 | type              | method                                                               |
| ------------------- | ----------------- | -------------------------------------------------------------------- |
| data                | Object            | Object keys:id,title,src,poster                                      |
| menu                | Object            | Object keys: swtch: fslae/true(init:false),titile : "Menu head text" |
