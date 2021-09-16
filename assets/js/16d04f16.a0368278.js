"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[608],{5074:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return d},assets:function(){return l},toc:function(){return u},default:function(){return p}});var n=o(7462),r=o(3366),c=(o(7294),o(3905)),a=["components"],i={slug:"docker-install",title:"C\xe0i \u0111\u1eb7t m\xf4i tr\u01b0\u1eddng docker",date:new Date("2021-09-10T00:00:00.000Z"),authors:{name:"Engineer teams",title:"sfb-software",url:"https://sfb-software.com",image_url:"https://avatars.githubusercontent.com/u/88891387?s=400&u=2b7e389a1744f8302586abf4eb739d02fee631f0&v=4"},tags:["docker"]},s=void 0,d={permalink:"/blog/docker-install",source:"@site/blog/docker/2021-09-10-docker-install.md",title:"C\xe0i \u0111\u1eb7t m\xf4i tr\u01b0\u1eddng docker",description:"C\xe0i \u0111\u1eb7t m\xf4i tr\u01b0\u1eddng docker",date:"2021-09-10T00:00:00.000Z",formattedDate:"September 10, 2021",tags:[{label:"docker",permalink:"/blog/tags/docker"}],readingTime:1.015,truncated:!1,authors:[{name:"Engineer teams",title:"sfb-software",url:"https://sfb-software.com",image_url:"https://avatars.githubusercontent.com/u/88891387?s=400&u=2b7e389a1744f8302586abf4eb739d02fee631f0&v=4",imageURL:"https://avatars.githubusercontent.com/u/88891387?s=400&u=2b7e389a1744f8302586abf4eb739d02fee631f0&v=4"}],prevItem:{title:"C\xe0i \u0111\u1eb7t proxy cho docker",permalink:"/blog/docker-proxy"},nextItem:{title:"Smart HR Solution Introdution",permalink:"/blog/hr solution"}},l={authorsImageUrls:[void 0]},u=[{value:"C\xe0i \u0111\u1eb7t docker engine",id:"c\xe0i-\u0111\u1eb7t-docker-engine",children:[]},{value:"C\xe0i \u0111\u1eb7t docker-compose",id:"c\xe0i-\u0111\u1eb7t-docker-compose",children:[]}],k={toc:u};function p(e){var t=e.components,o=(0,r.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"C\xe0i \u0111\u1eb7t m\xf4i tr\u01b0\u1eddng docker"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"C\xe0i \u0111\u1eb7t docker engine"),(0,c.kt)("li",{parentName:"ul"},"C\xe0i \u0111\u1eb7t docker-compose ")),(0,c.kt)("h2",{id:"c\xe0i-\u0111\u1eb7t-docker-engine"},"C\xe0i \u0111\u1eb7t docker engine"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"L\u01b0u \xfd h\u01b0\u1edbng d\u1eabn n\xe0y ch\u1ec9 d\xe0nh cho ",(0,c.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/ubuntu/"},"Ubuntu")),(0,c.kt)("li",{parentName:"ul"},"\u0110\u1ec3 c\xe0i \u0111\u1eb7t cho Windows tham kh\u1ea3o ",(0,c.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/windows/install/"},"t\u1ea1i \u0111\xe2y")),(0,c.kt)("li",{parentName:"ul"},"\u0110\u1ec3 c\xe0i \u0111\u1eb7t cho MacOs tham kh\u1ea3o ",(0,c.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/mac/install/"},"t\u1ea1i \u0111\xe2y"))),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'# X\xf3a b\u1ecf docker c\u0169 trong m\xe1y n\u1ebfu c\xf3\n$ sudo apt-get remove docker docker-engine docker.io containerd runc\n# C\u1eadp nh\u1eadt ph\u1ea7n m\u1ec1m v\xe0 c\xe0i \u0111\u1eb7t c\xe1c th\u01b0 vi\u1ec7n c\u1ea7n thi\u1ebft\n$ sudo apt-get update\n$ sudo apt-get install \\\n    apt-transport-https \\\n    ca-certificates \\\n    curl \\\n    gnupg \\\n    lsb-release\n# \u0110\u0103ng k\xfd GPG c\u1ee7a docker\n$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\n# \u0110\u0103ng k\xfd stable repository c\u1ee7a docker\n$ echo \\\n  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \\\n  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\n# C\xe0i \u0111\u1eb7t docker engine\n$ sudo apt-get update\n$ sudo apt-get install docker-ce docker-ce-cli containerd.io\n')),(0,c.kt)("h2",{id:"c\xe0i-\u0111\u1eb7t-docker-compose"},"C\xe0i \u0111\u1eb7t docker-compose"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Link tham kh\u1ea3o ",(0,c.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"t\u1ea1i \u0111\xe2y"))),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'# C\xe0i \u0111\u1eb7t\n$ sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\n# T\u1ea1o permission cho docker-compose\nsudo chmod +x /usr/local/bin/docker-compose\n')),(0,c.kt)("p",null,"\ud83c\udf7b \u0110\u1ebfn \u0111\xe2y l\xe0 c\xf3 th\u1ec3 d\xf9ng \u0111\u01b0\u1ee3c c\u1ea3 docker engine v\xe0 docker-compose r\u1ed3i!"))}p.isMDXComponent=!0}}]);