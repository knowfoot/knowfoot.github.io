webpackJsonp([1],{DK6z:function(t,e,i){"use strict";(function(t){var s=i("yARq"),r=i("S0an"),c=i.n(r);e.a={name:"Index",data:function(){return{backgroundColor:"#000000",bgColor:"#000000",lpCursor:"auto",gardenCursor:"auto",timer:"",ColorNum:0,x:0,y:0,screenWidth:0,screenHeight:0,ClockShow:!1,MusicUrl:"https://cdn.1htr.cn/media/audio/birds.mp3",MusicPos:0,MusicClickType:0,MusicFlag:0}},components:{Clock0:s.a,musicIndex:c.a},beforeDestroy:function(){clearTimeout(this.timer)},mounted:function(){this.delayedTask(1),this.getScreenSize(),this.MusicPlayCurrent(),document.addEventListener("click",this.MusicPlayCurrent)},methods:{MusicPlayCurrent:function(){var t=new Date,e=t.getHours(),i=t.getMinutes();this.MusicPos=Math.ceil(4*e+i/15),this.MusicSelect(t),document.removeEventListener("click",this.MusicPlayCurrent)},isMobile:function(){var t=navigator.userAgent||navigator.vendor||window.opera;return/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile/.test(t)},getScreenSize:function(){this.screenWidth=window.innerWidth,this.screenHeight=window.innerHeight},onMouseDown:function(t){var e=this;alert(0);t.clientX,t.clientY;var i=function(t){e.x+=t.clientX-i,e.y+=t.clientY-s;var i=t.clientX,s=t.clientY};document.addEventListener("mousemove",i),document.addEventListener("mouseup",function t(e){document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",t)})},setBgColor:function(){var e=this;setTimeout(function(){e.bgColor="#ffffff",e.lpCursor="grab",e.gardenCursor="grabbing",t("#lp").on("click",function(t){"PlayPre"!=t.target.id&&e.clickHref("/link.html",0)}),t("#garden").on("click",function(t){"PlayNext"!=t.target.id&&e.clickHref("/garden.html",1)})},100)},setBackgroundColor:function(t){this.ColorNum=this.ColorNum+t;var e=this.dec2hex(this.ColorNum);this.backgroundColor="#"+e+e+e,this.bgColor=this.backgroundColor,document.body.style.backgroundColor=this.backgroundColor,this.ColorNum>=255&&(clearTimeout(this.timer),this.delayedTask(-1)),this.ColorNum<=0&&(clearTimeout(this.timer),this.setBgColor())},delayedTask:function(t){var e=this;setTimeout(function(){e.startTimer(t)},500)},startTimer:function(t){var e=this,i=t;this.timer=setInterval(function(){e.setBackgroundColor(i)},5)},dec2hex:function(t){for(var e="";t>0;){e="0123456789ABCDEF"[t%16]+e,t=Math.floor(t/16)}return 1==e.length&&(e="0"+e),e},clickHref:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/lp";arguments.length>1&&void 0!==arguments[1]&&arguments[1];window.open(t)},MusicPlay:function(t){this.MusicClickType=t,0==this.MusicClickType?(0==this.MusicPos&&(this.MusicPos=Math.ceil(100*Math.random()+1)),this.MusicPos=this.MusicPos-1):this.MusicPos=this.MusicPos+1;var e=new Date;this.MusicSelect(e)},RandomMy:function(t){var e=[],i=Math.ceil(this.MusicPos%t.length);return e.push(t[i]),i+1==t.length?e.push(t[0]):e.push(t[i+1]),e},MusicSelect:function(t){var e=t.getHours(),i=[],s=document.getElementById("MusicPlayer");try{s.pause()}catch(t){}e>=8&&e<18?(i=this.RandomMy(c.a.Day),this.MusicUrl=i[this.MusicClickType].split(",")[2]):e>=18&&e<=23?(i=this.RandomMy(c.a.Night),this.MusicUrl=i[this.MusicClickType].split(",")[2]):(i=this.RandomMy(c.a.Sleep),this.MusicUrl=i[this.MusicClickType].split(",")[2]);try{s.play()}catch(t){}},fatherMethod:function(t){var e=0,i=t.getHours(),s=t.getMinutes(),r=t.getSeconds();if(this.MusicFlag=this.MusicFlag<=0?0:this.MusicFlag-1,s%15==0&&this.MusicFlag<=0&&(this.MusicFlag=65,this.MusicPos=Math.ceil(4*i+s/15),this.MusicSelect(t)),this.isMobile()){this.x=this.screenWidth/2-220;var c=this.screenHeight/2-180;i>=8&&i<18?(e=(3600*(i-8)+60*s+r)/36e3,this.y=e*c-40):i>=18&&i<=23?(e=(3600*(i-18)+60*s+r)/21600,this.y=c+e*c-40):this.y=-440}else{this.y=this.screenHeight/2-220;var o=this.screenWidth/2-160;i>=8&&i<18?(e=(3600*(i-8)+60*s+r)/36e3,this.x=e*o-60):i>=18&&i<=23?(e=(3600*(i-18)+60*s+r)/21600,e=(3600*(i-18)+60*s+r)/21600,this.x=o+e*o-60):this.x=-440}}}}}).call(e,i("7t+N"))},Dv6N:function(t,e){},"N+pb":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),r=(i("qb6w"),i("Bb4J"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]});var c=i("VU/8")({name:"App"},r,!1,function(t){i("N+pb")},null,null).exports,o=i("/ocq"),n=i("DK6z"),u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"bgMusic",staticClass:"container-fluid min-height-100",attrs:{id:"bgMusic"}},[i("div",{staticClass:"col-md-12 vh-100"},[i("div",{staticClass:"row vh-100"},[i("div",{ref:"lp",staticClass:"col-md-6 vh-100",style:{backgroundColor:t.bgColor,cursor:t.lpCursor},attrs:{id:"lp"}},[i("Clock0",{style:{transform:"translate("+t.x+"px,"+t.y+"px)"}}),t._v(" "),i("div",{staticStyle:{cursor:"pointer",position:"relative",right:"0px","margin-right":"0px",width:"200px",height:"200px",top:"0px","margin-left":"auto",left:"auto"},attrs:{id:"PlayPre"},on:{click:function(e){return t.MusicPlay(0)}}})],1),t._v(" "),i("div",{ref:"garden",staticClass:"col-md-6 vh-100",style:{cursor:t.gardenCursor},attrs:{id:"garden"}},[i("div",{staticStyle:{cursor:"pointer",position:"relative",left:"0px","margin-left":"0px",width:"200px",height:"200px",top:"0px"},attrs:{id:"PlayNext"},on:{click:function(e){return t.MusicPlay(1)}}}),t._v(" "),i("audio",{attrs:{id:"MusicPlayer",height:"200",width:"200",preload:"auto",controls:"",hidden:"true",autostart:"true",autoplay:"true",loop:"true",volume:"0",src:t.MusicUrl}},[i("source",{attrs:{src:t.MusicUrl,type:"audio/mp3"}}),t._v(" "),i("embed",{attrs:{height:"50",width:"100",src:""}})])])])])])},staticRenderFns:[]};var h=function(t){i("lILR")},a=i("VU/8")(n.a,u,!1,h,null,null).exports;s.a.use(o.a);var l=new o.a({mode:"history",routes:[{path:"/",name:"IndexComponent",component:a}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:l,components:{App:c},template:"<App/>",created:function(){}})},S0an:function(t,e){t.exports={Sleep:["雨声,,https://cdn.1htr.cn/media/audio/rain.mp3","催眠曲五分钟必睡,,https://mp3.tx.hk.102.file09.com/music_128/3/店铺音乐盒 - 催眠曲五分钟必睡 (钢琴曲).mp3","放松睡的香的音乐,,https://mp3.tx.hk.102.file09.com/music_128/3/轻松音乐 - 放松睡的香的音乐 (经典钢琴曲).mp3"],Day:["Fallin Flower,,https://mp3.tx.hk.102.file09.com/music_128/3/柳轻颂 - Fallin Flower (飘落的花瓣)(钢琴版).mp3","天空之境,,https://mp3.tx.hk.102.file09.com/music_128/3/顾可勋 - 天空之境 (钢琴曲经典老歌).mp3","天秤座,,https://mp3.tx.hk.102.file09.com/music_128/3/潘佳杰 - 天秤座（星座钢琴曲）.mp3","天空之城,,https://mp3.tx.hk.102.file09.com/music_128/3/郭燕 - 天空之城 (钢琴版).mp3","海裳,,https://mp3.tx.hk.102.file09.com/music_128/3/店铺音乐盒 - 海裳 (钢琴曲经典轻音乐).mp3","所有的美好,,https://mp3.tx.hk.102.file09.com/music_128/3/潘佳杰 - 所有的美好 (钢琴曲).mp3","一花一世界,,https://mp3.tx.hk.102.file09.com/music_128/3/潘佳杰 - 一花一世界 (钢琴曲).mp3","筑梦师,,https://mp3.tx.hk.102.file09.com/music_128/3/潘佳杰 - 筑梦师 (钢琴曲).mp3","樱花草,,https://mp3.tx.hk.102.file09.com/music_128/3/Sweety - 樱花草 (钢琴曲版纯音乐).mp3","时间煮雨,,https://mp3.tx.hk.102.file09.com/music_128/3/抖音Music - 时间煮雨 (钢琴版).mp3","我们的时光,,https://mp3.tx.hk.102.file09.com/music_128/3/离羽墨 - 我们的时光(钢琴曲).mp3","遇见,,https://mp3.tx.hk.102.file09.com/music_128/3/刘思伟 - 遇见 (钢琴版).mp3","Illusionary Daytime,,https://mp3.tx.hk.102.file09.com/music_128/3/MayPiano - Illusionary Daytime (钢琴版).mp3","夜空的寂静,,https://mp3.tx.hk.102.file09.com/music_128/3/店铺音乐盒 - 夜空的寂静 (钢琴曲经典老歌).mp3","彩云追月,,https://mp3.tx.hk.102.file09.com/music_128/3/孟敬穆 - 彩云追月 (钢琴曲).mp3","婴儿哄睡入眠曲,,https://mp3.tx.hk.102.file09.com/music_128/3/轻音楼阁 - 婴儿哄睡入眠曲 (钢琴曲经典老歌).mp3","春日目击者,,https://mp3.tx.hk.102.file09.com/music_128/3/潘佳杰 - 春日目击者 (钢琴曲).mp3","下雨天,,https://mp3.tx.hk.102.file09.com/music_128/3/南拳妈妈 - 下雨天 (钢琴版纯音乐).mp3","秋日私语,,https://mp3.tx.hk.102.file09.com/music_128/3/龙儿 - 秋日私语 (龙儿原创钢琴版).mp3","巨蟹座 (钢琴版),,https://mp3.tx.hk.102.file09.com/music_128/3/潘佳杰 - 巨蟹座（星座钢琴曲） (钢琴版).mp3","红豆,,https://mp3.tx.hk.102.file09.com/music_128/3/锦鲤少年 - 红豆 (钢琴版).mp3","安静的雨,,https://mp3.tx.hk.102.file09.com/music_128/3/芮成杰 - 安静的雨 (钢琴曲).mp3","花海,,https://mp3.tx.hk.102.file09.com/music_128/3/耀温顺 - 花海 (纯音乐钢琴版).mp3","夜的钢琴曲,,https://mp3.tx.hk.102.file09.com/music_128/3/石进 - 夜的钢琴曲.mp3","梦的翅膀,,https://mp3.tx.hk.102.file09.com/music_128/3/赵海洋 - 梦的翅膀 (钢琴曲).mp3","寂色,,https://mp3.tx.hk.102.file09.com/music_128/3/淑清 - 寂色 (钢琴版).mp3","晴天,,https://mp3.tx.hk.102.file09.com/music_128/3/文武贝 - 晴天 (钢琴版).mp3","那天的遇见,,https://mp3.tx.hk.102.file09.com/music_128/3/赵海洋 - 那天的遇见 (钢琴曲).mp3","秋的思念,,https://mp3.tx.hk.102.file09.com/music_128/3/赵海洋 - 秋的思念 (钢琴曲).mp3","瞬间的永恒,,https://mp3.tx.hk.102.file09.com/music_128/3/赵海洋 - 瞬间的永恒 (钢琴曲).mp3","在一起的时光,,https://mp3.tx.hk.102.file09.com/music_128/3/赵海洋 - 在一起的时光 (钢琴曲).mp3","闻说,,https://mp3.tx.hk.102.file09.com/music_128/3/昼夜 - 闻说 (钢琴版).mp3"],Night:["雷雨,,https://cdn.1htr.cn/media/audio/thunder.mp3","燃烧,,https://cdn.1htr.cn/media/audio/fire.mp3","波浪,,https://cdn.1htr.cn/media/audio/waves.mp3","虫鸣,,https://cdn.1htr.cn/media/audio/crickets.mp3","风声,,https://cdn.1htr.cn/media/audio/wind.mp3"],OffBed:["鸟叫,,https://cdn.1htr.cn/media/audio/birds.mp3"]}},Suis:function(t,e){},lILR:function(t,e){},qb6w:function(t,e){},yARq:function(t,e,i){"use strict";var s=i("mvHQ"),r=i.n(s),c=i("woOf"),o=i.n(c),n={name:"Clock0",data:function(){return{prefixCss:"jhc-",cssClock:{position:"absolute",width:"100%",height:"100%",borderRadius:"50%"},cssDotWrap:{width:"100%",height:"100%"},cssDot:{position:"absolute",backgroundColor:"#509fef"},cssNum:{position:"absolute"},longDot:{width:"3px",height:"10px"},shourtDot:{width:"1px",height:"5px"},timer:null,updateTimer:null,style:{bottom:"1px"},scale:.8,currTime:new Date}},created:function(){var t=this;this.currTime=new Date,clearInterval(this.updateTimer),this.updateTimer=setInterval(function(){t.currTime=new Date,t.$parent.fatherMethod(t.currTime)},1e3)},mounted:function(){this.setSize()},beforeDestroy:function(){clearInterval(this.updateTimer)},methods:{setSize:function(){var t=this.getWidth(),e=this.getHeight(),i=this.scale,s=t;t>e&&(s=e);var r=(t-(s*=i))/2,c=(e-s)/2;this.setStates("cssClock",{height:s+"px",width:s+"px",top:c+"px",left:r+"px"}),this.setStates("cssDotWrap",{transform:"translate("+.52*s+"px,"+.16*s+"px)"});var o=.75*s/2-1,n=Math.floor(o/25)||2,u=Math.floor(o/8)||6,h=Math.floor(o/50)||1,a=Math.floor(o/16)||3;this.shourtDot={width:h+"px",height:a+"px"},this.longDot={width:n+"px",height:u+"px"},this.setStates("cssDot",{transformOrigin:"0px "+o+"px"}),this.setStates("cssNum",{transformOrigin:"0px "+o+"px"})},getWidth:function(){return this.getRef("area").offsetWidth||200},getHeight:function(){return this.getRef("area").offsetHeight||200},getRef:function(t){return this.$refs&&this.$refs[t]||{}},setStates:function(t,e){var i=this[t];this[t]=o()({},i,JSON.parse(r()(e)))}},computed:{sec:function(){return 6*this.currTime.getSeconds()},min:function(){return 6*this.currTime.getMinutes()+this.currTime.getSeconds()/60*6},hour:function(){return 30*this.currTime.getHours()+this.currTime.getMinutes()/60*30},timeDisplayArea:function(){return(this.currTime.getHours()>9?this.currTime.getHours():"0"+this.currTime.getHours())+":"+(this.currTime.getMinutes()>9?this.currTime.getMinutes():"0"+this.currTime.getMinutes())+":"+(this.currTime.getSeconds()>9?this.currTime.getSeconds():"0"+this.currTime.getSeconds())},hourNeedle:function(){return this.prefixCss+"hour-needle"},minNeedle:function(){return this.prefixCss+"min-needle"},secNeedle:function(){return this.prefixCss+"sec-needle"},clockArea:function(){return this.prefixCss+"clock-area"},clockBack:function(){return this.prefixCss+"clock-back"},clockTitle:function(){return this.prefixCss+"clock-title"},clockDot:function(){return this.prefixCss+"clock-dot"}}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"area",class:t.clockArea},[i("div",{style:t.cssClock},[i("div",{style:t.cssDotWrap},t._l(60,function(e,s){return i("div",{style:Object.assign({},{transform:"rotateZ("+6*s+"deg)",height:s%5==0?t.longDot.height:t.shourtDot.height,width:s%5==0?t.longDot.width:t.shourtDot.width},t.cssDot)})}),0),t._v(" "),i("div",{class:t.hourNeedle,style:Object.assign({},{transform:"rotateZ("+t.hour+"deg)"})}),t._v(" "),i("div",{class:t.minNeedle,style:Object.assign({},{transform:"rotateZ("+t.min+"deg)"})}),t._v(" "),i("div",{class:t.secNeedle,style:Object.assign({},{transform:"rotateZ("+t.sec+"deg)"})}),t._v(" "),i("div",{class:t.clockDot}),t._v(" "),i("div",{class:t.clockBack})]),t._v(" "),i("div",{class:t.clockTitle,style:t.style},[t._v("当前时间 "+t._s(t.timeDisplayArea))])])},staticRenderFns:[]};var h=i("VU/8")(n,u,!1,function(t){i("Dv6N"),i("Suis")},"data-v-22865c69",null);e.a=h.exports}},["NHnr"]);
//# sourceMappingURL=app.42aa2215cd7369898b27.js.map