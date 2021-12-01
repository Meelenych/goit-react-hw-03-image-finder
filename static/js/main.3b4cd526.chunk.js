(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1qKZa",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1NjUM"}},14:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1rHGa",CloseBtn:"ImageGallery_CloseBtn__2GHn5"}},15:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2JGYM",Modal:"Modal_Modal__1yCj7"}},18:function(e,t,a){e.exports={Button:"Button_Button__1cz4t"}},20:function(e,t,a){e.exports={Loader:"Loader_Loader__25drP"}},21:function(e,t,a){e.exports={App:"App_App__fcuIf"}},26:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),s=(a(26),a(3)),l=a(4),i=a(6),u=a(5),h=a(9),m=a.n(h),g=a(7),b=(a(16),a(1)),p=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={changeValue:""},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.changeValue.trim())return g.b.warn("Please specify your request!"),void e.clearForm();e.props.onFormSubmit(e.state.changeValue.toLowerCase().trim()),e.clearForm()},e.handleChange=function(t){e.setState({changeValue:t.currentTarget.value})},e.clearForm=function(){e.setState({changeValue:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("header",{className:m.a.Searchbar,children:Object(b.jsxs)("form",{className:m.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(b.jsx)("button",{type:"submit",className:m.a.SearchFormButton,children:Object(b.jsx)("span",{className:m.a.SearchFormButtonLabel,children:"Search"})}),Object(b.jsx)("input",{className:m.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange,value:this.state.changeValue})]})}),Object(b.jsx)(g.a,{})]})}}]),a}(n.Component),d=p,j=a(12),f=a.n(j),O=a(10),y=a(17),v=a(13),S=a.n(v);var _=function(e){var t=e.webformatURL,a=e.largeImageURL,n=e.tags,r=e.onClickProps;return Object(b.jsx)("li",{className:S.a.ImageGalleryItem,onClick:function(e){r(a,n)},children:Object(b.jsx)("img",{className:S.a.ImageGalleryItemImage,src:t,alt:n,srcSet:a})})},x=a(14),I=a.n(x),C=a(15),w=a.n(C),k=document.getElementById("modal-root"),F=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleOverlayClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(b.jsx)("div",{className:w.a.Overlay,onClick:this.handleOverlayClick,children:Object(b.jsx)("div",{className:w.a.Modal,children:this.props.children})}),k)}}]),a}(n.Component),L=F,B=a(18),M=a.n(B),G=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("button",{type:"submit",className:M.a.Button,onClick:this.props.onClick,children:Object(b.jsx)("span",{className:"button-label",children:"LoadMore"})})}}]),a}(n.Component),N=G,U=a(19),R=a.n(U),V=(a(49),a(20)),A=a.n(V),D=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{className:A.a.Loader,children:Object(b.jsx)(R.a,{type:"Circles",color:"#3f51b5",height:150,width:150,timeout:3e3})})}}]),a}(n.Component),E=D,P=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],largeImageURL:"",tags:"",showModal:!1,page:1,loading:!1},e.loadMore=function(){e.setState((function(e){return console.log("loadmore clicked"),{page:e.page+1}}))},e.bigImageSetState=function(t,a){e.setState({largeImageURL:t,tags:a})},e.closeModal=function(){e.setState((function(e){return{showModal:!e.showModal,largeImageURL:"",tags:""}}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(){var e=Object(y.a)(f.a.mark((function e(t,a){var n,r,o,c,s=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=this.state.page,"23474268-70d851d8204f5902d9e83a665",r=this.props.submitValue,"https://pixabay.com/api/",o="?q=".concat(r,"&page=").concat(n,"&key=").concat("23474268-70d851d8204f5902d9e83a665","&image_type=photo&orientation=horizontal&per_page=12"),c="https://pixabay.com/api/"+o,t.submitValue!==r&&(this.setState({loading:!0}),fetch(c).then((function(e){return console.log("response",e),e.json()})).then((function(e){s.setState({images:Object(O.a)(e.hits)}),0!==e.hits.length?g.b.success("Search successfull!"):0===e.hits.length&&g.b.error("Oops, nothing found!")})).catch((function(e){g.b.error("Fetch error!")})).finally((function(){return s.setState({loading:!1})}))),n!==a.page&&fetch(c).then((function(e){return console.log("response",e),e.json()})).then((function(e){s.setState((function(t){return{images:[].concat(Object(O.a)(t.images),Object(O.a)(e.hits))}})),0!==e.hits.length?g.b.success("More results successfully loaded!"):0===e.hits.length&&g.b.error("Oops, nothing more!")})).catch((function(e){g.b.error("Fetch error!")})).finally((function(){return s.setState({loading:!1})}));case 8:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("ul",{className:I.a.ImageGallery,children:[this.state.loading&&Object(b.jsx)(E,{}),this.state.images.map((function(t){var a=t.id,n=t.webformatURL,r=t.largeImageURL,o=t.tags;return Object(b.jsx)(_,{webformatURL:n,largeImageURL:r,tags:o,onClickProps:e.bigImageSetState},a)})),0!==this.state.images.length&&Object(b.jsx)(N,{onClick:this.loadMore})]}),this.state.largeImageURL&&Object(b.jsxs)(L,{onClose:this.closeModal,children:[Object(b.jsx)("button",{type:"button",className:I.a.CloseBtn,onClick:this.closeModal,children:"X"}),Object(b.jsx)("img",{src:this.state.largeImageURL,alt:this.state.tags})]})]})}}]),a}(n.Component),q=P,K=a(21),T=a.n(K),J=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],submitValue:""},e.onFormSubmit=function(t){e.setState({submitValue:t})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:T.a.App,children:[Object(b.jsx)(d,{onFormSubmit:this.onFormSubmit}),Object(b.jsx)(q,{submitValue:this.state.submitValue})]})}}]),a}(n.Component);c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(J,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={Searchbar:"SearchBar_Searchbar__2fp0f",SearchForm:"SearchBar_SearchForm__2pDTT",SearchFormButton:"SearchBar_SearchFormButton__2exUq",SearchFormButtonLabel:"SearchBar_SearchFormButtonLabel__3Roig",SearchFormInput:"SearchBar_SearchFormInput__6dO3X"}}},[[50,1,2]]]);
//# sourceMappingURL=main.3b4cd526.chunk.js.map