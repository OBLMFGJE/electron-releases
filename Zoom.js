define("Purch/UI/Zoom",["jquery"],function(a){"use strict";var b=function(b){this.options=a.extend({targets:":not(a) > .imgContent :not([href]).iZoom img[big-src]",containerClass:"img-zoom-container",innerClass:"img-zoom-sub",imgClass:"img-zoom",bigAttr:"big-src",init:!0,closeOnScroll:!0,closeControl:!1,fullSize:!1,startOnInit:!1},b||{}),this.win=window,!0===this.options.init&&this.init()};return b.prototype={init:function(){var b=this,c=a("body");this.checkZooms(),!0===b.options.startOnInit&&a(this.options.targets).each(function(){b.addElements(a(this))}),c.on("mouseenter",this.options.targets,function(){b.addElements(a(this))}),c.on("click","."+b.options.innerClass,function(){!0===a(this).prev("img").data("options-closecontrol")||b.options.closeControl||a("."+b.options.containerClass).blur()}),b.options.closeOnScroll&&a(this.win).on("scroll",function(){b.blur()}),a(this.win).on("keyup",function(a){27===a.keyCode&&b.blur()})},checkZooms:function(){a(this.options.targets).closest(".iZoom").addClass("img-zoom-in")},addElements:function(b){var c=this;if(b.hasClass("z-loaded"))return b.off("mouseenter"),!1;b.addClass("z-loaded");var d=this.getRandom(),e=3+b.index(this.options.targets),f=!0===b.data("options-closecontrol")||c.options.closeControl,g=!0===b.data("options-fullsize")||c.options.fullSize,h=a("<div />",{id:d,tabindex:e,class:this.options.containerClass+(!0===g?" img-zoom-fullsize":"")}),i=a("<img>",{src:b.attr(this.options.bigAttr),class:this.options.imgClass}),j=a("<div />",{id:d+"-"+e,class:this.options.innerClass});if(b.wrap(h).after(j.append(i)),f&&c.addCloseElement(b),g||f){var k=a("<div />",{class:this.options.imgClass+"-wrap"});b.parent("."+c.options.containerClass).find("."+c.options.imgClass).wrap(k)}return!0},addCloseElement:function(b){var c=this,d=b.parent("."+c.options.containerClass),e=a("<span />",{class:"img-zoom-close-ctrl"});d.find("."+c.options.innerClass).prepend(e),d.addClass("img-zoom-with-close"),e.on("click",function(){c.blur()})},blur:function(){a("."+this.options.containerClass).blur()},getRandom:function(){return Math.round((new Date).getTime()+100*Math.random())}},b.initModule=function(a){return new b(a||{})},b});