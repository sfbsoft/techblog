---
slug: docker-install
title: Cài đặt môi trường docker
authors:
  name: sfb-software
  title: Cài đặt docker
  url: https://sfb-software.com
  image_url: https://avatars.githubusercontent.com/u/88891387?s=400&u=2b7e389a1744f8302586abf4eb739d02fee631f0&v=4
tags: [docker]
---
Cài đặt môi trường docker
- Cài đặt docker engine
- Cài đặt docker-compose 

## Cài đặt docker engine
- Lưu ý hướng dẫn này chỉ dành cho [Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
- Để cài đặt cho Windows tham khảo [tại đây](https://docs.docker.com/desktop/windows/install/)
- Để cài đặt cho MacOs tham khảo [tại đây](https://docs.docker.com/desktop/mac/install/)

```
# Xóa bỏ docker cũ trong máy nếu có
$ sudo apt-get remove docker docker-engine docker.io containerd runc
# Cập nhật phần mềm và cài đặt các thư viện cần thiết
$ sudo apt-get update
$ sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
# Đăng ký GPG của docker
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
# Đăng ký stable repository của docker
$ echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
# Cài đặt docker engine
$ sudo apt-get update
$ sudo apt-get install docker-ce docker-ce-cli containerd.io
```

## Cài đặt docker-compose
- Link tham khảo [tại đây](https://docs.docker.com/compose/install/)

```
# Cài đặt
$ sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
# Tạo permission cho docker-compose
sudo chmod +x /usr/local/bin/docker-compose

```
