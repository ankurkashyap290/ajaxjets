(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{321:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n.n(i),o=n(320),a=n(319),r=n(127),l=n(346),u=n(333),c=(n(360),n(136)),p=n.n(c),d=n(137),h=n.n(d),f=n(378),m=n.n(f);t.default=function(e){var t=e.pageContext.fleet,n=[],i="";return r.jetImages.map(function(e){return e.title===t.title&&(e.imgs.map(function(e){return n.push(e)}),i=e.bgImage),e}),s.a.createElement(o.a,{page:"jetDescription",sliderHeading:""+t.title,sliderDesc:"",backgroundImage:i,dedicatedToSafety:!0},s.a.createElement(a.a,{title:"Jet Description"}),s.a.createElement("div",{className:"jetDescription"},s.a.createElement("section",{className:"page-section titleHeader"},t.title),s.a.createElement("section",null,s.a.createElement("div",{className:"sliderSection container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6 col-md-6 "},s.a.createElement(l.Carousel,{autoPlay:!0,infiniteLoop:!0,showIndicators:!1,className:"carouselCustomization",dynamicHeight:!0},n.map(function(e,t){return s.a.createElement("div",{className:"carouselSection",key:"carousel_"+t},s.a.createElement("img",{src:e,alt:"carousel",className:"carouselImg"}))}))),s.a.createElement("div",{className:"col-lg-6 text-muted col-md-6 "},t.desc,s.a.createElement("p",{style:{marginTop:"16px"}}," ",t.priceHeading),s.a.createElement("ul",null," ",s.a.createElement("li",null,t.priceDetails)),s.a.createElement("p",null," ",t.flightSpecsHeading),s.a.createElement("ul",null,t.flightSpecsDetails.map(function(e,t){return s.a.createElement("li",{key:"specs_"+t},e)})),t.quoteHeading)))),s.a.createElement("section",null,s.a.createElement("div",{className:"sliderSection container",style:{paddingBottom:"4%",paddingTop:"0px"}},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6 col-md-6 fleetDesc"},s.a.createElement("h3",{className:"h4 mb-2"},"Safety and Compliance "),s.a.createElement("p",{className:"text-muted mb-0 adviceDesc"},"All AJAX flights pass diligence background check from ARG/US and Wyvern"),s.a.createElement("div",null,s.a.createElement("img",{src:p.a,alt:"wyvernLogo",className:"logoImg"}),s.a.createElement("img",{src:h.a,alt:"arguLogo",className:"logoImg"}))),s.a.createElement("div",{className:"col-lg-6 col-md-6 fleetDesc"},s.a.createElement("h3",{className:"h4 mb-2"},t.title," Features"),t.wifi?s.a.createElement("div",{className:"wifi"},s.a.createElement("i",{className:"fa fa-wifi iconSize","aria-hidden":"true"}),s.a.createElement("span",{style:{paddingLeft:"20px",fontSize:"1.125rem"}}," ","Wi-Fi")):null,s.a.createElement("div",{className:"seats"},s.a.createElement("img",{src:m.a,alt:"seatIcon",className:"seatIcon"}),s.a.createElement("span",{style:{paddingLeft:"45px",fontSize:"1.125rem"}},t.seats)),s.a.createElement("div",null,s.a.createElement(u.a,{href:"/request-a-quote",className:"button"},"Get A Quote"),s.a.createElement(u.a,{href:"/contact-us",className:"button"},"Request An Aircraft And Aviation Management Proposal"))))))))}},337:function(e,t,n){"use strict";n(42),Object.defineProperty(t,"__esModule",{value:!0});var i,s=n(4),o=(i=s)&&i.__esModule?i:{default:i};t.default={CAROUSEL:function(e){return(0,o.default)({carousel:!0,"carousel-slider":e})},WRAPPER:function(e,t){return(0,o.default)({"thumbs-wrapper":!e,"slider-wrapper":e,"axis-horizontal":"horizontal"===t,"axis-vertical":"horizontal"!==t})},SLIDER:function(e,t){return(0,o.default)({thumbs:!e,slider:e,animated:!t})},ITEM:function(e,t){return(0,o.default)({thumb:!e,slide:e,selected:t})},ARROW_PREV:function(e){return(0,o.default)({"control-arrow control-prev":!0,"control-disabled":e})},ARROW_NEXT:function(e){return(0,o.default)({"control-arrow control-next":!0,"control-disabled":e})},DOT:function(e){return(0,o.default)({dot:!0,selected:e})}}},338:function(e,t,n){"use strict";n(42),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return"translate3d"+("("+("horizontal"===t?[e,0,0]:[0,e,0]).join(",")+")")}},339:function(e,t,n){var i,s,o;n(42),s=[t,n(348)],void 0===(o="function"==typeof(i=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,i=(n=t)&&n.__esModule?n:{default:n};e.default=i.default})?i.apply(t,s):i)||(e.exports=o)},340:function(e,t,n){"use strict";n(25),n(31),n(61),n(26),n(99),n(59),n(27),n(42),Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(0),a=d(o),r=d(n(43)),l=d(n(337)),u=n(349),c=d(n(338)),p=d(n(339));function d(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return f.call(n),n.state={selectedItem:e.selectedItem,hasMount:!1,firstItem:0,itemSize:null,visibleItems:0,lastPosition:0,showArrows:!1,images:n.getImages()},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),s(t,[{key:"componentDidMount",value:function(e){this.setupThumbs()}},{key:"componentWillReceiveProps",value:function(e,t){e.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:e.selectedItem,firstItem:this.getFirstItem(e.selectedItem)}),e.children!==this.props.children&&this.setState({images:this.getImages()})}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){window.addEventListener("resize",this.updateSizes),window.addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){window.removeEventListener("resize",this.updateSizes),window.removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getImages",value:function(){var e=o.Children.map(this.props.children,function(e,t){var n=e;return"img"!==e.type&&(n=o.Children.toArray(e.props.children).filter(function(e){return"img"===e.type})[0]),n&&0!==n.length?n:null});return 0===e.filter(function(e){return null!==e}).length?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),null):e}},{key:"getFirstItem",value:function(e){var t=e;return e>=this.state.lastPosition&&(t=this.state.lastPosition),e<this.state.firstItem+this.state.visibleItems&&(t=this.state.firstItem),e<this.state.firstItem&&(t=e),t}},{key:"renderItems",value:function(){var e=this;return this.state.images.map(function(t,n){var s=l.default.ITEM(!1,n===e.state.selectedItem&&e.state.hasMount),o={key:n,ref:function(t){return e.setThumbsRef(t,n)},className:s,onClick:e.handleClickItem.bind(e,n,e.props.children[n]),onKeyDown:e.handleClickItem.bind(e,n,e.props.children[n])};return 0===n&&(t=a.default.cloneElement(t,{onLoad:e.setMountState})),a.default.createElement("li",i({},o,{role:"button",tabIndex:0}),t)})}},{key:"render",value:function(){if(!this.props.children)return null;var e,t=this.state.showArrows&&this.state.firstItem>0,n=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,i=-this.state.firstItem*this.state.itemSize+"px",s=(0,c.default)(i,this.props.axis),o=this.props.transitionTime+"ms";return e={WebkitTransform:s,MozTransform:s,MsTransform:s,OTransform:s,transform:s,msTransform:s,WebkitTransitionDuration:o,MozTransitionDuration:o,MsTransitionDuration:o,OTransitionDuration:o,transitionDuration:o,msTransitionDuration:o},a.default.createElement("div",{className:l.default.CAROUSEL(!1)},a.default.createElement("div",{className:l.default.WRAPPER(!1),ref:this.setItemsWrapperRef},a.default.createElement("button",{type:"button",className:l.default.ARROW_PREV(!t),onClick:this.slideRight}),a.default.createElement(p.default,{tagName:"ul",selectedItem:this.state.selectedItem,className:l.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:e,ref:this.setItemsListRef},this.renderItems()),a.default.createElement("button",{type:"button",className:l.default.ARROW_NEXT(!n),onClick:this.slideLeft})))}}]),t}();h.displayName="Thumbs",h.propsTypes={children:r.default.element.isRequired,transitionTime:r.default.number,selectedItem:r.default.number,thumbWidth:r.default.number},h.defaultProps={selectedItem:0,transitionTime:350,axis:"horizontal"};var f=function(){var e=this;this.setItemsWrapperRef=function(t){e.itemsWrapperRef=t},this.setItemsListRef=function(t){e.itemsListRef=t},this.setThumbsRef=function(t,n){e.thumbsRef||(e.thumbsRef=[]),e.thumbsRef[n]=t},this.updateSizes=function(){if(e.props.children&&e.itemsWrapperRef){var t=e.props.children.length,n=e.itemsWrapperRef.clientWidth,i=e.props.thumbWidth?e.props.thumbWidth:(0,u.outerWidth)(e.thumbsRef[0]),s=Math.floor(n/i),o=t-s,a=s<t;e.setState(function(t,n){return{itemSize:i,visibleItems:s,firstItem:a?e.getFirstItem(n.selectedItem):0,lastPosition:o,showArrows:a}})}},this.setMountState=function(){e.setState({hasMount:!0}),e.updateSizes()},this.handleClickItem=function(t,n,i){if(!i.keyCode||"Enter"===i.key){var s=e.props.onSelectItem;"function"==typeof s&&s(t,n)}},this.onSwipeStart=function(){e.setState({swiping:!0})},this.onSwipeEnd=function(){e.setState({swiping:!1})},this.onSwipeMove=function(t){var n=-e.state.firstItem*e.state.itemSize;0===n&&t>0&&(t=0),n===-e.state.visibleItems*e.state.itemSize&&t<0&&(t=0);var i=n+100/(e.itemsWrapperRef.clientWidth/t)+"%";e.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(t){e.itemsListRef.style[t]=(0,c.default)(i,e.props.axis)})},this.slideRight=function(t){e.moveTo(e.state.firstItem-("number"==typeof t?t:1))},this.slideLeft=function(t){e.moveTo(e.state.firstItem+("number"==typeof t?t:1))},this.moveTo=function(t){t=(t=t<0?0:t)>=e.lastPosition?e.lastPosition:t,e.setState({firstItem:t,selectedItem:e.state.selectedItem})}};t.default=h},346:function(e,t,n){"use strict";n(42),Object.defineProperty(t,"__esModule",{value:!0}),t.Thumbs=t.Carousel=void 0;var i=o(n(347)),s=o(n(340));function o(e){return e&&e.__esModule?e:{default:e}}t.Carousel=i.default,t.Thumbs=s.default},347:function(e,t,n){"use strict";n(25),n(31),n(26),n(99),n(59),n(27),n(42),Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(0),a=f(o),r=f(n(64)),l=f(n(43)),u=f(n(337)),c=f(n(338)),p=f(n(339)),d=f(n(340)),h=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(350));function f(e){return e&&e.__esModule?e:{default:e}}var m=function(){},v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return y.call(n),n.state={initialized:!1,selectedItem:e.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:e.autoPlay},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),s(t,[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.selectedItem!==this.state.selectedItem&&(this.updateSizes(),this.moveTo(e.selectedItem)),e.autoPlay!==this.state.autoPlay&&this.setState({autoPlay:e.autoPlay},function(){t.state.autoPlay?t.setupAutoPlay():t.destroyAutoPlay()})}},{key:"componentDidUpdate",value:function(e,t){e.children||!this.props.children||this.state.initialized||this.setupCarousel(),t.swiping&&!this.state.swiping&&this.resetPosition()}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){this.bindEvents(),this.state.autoPlay&&o.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.setState({initialized:!0});var e=this.getInitialImage();e?e.addEventListener("load",this.setMountState):this.setMountState()}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var e=this.carouselWrapperRef;this.props.stopOnHover&&e&&(e.addEventListener("mouseenter",this.stopOnHover),e.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var e=this.carouselWrapperRef;this.props.stopOnHover&&e&&(e.removeEventListener("mouseenter",this.stopOnHover),e.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){window.addEventListener("resize",this.updateSizes),window.addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&document.addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){window.removeEventListener("resize",this.updateSizes),window.removeEventListener("DOMContentLoaded",this.updateSizes);var e=this.getInitialImage();e&&e.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&document.removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"getPosition",value:function(e){this.props.infiniteLoop&&++e;var t=o.Children.count(this.props.children);if(this.props.centerMode&&"horizontal"===this.props.axis){var n=-e*this.props.centerSlidePercentage,i=t-1;return e&&(e!==i||this.props.infiniteLoop)?n+=(100-this.props.centerSlidePercentage)/2:e===i&&(n+=100-this.props.centerSlidePercentage),n}return 100*-e}},{key:"renderItems",value:function(e){var t=this;return o.Children.map(this.props.children,function(n,i){var s={ref:function(e){return t.setItemsRef(e,i)},key:"itemKey"+i+(e?"clone":""),className:u.default.ITEM(!0,i===t.state.selectedItem),onClick:t.handleClickItem.bind(t,i,n)};return t.props.centerMode&&"horizontal"===t.props.axis&&(s.style={minWidth:t.props.centerSlidePercentage+"%"}),a.default.createElement("li",s,n)})}},{key:"renderControls",value:function(){var e=this;return this.props.showIndicators?a.default.createElement("ul",{className:"control-dots"},o.Children.map(this.props.children,function(t,n){return a.default.createElement("li",{className:u.default.DOT(n===e.state.selectedItem),onClick:e.changeItem,onKeyDown:e.changeItem,value:n,key:n,role:"button",tabIndex:0})})):null}},{key:"renderStatus",value:function(){return this.props.showStatus?a.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,o.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return this.props.showThumbs&&0!==o.Children.count(this.props.children)?a.default.createElement(d.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth},this.props.children):null}},{key:"render",value:function(){if(!this.props.children||0===o.Children.count(this.props.children))return null;var e="horizontal"===this.props.axis,t=this.props.showArrows&&o.Children.count(this.props.children)>1,n=t&&(this.state.selectedItem>0||this.props.infiniteLoop),s=t&&(this.state.selectedItem<o.Children.count(this.props.children)-1||this.props.infiniteLoop),r={},l=this.getPosition(this.state.selectedItem),d=(0,c.default)(l+"%",this.props.axis),h=this.props.transitionTime+"ms";r={WebkitTransform:d,MozTransform:d,MsTransform:d,OTransform:d,transform:d,msTransform:d},this.state.swiping||(r=i({},r,{WebkitTransitionDuration:h,MozTransitionDuration:h,MsTransitionDuration:h,OTransitionDuration:h,transitionDuration:h,msTransitionDuration:h}));var f=this.renderItems(!0),m=f.shift(),v=f.pop(),y={selectedItem:this.state.selectedItem,className:u.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:r,tolerance:this.props.swipeScrollTolerance},w={};if(e){if(y.onSwipeLeft=this.onSwipeForward,y.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var S=this.getVariableImageHeight(this.state.selectedItem);y.style.height=S||"auto",w.height=S||"auto"}}else y.onSwipeUp="natural"===this.props.verticalSwipe?this.onSwipeBackwards:this.onSwipeForward,y.onSwipeDown="natural"===this.props.verticalSwipe?this.onSwipeForward:this.onSwipeBackwards,y.style.height=this.state.itemSize,w.height=this.state.itemSize;return a.default.createElement("div",{className:this.props.className,ref:this.setCarouselWrapperRef},a.default.createElement("div",{className:u.default.CAROUSEL(!0),style:{width:this.props.width}},a.default.createElement("button",{type:"button",className:u.default.ARROW_PREV(!n),onClick:this.onClickPrev}),a.default.createElement("div",{className:u.default.WRAPPER(!0,this.props.axis),style:w,ref:this.setItemsWrapperRef},this.props.swipeable?a.default.createElement(p.default,i({tagName:"ul",ref:this.setListRef},y,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&v,this.renderItems(),this.props.infiniteLoop&&m):a.default.createElement("ul",{className:u.default.SLIDER(!0,this.state.swiping),ref:this.setListRef,style:r},this.props.infiniteLoop&&v,this.renderItems(),this.props.infiniteLoop&&m)),a.default.createElement("button",{type:"button",className:u.default.ARROW_NEXT(!s),onClick:this.onClickNext}),this.renderControls(),this.renderStatus()),this.renderThumbs())}}]),t}();v.displayName="Carousel",v.propTypes={className:l.default.string,children:l.default.node,showArrows:l.default.bool,showStatus:l.default.bool,showIndicators:l.default.bool,infiniteLoop:l.default.bool,showThumbs:l.default.bool,thumbWidth:l.default.number,selectedItem:l.default.number,onClickItem:l.default.func.isRequired,onClickThumb:l.default.func.isRequired,onChange:l.default.func.isRequired,axis:l.default.oneOf(["horizontal","vertical"]),verticalSwipe:l.default.oneOf(["natural","standard"]),width:h.unit,useKeyboardArrows:l.default.bool,autoPlay:l.default.bool,stopOnHover:l.default.bool,interval:l.default.number,transitionTime:l.default.number,swipeScrollTolerance:l.default.number,swipeable:l.default.bool,dynamicHeight:l.default.bool,emulateTouch:l.default.bool,statusFormatter:l.default.func.isRequired,centerMode:l.default.bool,centerSlidePercentage:l.default.number},v.defaultProps={showIndicators:!0,showArrows:!0,showStatus:!0,showThumbs:!0,infiniteLoop:!1,selectedItem:0,axis:"horizontal",verticalSwipe:"standard",width:"100%",useKeyboardArrows:!1,autoPlay:!1,stopOnHover:!0,interval:3e3,transitionTime:350,swipeScrollTolerance:5,swipeable:!0,dynamicHeight:!1,emulateTouch:!1,onClickItem:m,onClickThumb:m,onChange:m,statusFormatter:function(e,t){return e+" of "+t},centerMode:!1,centerSlidePercentage:80};var y=function(){var e=this;this.setThumbsRef=function(t){e.thumbsRef=t},this.setCarouselWrapperRef=function(t){e.carouselWrapperRef=t},this.setListRef=function(t){e.listRef=t},this.setItemsWrapperRef=function(t){e.itemsWrapperRef=t},this.setItemsRef=function(t,n){e.itemsRef||(e.itemsRef=[]),e.itemsRef[n]=t},this.autoPlay=function(){!e.state.autoPlay||o.Children.count(e.props.children)<=1||(clearTimeout(e.timer),e.timer=setTimeout(function(){e.increment()},e.props.interval))},this.clearAutoPlay=function(){e.state.autoPlay&&clearTimeout(e.timer)},this.resetAutoPlay=function(){e.clearAutoPlay(),e.autoPlay()},this.stopOnHover=function(){e.setState({isMouseEntered:!0}),e.clearAutoPlay()},this.startOnLeave=function(){e.setState({isMouseEntered:!1}),e.autoPlay()},this.navigateWithKeyboard=function(t){var n="horizontal"===e.props.axis,i=n?37:38;(n?39:40)===t.keyCode?e.increment():i===t.keyCode&&e.decrement()},this.updateSizes=function(){if(e.state.initialized){var t="horizontal"===e.props.axis,n=e.itemsRef[0],i=t?n.clientWidth:n.clientHeight;e.setState(function(e,n){return{itemSize:i,wrapperSize:t?i*o.Children.count(n.children):i}}),e.thumbsRef&&e.thumbsRef.updateSizes()}},this.setMountState=function(){e.setState({hasMount:!0}),e.updateSizes()},this.handleClickItem=function(t,n){0!==o.Children.count(e.props.children)&&(e.state.cancelClick?e.setState({cancelClick:!1}):(e.props.onClickItem(t,n),t!==e.state.selectedItem&&e.setState({selectedItem:t})))},this.handleOnChange=function(t,n){o.Children.count(e.props.children)<=1||e.props.onChange(t,n)},this.handleClickThumb=function(t,n){e.props.onClickThumb(t,n),e.selectItem({selectedItem:t})},this.onSwipeStart=function(){e.setState({swiping:!0}),e.clearAutoPlay()},this.onSwipeEnd=function(){e.setState({swiping:!1,cancelClick:!1}),e.autoPlay()},this.onSwipeMove=function(t){var n="horizontal"===e.props.axis,i=o.Children.count(e.props.children),s=e.getPosition(e.state.selectedItem),a=e.props.infiniteLoop?e.getPosition(i-1)-100:e.getPosition(i-1),r=n?t.x:t.y,l=r;0===s&&r>0&&(l=0),s===a&&r<0&&(l=0);var u=s+100/(e.state.itemSize/l);e.props.infiniteLoop&&(0===e.state.selectedItem&&u>-100?u-=100*i:e.state.selectedItem===i-1&&u<100*-i&&(u+=100*i)),u+="%",e.setPosition(u);var c=Math.abs(r)>e.props.swipeScrollTolerance;return c&&!e.state.cancelClick&&e.setState({cancelClick:!0}),c},this.setPosition=function(t,n){var i=r.default.findDOMNode(e.listRef);["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(n){i.style[n]=(0,c.default)(t,e.props.axis)}),n&&i.offsetLeft},this.resetPosition=function(){var t=e.getPosition(e.state.selectedItem)+"%";e.setPosition(t)},this.decrement=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.moveTo(e.state.selectedItem-("number"==typeof t?t:1),n)},this.increment=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.moveTo(e.state.selectedItem+("number"==typeof t?t:1),n)},this.moveTo=function(t,n){var i=o.Children.count(e.props.children)-1,s=e.props.infiniteLoop&&!n&&(t<0||t>i),a=t;t<0&&(t=e.props.infiniteLoop?i:0),t>i&&(t=e.props.infiniteLoop?0:i),s?e.setState({swiping:!0},function(){a<0?e.props.centerMode&&"horizontal"===e.props.axis?e.setPosition("-"+((i+2)*e.props.centerSlidePercentage-(100-e.props.centerSlidePercentage)/2)+"%",!0):e.setPosition("-"+100*(i+2)+"%",!0):a>i&&e.setPosition(0,!0),e.selectItem({selectedItem:t,swiping:!1})}):e.selectItem({selectedItem:t}),e.state.autoPlay&&!1===e.state.isMouseEntered&&e.resetAutoPlay()},this.onClickNext=function(){e.increment(1,!1)},this.onClickPrev=function(){e.decrement(1,!1)},this.onSwipeForward=function(){e.increment(1,!0)},this.onSwipeBackwards=function(){e.decrement(1,!0)},this.changeItem=function(t){if(!t.key||"Enter"===t.key){var n=t.target.value;e.selectItem({selectedItem:n})}},this.selectItem=function(t,n){e.setState(t,n),e.handleOnChange(t.selectedItem,o.Children.toArray(e.props.children)[t.selectedItem])},this.getInitialImage=function(){var t=e.props.selectedItem,n=e.itemsRef&&e.itemsRef[t],i=n&&n.getElementsByTagName("img");return i&&i[t]},this.getVariableImageHeight=function(t){var n=e.itemsRef&&e.itemsRef[t],i=n&&n.getElementsByTagName("img");if(e.state.hasMount&&i.length>0){var s=i[0];if(!s.complete){s.addEventListener("load",function t(){e.forceUpdate(),s.removeEventListener("load",t)})}var o=s.clientHeight;return o>0?o:null}return null}};t.default=v},348:function(e,t,n){var i,s,o;n(31),n(99),n(59),n(42),s=[t,n(0),n(43)],void 0===(o="function"==typeof(i=function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setHasSupportToCaptureOption=l;var i=o(t),s=o(n);function o(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=!1;function l(e){r=e}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){l(!0)}}))}catch(d){}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{capture:!0};return r?e:e.capture}function c(e){if("touches"in e){var t=e.touches[0];return{x:t.pageX,y:t.pageY}}return{x:e.screenX,y:e.screenY}}var p=function(e){function n(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var t=arguments.length,i=Array(t),s=0;s<t;s++)i[s]=arguments[s];var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i)));return o._handleSwipeStart=o._handleSwipeStart.bind(o),o._handleSwipeMove=o._handleSwipeMove.bind(o),o._handleSwipeEnd=o._handleSwipeEnd.bind(o),o._onMouseDown=o._onMouseDown.bind(o),o._onMouseMove=o._onMouseMove.bind(o),o._onMouseUp=o._onMouseUp.bind(o),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t.Component),a(n,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,u({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,u({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(e){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(e))}},{key:"_onMouseMove",value:function(e){this.mouseDown&&this._handleSwipeMove(e)}},{key:"_onMouseUp",value:function(e){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(e)}},{key:"_handleSwipeStart",value:function(e){var t=c(e),n=t.x,i=t.y;this.moveStart={x:n,y:i},this.props.onSwipeStart(e)}},{key:"_handleSwipeMove",value:function(e){if(this.moveStart){var t=c(e),n=t.x,i=t.y,s=n-this.moveStart.x,o=i-this.moveStart.y;this.moving=!0,this.props.onSwipeMove({x:s,y:o},e)&&e.preventDefault(),this.movePosition={deltaX:s,deltaY:o}}}},{key:"_handleSwipeEnd",value:function(e){this.props.onSwipeEnd(e);var t=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-t?this.props.onSwipeLeft(1,e):this.movePosition.deltaX>t&&this.props.onSwipeRight(1,e),this.movePosition.deltaY<-t?this.props.onSwipeUp(1,e):this.movePosition.deltaY>t&&this.props.onSwipeDown(1,e)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"render",value:function(){var e=this;return i.default.createElement(this.props.tagName,{ref:function(t){return e.swiper=t},onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:this.props.className,style:this.props.style},this.props.children)}}]),n}();p.displayName="ReactSwipe",p.propTypes={tagName:s.default.string,className:s.default.string,style:s.default.object,children:s.default.node,allowMouseEvents:s.default.bool,onSwipeUp:s.default.func,onSwipeDown:s.default.func,onSwipeLeft:s.default.func,onSwipeRight:s.default.func,onSwipeStart:s.default.func,onSwipeMove:s.default.func,onSwipeEnd:s.default.func,tolerance:s.default.number.isRequired},p.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},tolerance:0},e.default=p})?i.apply(t,s):i)||(e.exports=o)},349:function(e,t,n){"use strict";n(42),Object.defineProperty(t,"__esModule",{value:!0});t.outerWidth=function(e){var t=e.offsetWidth,n=getComputedStyle(e);return t+=parseInt(n.marginLeft)+parseInt(n.marginRight)}},350:function(e,t,n){"use strict";n(42),Object.defineProperty(t,"__esModule",{value:!0});t.unit=function(e,t,n){if(!/(pt|px|em|rem|vw|vh|%)$/.test(e[t]))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed. It needs to be a size unit like pt, px, em, rem, vw, %")}},378:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNS4zNSA1LjY0Yy0uOS0uNjQtMS4xMi0xLjg4LS40OS0yLjc5LjYzLS45IDEuODgtMS4xMiAyLjc5LS40OS45LjY0IDEuMTIgMS44OC40OSAyLjc5LS42NC45LTEuODggMS4xMi0yLjc5LjQ5ek0xNiAxOUg4LjkzYy0xLjQ4IDAtMi43NC0xLjA4LTIuOTYtMi41NEw0IDdIMmwxLjk5IDkuNzZDNC4zNyAxOS4yIDYuNDcgMjEgOC45NCAyMUgxNnYtMnptLjIzLTRoLTQuODhsLTEuMDMtNC4xYzEuNTguODkgMy4yOCAxLjU0IDUuMTUgMS4yMlY5Ljk5Yy0xLjYzLjMxLTMuNDQtLjI3LTQuNjktMS4yNUw5LjE0IDcuNDdjLS4yMy0uMTgtLjQ5LS4zLS43Ni0uMzgtLjMyLS4wOS0uNjYtLjEyLS45OS0uMDZoLS4wMmMtMS4yMy4yMi0yLjA1IDEuMzktMS44NCAyLjYxbDEuMzUgNS45MkM3LjE2IDE2Ljk4IDguMzkgMTggOS44MyAxOGg2Ljg1bDMuODIgMyAxLjUtMS41LTUuNzctNC41eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz4="}}]);
//# sourceMappingURL=component---src-components-jet-description-js-384400f991f09de2918d.js.map