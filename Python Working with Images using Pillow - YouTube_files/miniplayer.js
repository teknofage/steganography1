(function(g){var window=this;var P5=function(a,b){var c="ytp-miniplayer-button-bottom-right";var d=g.X?{D:"div",Y:["ytp-icon","ytp-icon-expand-watch-page"]}:{D:"svg",O:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},K:[{D:"g",O:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",O:{transform:"translate(-1.000000, -3.000000)"},K:[{D:"polygon",O:{points:"0 0 24 0 24 24 0 24"}},{D:"path",O:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]};var e="Open video page";a.N().fa("kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d=g.X?{D:"div",Y:["ytp-icon","ytp-icon-expand-miniplayer"]}:{D:"svg",O:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},K:[{D:"g",O:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",O:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},K:[{D:"path",O:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expand");g.Q.call(this,{D:"button",Y:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],O:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},K:[d]});var f=this;this.U=a;this.ia("click",this.onClick,this);this.ka("title",g.VL(a,e,"i"));g.ne(this,function(){return g.pM(b.Xa(),f.element)})},Q5=function(a){g.Q.call(this,{D:"div",
I:"ytp-miniplayer-ui"});this.player=a;this.H=!1;this.G=this.w=this.u=void 0;this.L(a,"minimized",this.sI);this.L(a,"onStateChange",this.TO)},R5=function(a){g.KK.call(this,a);
this.o=new Q5(this.player);this.o.hide();g.xK(this.player,this.o.element,4);a.app.H.o&&(this.load(),g.J(g.cK(a),"ytp-player-minimized",!0))};
g.r(P5,g.Q);P5.prototype.onClick=function(){this.U.ma("onExpandMiniplayer")};g.r(Q5,g.Q);g.h=Q5.prototype;
g.h.show=function(){this.u=new g.bn(this.rI,null,this);this.u.start();if(!this.H){this.C=new g.QP(this.player,this);g.B(this,this.C);g.xK(this.player,this.C.element,4);this.C.B=.6;this.R=new g.RO(this.player);g.B(this,this.R);this.A=new g.Q({D:"div",I:"ytp-miniplayer-scrim"});g.B(this,this.A);this.A.ba(this.element);this.L(this.A.element,"click",this.ZA);var a=new g.Q({D:"button",Y:["ytp-miniplayer-close-button","ytp-button"],O:{"aria-label":"Close"},K:[g.oL()]});g.B(this,a);a.ba(this.A.element);
this.L(a.element,"click",this.mz);a=new P5(this.player,this);g.B(this,a);a.ba(this.A.element);this.B=new g.Q({D:"div",I:"ytp-miniplayer-controls"});g.B(this,this.B);this.B.ba(this.A.element);this.L(this.B.element,"click",this.ZA);var b=new g.Q({D:"div",I:"ytp-miniplayer-button-container"});g.B(this,b);b.ba(this.B.element);a=new g.Q({D:"div",I:"ytp-miniplayer-play-button-container"});g.B(this,a);a.ba(this.B.element);var c=new g.Q({D:"div",I:"ytp-miniplayer-button-container"});g.B(this,c);c.ba(this.B.element);
this.M=new g.oN(this.player,this,!1);g.B(this,this.M);this.M.ba(b.element);b=new g.kN(this.player,this);g.B(this,b);b.ba(a.element);this.J=new g.oN(this.player,this,!0);g.B(this,this.J);this.J.ba(c.element);this.G=new g.oO(this.player,this);g.B(this,this.G);this.G.ba(this.A.element);this.w=new g.sM(this.player,this);g.B(this,this.w);g.xK(this.player,this.w.element,4);this.F=new g.Q({D:"div",I:"ytp-miniplayer-buttons"});g.B(this,this.F);g.xK(this.player,this.F.element,4);a=new g.Q({D:"button",Y:["ytp-miniplayer-close-button",
"ytp-button"],O:{"aria-label":"Close"},K:[g.oL()]});g.B(this,a);a.ba(this.F.element);this.L(a.element,"click",this.mz);a=new g.Q({D:"button",Y:["ytp-miniplayer-replay-button","ytp-button"],O:{"aria-label":"Close"},K:[g.DL()]});g.B(this,a);a.ba(this.F.element);this.L(a.element,"click",this.LM);this.L(this.player,"presentingplayerstatechange",this.tI);this.L(this.player,"appresize",this.jt);this.L(this.player,"fullscreentoggled",this.jt);this.jt();this.H=!0}0!=this.player.getPlayerState()&&g.Q.prototype.show.call(this);
this.w.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.u&&(this.u.dispose(),this.u=void 0);g.Q.prototype.hide.call(this);this.player.app.H.o||(this.H&&this.w.hide(),this.player.loadModule("annotations_module"))};
g.h.X=function(){this.u&&(this.u.dispose(),this.u=void 0);g.Q.prototype.X.call(this)};
g.h.mz=function(){this.player.stopVideo();this.player.ma("onCloseMiniplayer")};
g.h.LM=function(){this.player.playVideo()};
g.h.ZA=function(a){if(a.target==this.A.element||a.target==this.B.element)g.R(this.player.N().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.jC(g.eK(this.player))?this.player.pauseVideo():this.player.playVideo():this.player.ma("onExpandMiniplayer")};
g.h.sI=function(){g.J(g.cK(this.player),"ytp-player-minimized",this.player.app.H.o)};
g.h.rI=function(){g.wM(this.w);this.G.w();this.u&&this.u.start()};
g.h.tI=function(a){g.V(a.state,32)&&this.C.hide()};
g.h.jt=function(){g.NM(this.w,0,g.bK(this.player).getPlayerSize().width,!1);this.w.Ou()};
g.h.TO=function(a){this.player.app.H.o&&(0==a?this.hide():this.show())};
g.h.Xa=function(){return this.C};
g.h.wc=function(){return!1};
g.h.Ud=function(){return!1};
g.h.Ij=function(){return!1};
g.h.Bu=function(){};
g.h.ii=function(){};
g.h.Tk=function(){};
g.h.Vl=function(){return null};
g.h.it=function(){return new g.$g(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.dk=function(a,b,c,d,e){var f=0,k=d=0,l=g.vh(a);if(b){c=g.pn(b,"ytp-prev-button")||g.pn(b,"ytp-next-button");var m=g.pn(b,"ytp-play-button"),n=g.pn(b,"ytp-miniplayer-expand-watch-page-button");c?f=k=12:m?(b=g.sh(b,this.element),k=b.x,f=b.y-12):n&&(k=g.pn(b,"ytp-miniplayer-button-top-left"),f=g.sh(b,this.element),b=g.vh(b),k?(k=8,f=f.y+40):(k=f.x-l.width+b.width,f=f.y-20))}else k=c-l.width/2,d=25+(e||0);b=g.bK(this.player).getPlayerSize().width;e=f+(e||0);l=g.ud(k,0,b-l.width);e?(a.style.top=e+
"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.h.showControls=function(){};
g.h.kt=function(){};
g.h.cg=function(){};g.r(R5,g.KK);R5.prototype.create=function(){};
R5.prototype.Pf=function(){return!1};
R5.prototype.load=function(){this.player.hideControls();this.o.show()};
R5.prototype.unload=function(){this.player.showControls();this.o.hide()};g.ZK.miniplayer=R5;})(_yt_player);
