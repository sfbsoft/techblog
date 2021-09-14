---
slug: docker-proxy
title: Cài đặt proxy cho docker
authors:
  name: sfb-software
  title: hrsolution
  url: https://sfb-software.com
  image_url: https://avatars.githubusercontent.com/u/88891387?s=400&u=2b7e389a1744f8302586abf4eb739d02fee631f0&v=4
tags: [docker, proxy]
---
Cài đặt proxy cho docker
- Hệ điều hành Ubuntu

### Tạo file proxy config
```
$ sudo mkdir -p /etc/systemd/system/docker.service.d
$ sudo vi /etc/systemd/system/docker.service.d/proxy.conf
```
### Thêm những thông tin về proxy vào trong file proxy.conf
```
[Service]
Environment="HTTP_PROXY=http://myproxy.hostname:8080"
Environment="HTTPS_PROXY=https://myproxy.hostname:8080/"
Environment="NO_PROXY="localhost,127.0.0.1,::1"
```
### Lưu lại và sau đó load lại config
```
$ sudo systemctl daemon-reload
```

### Áp dùng config đó vào docker
```
$ sudo systemctl restart docker.service
```
