"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[8207],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(n),s=o,m=d["".concat(i,".").concat(s)]||d[s]||g[s]||l;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,c=new Array(l);c[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<l;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1311:function(e,t,n){n.r(t),n.d(t,{default:function(){return g},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return u}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),c=["components"],a={},i={unversionedId:"goctl/goctl",id:"goctl/goctl",isDocsHomePage:!1,title:"Goctl \u7b80\u4ecb",description:"goctl\u662fgo-zero\u5fae\u670d\u52a1\u6846\u67b6\u4e0b\u7684\u4ee3\u7801\u751f\u6210\u5de5\u5177\u3002\u4f7f\u7528 goctl \u53ef\u663e\u8457\u63d0\u5347\u5f00\u53d1\u6548\u7387\uff0c\u8ba9\u5f00\u53d1\u4eba\u5458\u5c06\u65f6\u95f4\u91cd\u70b9\u653e\u5728\u4e1a\u52a1\u5f00\u53d1\u4e0a\uff0c\u5176\u529f\u80fd\u6709\uff1a",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/goctl/goctl.md",sourceDirName:"goctl",slug:"/goctl/goctl",permalink:"/cn/docs/goctl/goctl",editUrl:"https://github.com/zeromicro/portal/edit/main/i18n/cn/docusaurus-plugin-content-docs/current/goctl/goctl.md",version:"current",lastUpdatedAt:1684493178,formattedLastUpdatedAt:"5/19/2023",frontMatter:{},sidebar:"goctl",next:{title:"Golang \u5b89\u88c5",permalink:"/cn/docs/goctl/installation"}},u=[{value:"goctl \u8bfb\u97f3",id:"goctl-\u8bfb\u97f3",children:[]},{value:"\u67e5\u770b\u7248\u672c\u4fe1\u606f",id:"\u67e5\u770b\u7248\u672c\u4fe1\u606f",children:[]},{value:"\u5b89\u88c5 goctl",id:"\u5b89\u88c5-goctl",children:[{value:"\u65b9\u5f0f\u4e00\uff08go get\uff09",id:"\u65b9\u5f0f\u4e00go-get",children:[]},{value:"\u65b9\u5f0f\u4e8c \uff08fork and build\uff09",id:"\u65b9\u5f0f\u4e8c-fork-and-build",children:[]}]},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",children:[]}],p={toc:u};function g(e){var t=e.components,n=(0,o.Z)(e,c);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"goctl\u662fgo-zero\u5fae\u670d\u52a1\u6846\u67b6\u4e0b\u7684\u4ee3\u7801\u751f\u6210\u5de5\u5177\u3002\u4f7f\u7528 goctl \u53ef\u663e\u8457\u63d0\u5347\u5f00\u53d1\u6548\u7387\uff0c\u8ba9\u5f00\u53d1\u4eba\u5458\u5c06\u65f6\u95f4\u91cd\u70b9\u653e\u5728\u4e1a\u52a1\u5f00\u53d1\u4e0a\uff0c\u5176\u529f\u80fd\u6709\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"api\u670d\u52a1\u751f\u6210"),(0,l.kt)("li",{parentName:"ul"},"rpc\u670d\u52a1\u751f\u6210"),(0,l.kt)("li",{parentName:"ul"},"model\u4ee3\u7801\u751f\u6210"),(0,l.kt)("li",{parentName:"ul"},"\u6a21\u677f\u7ba1\u7406")),(0,l.kt)("h2",{id:"goctl-\u8bfb\u97f3"},"goctl \u8bfb\u97f3"),(0,l.kt)("p",null,"\u5f88\u591a\u4eba\u4f1a\u628a ",(0,l.kt)("inlineCode",{parentName:"p"},"goctl")," \u8bfb\u4f5c ",(0,l.kt)("inlineCode",{parentName:"p"},"go-C-T-L"),"\uff0c\u8fd9\u79cd\u662f\u9519\u8bef\u7684\u5ff5\u6cd5\uff0c\u5e94\u53c2\u7167 ",(0,l.kt)("inlineCode",{parentName:"p"},"go control")," \u8bfb\u505a ",(0,l.kt)("inlineCode",{parentName:"p"},"\u0261\u014d k\u0259n\u02c8tr\u014dl"),"\u3002"),(0,l.kt)("h2",{id:"\u67e5\u770b\u7248\u672c\u4fe1\u606f"},"\u67e5\u770b\u7248\u672c\u4fe1\u606f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$  goctl -v\ngoctl version 1.3.5 darwin/amd64\n")),(0,l.kt)("p",null,"\u5982\u679c\u5b89\u88c5\u4e86goctl\u5219\u4f1a\u8f93\u51fa\u4ee5\u4e0b\u683c\u5f0f\u7684\u6587\u672c\u4fe1\u606f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"goctl version ${version} ${os}/${arch}\n")),(0,l.kt)("p",null,"\u4f8b\u5982\u8f93\u51fa\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"goctl version 1.1.5 darwin/amd64\n")),(0,l.kt)("p",null,"\u7248\u672c\u53f7\u8bf4\u660e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"version\uff1agoctl \u7248\u672c\u53f7"),(0,l.kt)("li",{parentName:"ul"},"os\uff1a\u5f53\u524d\u64cd\u4f5c\u7cfb\u7edf\u540d\u79f0"),(0,l.kt)("li",{parentName:"ul"},"arch\uff1a \u5f53\u524d\u7cfb\u7edf\u67b6\u6784\u540d\u79f0")),(0,l.kt)("h2",{id:"\u5b89\u88c5-goctl"},"\u5b89\u88c5 goctl"),(0,l.kt)("h3",{id:"\u65b9\u5f0f\u4e00go-get"},"\u65b9\u5f0f\u4e00\uff08go get\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Go 1.15 \u53ca\u4e4b\u524d\u7248\u672c\nGO111MODULE=on GOPROXY=https://goproxy.cn/,direct go get -u github.com/zeromicro/go-zero/tools/goctl@latest\n\n# Go 1.16 \u53ca\u4ee5\u540e\u7248\u672c\nGOPROXY=https://goproxy.cn/,direct go install github.com/zeromicro/go-zero/tools/goctl@latest\n")),(0,l.kt)("p",null,"\u901a\u8fc7\u6b64\u547d\u4ee4\u53ef\u4ee5\u5c06goctl\u5de5\u5177\u5b89\u88c5\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin")," \u76ee\u5f55\u4e0b"),(0,l.kt)("h3",{id:"\u65b9\u5f0f\u4e8c-fork-and-build"},"\u65b9\u5f0f\u4e8c \uff08fork and build\uff09"),(0,l.kt)("p",null,"\u4ece go-zero\u4ee3\u7801\u4ed3\u5e93 ",(0,l.kt)("inlineCode",{parentName:"p"},"git@github.com:zeromicro/go-zero.git")," \u62c9\u53d6\u4e00\u4efd\u6e90\u7801\uff0c\u8fdb\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"tools/goctl/"),"\u76ee\u5f55\u4e0b\u7f16\u8bd1\u4e00\u4e0b goctl \u6587\u4ef6\uff0c\u7136\u540e\u5c06\u5176\u6dfb\u52a0\u5230\u73af\u5883\u53d8\u91cf\u4e2d\u3002"),(0,l.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"goctl -v"),"\uff0c\u5982\u679c\u8f93\u51fa\u7248\u672c\u4fe1\u606f\u5219\u4ee3\u8868\u5b89\u88c5\u6210\u529f\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl -v\n\ngoctl version 1.1.4 darwin/amd64\n")),(0,l.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"command not found: goctl\n")),(0,l.kt)("p",null,"\u8bf7\u786e\u4fddgoctl\u5df2\u7ecf\u5b89\u88c5\uff0c\u6216\u8005goctl\u662f\u5426\u5df2\u7ecf\u6b63\u786e\u6dfb\u52a0\u5230\u5f53\u524dshell\u7684\u73af\u5883\u53d8\u91cf\u4e2d\u3002"))}g.isMDXComponent=!0}}]);