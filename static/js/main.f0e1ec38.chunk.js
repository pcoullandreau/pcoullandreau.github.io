(this.webpackJsonpportolio_pierre=this.webpackJsonpportolio_pierre||[]).push([[0],{12:function(e,i,n){},14:function(e,i,n){"use strict";n.r(i);var t=n(1),c=n.n(t),s=n(3),r=n.n(s),a=n(4),l=n(5),d=n(7),o=n(6),j=(n(12),n(0)),h=function(e){Object(d.a)(n,e);var i=Object(o.a)(n);function n(e){var t;return Object(a.a)(this,n),(t=i.call(this,e)).onFullScreenChange=function(e){if(document.fullscreenElement){var i;i=e.srcElement.id<6?"0":e.srcElement.id>11?"2":"1";var n=document.getElementById("video-grid-"+i).getBoundingClientRect().top;t.setState({scrollPosition:n})}else window.scrollTo(0,t.state.scrollPosition)},t.renderName=function(){return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)("h1",{className:["name","center"].join(" "),children:" Pierre Coullandreau "}),t.renderSubtitle(),Object(j.jsx)("div",{id:"address",children:Object(j.jsx)("span",{className:"address-line",children:"pierre.cldr@gmail.com"})})]})},t.renderThankYou=function(){return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)("h1",{className:["name","center"].join(" "),children:" Thank you "}),Object(j.jsx)("h2",{className:"subtitle",children:" Pierre Coullandreau "}),Object(j.jsx)("div",{id:"address",children:Object(j.jsx)("span",{className:"address-line",children:"pierre.cldr@gmail.com"})})]})},t.renderSubtitle=function(){return Object(j.jsx)("h2",{className:"subtitle",children:" Personal artistic book "})},t.renderTitle=function(e){var i=t.config.visuals[e].title;return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsxs)("h1",{className:["title","center"].join(" "),children:[" ",i," "]}),t.renderSubtitle()]})},t.renderSectionTitle=function(e){return Object(j.jsx)(c.a.Fragment,{children:Object(j.jsxs)("h3",{className:"section-title",children:[" ",e," "]})})},t.renderGraphicDesigner=function(){var e=t.config.videos,i=t.config.visuals.graphic_designer;return Object(j.jsxs)(c.a.Fragment,{children:[c.a.Children.toArray(Object.keys(i.pages).map((function(e,n){return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"block",children:[t.renderSectionTitle(i.pages[e].title),Object(j.jsx)("span",{onClick:function(n){return t.handleLoad(n,i.pages[e].path)},children:Object(j.jsx)("img",{className:"image",title:"".concat(i.pages[e].alt,".png"),src:i.pages[e].path,loading:"lazy",alt:i.pages[e].alt})})]})}),Object(j.jsx)("div",{className:"ui section divider"})]})}))),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{id:"video-grid-0",className:"block",children:[t.renderVideoGrid(0,"VIDEOS & ANIMATIONS"),Object(j.jsxs)("div",{children:["More videos in ",Object(j.jsx)("a",{href:e.playlist,children:"this playlist"}),"!"]})]})}),Object(j.jsx)("div",{className:"ui section divider"}),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{id:"video-grid-1",className:"block",children:[t.renderVideoGrid(1,"VIDEOS & ANIMATIONS (CTD)"),Object(j.jsxs)("div",{children:["More videos in ",Object(j.jsx)("a",{href:e.playlist,children:"this playlist"}),"!"]})]})}),Object(j.jsx)("div",{className:"ui section divider"}),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{id:"video-grid-2",className:"block",children:[t.renderVideoGrid(2,"VIDEOS & ANIMATIONS (CTD)"),Object(j.jsxs)("div",{children:["More videos in ",Object(j.jsx)("a",{href:e.playlist,children:"this playlist"}),"!"]})]})}),Object(j.jsx)("div",{className:"ui section divider"})]})},t.renderVideoGrid=function(e,i){var n=6*e,s=t.config.videos,r=Object(j.jsx)(c.a.Fragment,{children:t.renderVideoPlayer(n+1)}),a=Object(j.jsx)(c.a.Fragment,{children:t.renderVideoPlayer(n+2)});return 0===e&&(r=Object(j.jsx)("img",{className:"gif",src:"".concat("","/images/01_Graphic Designer/07.gif"),alt:"CF widget"}),a=Object(j.jsx)("img",{className:"gif",src:"".concat("","/images/01_Graphic Designer/08.gif"),alt:"How to go from there"})),Object(j.jsxs)(c.a.Fragment,{children:[t.renderSectionTitle(i),Object(j.jsxs)("div",{className:"ui equal width grid",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"column",children:Object(j.jsxs)("div",{className:"ui segment",children:[t.renderVideoPlayer(n+0),Object(j.jsx)("p",{className:"video-title",children:s[n+0].title})]})}),Object(j.jsx)("div",{className:"column",children:Object(j.jsxs)("div",{className:"ui center aligned segment",children:[r,Object(j.jsx)("p",{className:"video-title",children:s[n+1].title})]})}),Object(j.jsx)("div",{className:"column",children:Object(j.jsxs)("div",{className:"ui center aligned segment",children:[a,Object(j.jsx)("p",{className:"video-title",children:s[n+2].title})]})})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"column",children:Object(j.jsxs)("div",{className:"ui segment",children:[t.renderVideoPlayer(n+3),Object(j.jsx)("p",{className:"video-title",children:s[n+3].title})]})}),Object(j.jsx)("div",{className:"column",children:Object(j.jsxs)("div",{className:"ui segment",children:[t.renderVideoPlayer(n+4),Object(j.jsx)("p",{className:"video-title",children:s[n+4].title})]})}),Object(j.jsx)("div",{className:"column",children:Object(j.jsxs)("div",{className:"ui segment",children:[t.renderVideoPlayer(n+5),Object(j.jsx)("p",{className:"video-title",children:s[n+5].title})]})})]})]})]})},t.renderVideoPlayer=function(e){var i=t.config.videos[e].link;return Object(j.jsx)(c.a.Fragment,{children:Object(j.jsx)("iframe",{className:"video-player",title:"YouTube video player",id:e,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;",allowFullScreen:!0,src:i})})},t.renderSection=function(e){if("graphic_designer"===e)return Object(j.jsx)(c.a.Fragment,{children:t.renderGraphicDesigner()});var i=t.config.visuals[e];return Object(j.jsx)(c.a.Fragment,{children:c.a.Children.toArray(Object.keys(i.pages).map((function(e,n){return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"block",children:[t.renderSectionTitle(i.pages[e].title),Object(j.jsx)("span",{onClick:function(n){return t.handleLoad(n,i.pages[e].path)},children:Object(j.jsx)("img",{className:"image",title:"".concat(i.pages[e].alt,".png"),src:i.pages[e].path,loading:"lazy",alt:i.pages[e].alt})})]})}),Object(j.jsx)("div",{className:"ui section divider"})]})})))})},t.state={isReady:!1,scrollPosition:0},t.config=void 0,t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;void 0===this.config&&this.fetchConfig().then((function(i){e.config=i,e.setState({isReady:!0})})),window.addEventListener("fullscreenchange",this.onFullScreenChange),window.addEventListener("mozfullscreenchange",this.onFullScreenChange),window.addEventListener("webkitfullscreenchange",this.onFullScreenChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("fullscreenchange",this.onFullScreenChange),window.removeEventListener("mozfullscreenchange",this.onFullScreenChange),window.removeEventListener("webkitfullscreenchange",this.onFullScreenChange)}},{key:"fetchConfig",value:function(){return new Promise((function(e){fetch("data.json").then((function(e){return e.json()})).then((function(i){e(i)}))}))}},{key:"handleLoad",value:function(e,i){var n=e.target.attributes.title.value,t=window.open(i,"_blank");t.addEventListener("load",(function(){t.document.title=n})),e.returnValue=!1}},{key:"render",value:function(){var e=this;return void 0!==this.config?Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)("div",{id:"pdf-button",children:Object(j.jsx)("a",{href:"https://www.acoullandreau.com/portfolio_pierre/portfolio.pdf",target:"_blank",rel:"noreferrer",download:"Pierre Coullandreau - Portfolio.pdf",children:Object(j.jsx)("img",{id:"pdf-icon",title:"Download PDF",src:"".concat("","/images/pdf.svg"),alt:"Download PDF"})})}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"block",children:this.renderName()})}),Object(j.jsx)("div",{className:"ui section divider"}),c.a.Children.toArray(Object.keys(this.config.sections).map((function(i,n){var t=e.config.sections[i];return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"block",children:e.renderTitle(t)})}),Object(j.jsx)("div",{className:"ui section divider"}),e.renderSection(t)]})}))),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"block",children:this.renderThankYou()})})]}):null}}]),n}(c.a.Component);r.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f0e1ec38.chunk.js.map