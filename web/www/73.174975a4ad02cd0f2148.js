(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{wCZP:function(t,e,r){"use strict";r.r(e),r.d(e,"ion_reorder",function(){return s}),r.d(e,"ion_reorder_group",function(){return l});var o=r("9TBO"),n=r("24pd"),i=(r("lSdy"),r("SF24")),s=function(){function t(t){Object(n.m)(this,t)}return t.prototype.onClick=function(t){t.preventDefault(),t.stopImmediatePropagation()},t.prototype.hostData=function(){var t;return{class:(t={},t[Object(n.e)(this)]=!0,t)}},t.prototype.__stencil_render=function(){return Object(n.i)("slot",null,Object(n.i)("ion-icon",{name:"reorder",lazy:!1,class:"reorder-icon"}))},t.prototype.render=function(){return Object(n.i)(n.a,this.hostData(),this.__stencil_render())},Object.defineProperty(t,"style",{get:function(){return":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px;font-size:31px;opacity:.3}"},enumerable:!0,configurable:!0}),t}(),l=function(){function t(t){Object(n.m)(this,t),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0,this.ionItemReorder=Object(n.d)(this,"ionItemReorder",7)}return t.prototype.disabledChanged=function(){this.gesture&&this.gesture.setDisabled(this.disabled)},t.prototype.componentDidLoad=function(){return o.a(this,void 0,void 0,function(){var t,e,n,i=this;return o.c(this,function(o){switch(o.label){case 0:return(t=this.el.closest("ion-content"))?[4,t.componentOnReady()]:[3,3];case 1:return o.sent(),e=this,[4,t.getScrollElement()];case 2:e.scrollEl=o.sent(),o.label=3;case 3:return n=this,[4,r.e(0).then(r.bind(null,"qrm+"))];case 4:return n.gesture=o.sent().createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:function(t){return i.canStart(t)},onStart:function(t){return i.onStart(t)},onMove:function(t){return i.onMove(t)},onEnd:function(){return i.onEnd()}}),this.disabledChanged(),[2]}})})},t.prototype.componentDidUnload=function(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},t.prototype.complete=function(t){return Promise.resolve(this.completeSync(t))},t.prototype.canStart=function(t){if(this.selectedItemEl||0!==this.state)return!1;var e=t.event.target.closest("ion-reorder");if(!e)return!1;var r=c(e,this.el);return!!r&&(t.data=r,!0)},t.prototype.onStart=function(t){t.event.preventDefault();var e=this.selectedItemEl=t.data,r=this.cachedHeights;r.length=0;var o=this.el,n=o.children;if(n&&0!==n.length){for(var s=0,l=0;l<n.length;l++){var c=n[l];r.push(s+=c.offsetHeight),c.$ionIndex=l}var d=o.getBoundingClientRect();if(this.containerTop=d.top,this.containerBottom=d.bottom,this.scrollEl){var p=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=p.top+h,this.scrollElBottom=p.bottom-h}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=a(e),this.selectedItemHeight=e.offsetHeight,this.state=1,e.classList.add(u),Object(i.a)()}},t.prototype.onMove=function(t){var e=this.selectedItemEl;if(e){var r=this.autoscroll(t.currentY),o=this.containerTop-r,n=Math.max(o,Math.min(t.currentY,this.containerBottom-r)),s=r+n-t.startY,l=this.itemIndexForTop(n-o);if(l!==this.lastToIndex){var c=a(e);this.lastToIndex=l,Object(i.b)(),this.reorderMove(c,l)}e.style.transform="translateY("+s+"px)"}},t.prototype.onEnd=function(){var t=this,e=this.selectedItemEl;if(this.state=2,e){var r=this.lastToIndex,o=a(e);r===o?(e.style.transition="transform 200ms ease-in-out",setTimeout(function(){return t.completeSync()},200)):this.ionItemReorder.emit({from:o,to:r,complete:this.completeSync.bind(this)}),Object(i.c)()}else this.state=0},t.prototype.completeSync=function(t){var e=this.selectedItemEl;if(e&&2===this.state){var r=this.el.children,o=r.length,n=this.lastToIndex,i=a(e);t&&!0!==t||this.el.insertBefore(e,i<n?r[n+1]:r[n]),Array.isArray(t)&&(t=p(t,i,n));for(var s=0;s<o;s++)r[s].style.transform="";e.style.transition="",e.classList.remove(u),this.selectedItemEl=void 0,this.state=0}return t},t.prototype.itemIndexForTop=function(t){var e=this.cachedHeights,r=0;for(r=0;r<e.length&&!(e[r]>t);r++);return r},t.prototype.reorderMove=function(t,e){for(var r=this.selectedItemHeight,o=this.el.children,n=0;n<o.length;n++){var i="";n>t&&n<=e?i="translateY("+-r+"px)":n<t&&n>=e&&(i="translateY("+r+"px)"),o[n].style.transform=i}},t.prototype.autoscroll=function(t){if(!this.scrollEl)return 0;var e=0;return t<this.scrollElTop?e=-d:t>this.scrollElBottom&&(e=d),0!==e&&this.scrollEl.scrollBy(0,e),this.scrollEl.scrollTop-this.scrollElInitial},t.prototype.hostData=function(){var t;return{class:(t={},t[Object(n.e)(this)]=!0,t["reorder-enabled"]=!this.disabled,t["reorder-list-active"]=0!==this.state,t)}},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),t.prototype.render=function(){return Object(n.i)(n.a,this.hostData())},Object.defineProperty(t,"style",{get:function(){return".reorder-list-active>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none!important;transition:none!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translateZ(0);transform:translateZ(0)}"},enumerable:!0,configurable:!0}),t}(),a=function(t){return t.$ionIndex},c=function(t,e){for(var r;t;){if((r=t.parentElement)===e)return t;t=r}},h=60,d=10,u="reorder-selected",p=function(t,e,r){var o=t[e];return t.splice(e,1),t.splice(r,0,o),t.slice()}}}]);