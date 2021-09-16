"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[142],{4498:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return d},toc:function(){return p},default:function(){return f}});var n=o(7462),r=o(3366),i=(o(7294),o(3905)),c=["components"],a={slug:"docker-proxy",title:"C\xe0i \u0111\u1eb7t proxy cho docker",authors:{name:"sfb-software",title:"C\xe0i \u0111\u1eb7t proxy cho docker",url:"https://sfb-software.com",image_url:"https://avatars.githubusercontent.com/u/88891387?s=400&u=2b7e389a1744f8302586abf4eb739d02fee631f0&v=4"},tags:["docker","proxy"]},l=void 0,s={permalink:"/blog/docker-proxy",source:"@site/blog/docker/docker-proxy.md",title:"C\xe0i \u0111\u1eb7t proxy cho docker",description:"C\xe0i \u0111\u1eb7t proxy cho docker",date:"2021-09-16T09:08:54.699Z",formattedDate:"September 16, 2021",tags:[{label:"docker",permalink:"/blog/tags/docker"},{label:"proxy",permalink:"/blog/tags/proxy"}],readingTime:.36,truncated:!1,authors:[{name:"sfb-software",title:"C\xe0i \u0111\u1eb7t proxy cho docker",url:"https://sfb-software.com",image_url:"https://avatars.githubusercontent.com/u/88891387?s=400&u=2b7e389a1744f8302586abf4eb739d02fee631f0&v=4",imageURL:"https://avatars.githubusercontent.com/u/88891387?s=400&u=2b7e389a1744f8302586abf4eb739d02fee631f0&v=4"}],prevItem:{title:"C\xe0i \u0111\u1eb7t m\xf4i tr\u01b0\u1eddng docker",permalink:"/blog/docker-install"},nextItem:{title:"Logging rotation",permalink:"/blog/logging-rotate"}},d={authorsImageUrls:[void 0]},p=[{value:"T\u1ea1o file proxy config",id:"t\u1ea1o-file-proxy-config",children:[]},{value:"Th\xeam nh\u1eefng th\xf4ng tin v\u1ec1 proxy v\xe0o trong file proxy.conf",id:"th\xeam-nh\u1eefng-th\xf4ng-tin-v\u1ec1-proxy-v\xe0o-trong-file-proxyconf",children:[]},{value:"L\u01b0u l\u1ea1i v\xe0 sau \u0111\xf3 load l\u1ea1i config",id:"l\u01b0u-l\u1ea1i-v\xe0-sau-\u0111\xf3-load-l\u1ea1i-config",children:[]},{value:"\xc1p d\u1ee5ng config \u0111\xf3 v\xe0o docker",id:"\xe1p-d\u1ee5ng-config-\u0111\xf3-v\xe0o-docker",children:[]}],u={toc:p};function f(e){var t=e.components,o=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"C\xe0i \u0111\u1eb7t proxy cho docker"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"H\u1ec7 \u0111i\u1ec1u h\xe0nh Ubuntu")),(0,i.kt)("h3",{id:"t\u1ea1o-file-proxy-config"},"T\u1ea1o file proxy config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo mkdir -p /etc/systemd/system/docker.service.d\n$ sudo vi /etc/systemd/system/docker.service.d/proxy.conf\n")),(0,i.kt)("h3",{id:"th\xeam-nh\u1eefng-th\xf4ng-tin-v\u1ec1-proxy-v\xe0o-trong-file-proxyconf"},"Th\xeam nh\u1eefng th\xf4ng tin v\u1ec1 proxy v\xe0o trong file proxy.conf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[Service]\nEnvironment="HTTP_PROXY=http://myproxy.hostname:8080"\nEnvironment="HTTPS_PROXY=https://myproxy.hostname:8080/"\nEnvironment="NO_PROXY="localhost,127.0.0.1,::1"\n')),(0,i.kt)("h3",{id:"l\u01b0u-l\u1ea1i-v\xe0-sau-\u0111\xf3-load-l\u1ea1i-config"},"L\u01b0u l\u1ea1i v\xe0 sau \u0111\xf3 load l\u1ea1i config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo systemctl daemon-reload\n")),(0,i.kt)("h3",{id:"\xe1p-d\u1ee5ng-config-\u0111\xf3-v\xe0o-docker"},"\xc1p d\u1ee5ng config \u0111\xf3 v\xe0o docker"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo systemctl restart docker.service\n")))}f.isMDXComponent=!0}}]);