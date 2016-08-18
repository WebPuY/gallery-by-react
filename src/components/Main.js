require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//获取图片相关数据
var imageDatas = require('../data/imageDatas.json');

// 图片名信息转成图片URL路径信息
imageDatas = (function getImageURL(imageDatasArr){
  for(var i = 0,len = imageDatasArr.length; i < len; i++){
    var singleImageData = imageDatasArr[i];

    singleImageData.imageURL = require('../images/' + singleImageData.fileName);

    imageDatasArr[i] = singleImageData;
  }

  return imageDatasArr;
})(imageDatas);


var AppComponent = React.createClass ({
  render() {
    return (
      <section className="stage">
        <section className="img-sec">
          test
        </section>
        <nav className="controller-nav">

        </nav>
      </section>
    );
  }
})

AppComponent.defaultProps = {
};

export default AppComponent;

