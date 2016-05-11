require('normalize.css/normalize.css');
require('styles/main.css');

import React from 'react';
//获取图片相关的数据
var imageDatas = require('../data/imageDatas.json');
//利用自执行函数，将图片名信息转成图片URL路径信息
imageDatas = (function getImageURL(imageDatasArr){
	for(var i=0, j=imageDatas.length; i<j; i++) {
		var singleImageData = imageDatas[i];
		singleImageData.imageURL = require('../images/'+singleImageData.fileName);
		imageDatasArr[i] = singleImageData;
	}
})(imageDatas);

class GalleryByReactApp extends React.Component {
  render() {
    return (
    	<section className="stage">
    		<section className="img-sec">
    		</section>
    		<nav className="controller-nav">
    		</nav>
    	</section>
    );
  }
}

GalleryByReactApp.defaultProps = {
};

export default GalleryByReactApp;
