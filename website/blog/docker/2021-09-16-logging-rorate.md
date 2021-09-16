---
slug: logging-rotate
title: Logging rotation
date: 2021-09-16
authors:
  name: Engineer teams
  title: sfb-software
  url: https://sfb-software.com
  image_url: https://avatars.githubusercontent.com/u/88891387?s=400&u=2b7e389a1744f8302586abf4eb739d02fee631f0&v=4
tags: [docker, logging]
---
Trong bài này sẽ hướng dẫn cách xóa log trong container

Khi sử dụng docker trên server, service tự nhiên một ngày đẹp trời không hoạt động,
lúc đó kiểm tra hệ thống thì ta thấy dung lượng của ổ cứng đã không còn nữa.
Và lý do là do lượng log quá lớn mà container sinh ra tích tụ từ rất lâu rồi.

Khi đó cách giải quyết sẽ như sua:
- Xác định vị trí của file log
- Xóa nội dung file log
- Áp dụng thêm logging rotation vào để log không bị tích tụ mà sẽ tự xóa khi quá giới hạn

### Xóa log của container
Cách để xác định của log
```
$ docker inspect [container name] | grep -i log
```
Nếu trên linux server thì vị trí thường là bên dưới ```/var/lib/docker/containers/xxx-json.log```

### Xóa nội dung của file log
Dùng lệnh dưới để xóa
```
$ sudo truncate -s 0 /var/lib/docker/containers/xxx-json.log
```

### Tạo logging rotate cho docker container
Bên trong service của docker-compose ta thêm đoạn setting sau:
```
logging:
  driver: 'json-file'
  options:
    max-size: '10m'
    max-file: '3'
 ```
 
 Ở đây đang ví dụ là cứ 10Mb thì file log sẽ được tách ra, và tối đa là có 3 files như vậy là 30Mb log tối đa.
 Do là options nên các thông số trên có thể thay đổi tùy thích
 Sau đó restart lại các service
 ```
 $ docker-compose restart
 ```
 
 ### Setting global
 Còn một cách setting nữa sẽ setting cho toàn bộ docker container chứ không cần vào docker-compose để setting cho từng service.
 ```
 $ sudo vim /etc/docker/daemin.json
 ```
 
 Thêm vào thông tin dưới đây
 ```
 {
    "log-driver": "json-file",
    "log-opts": {"max-size": "10m", "max-file": "3"}
 }
 ```
 
 Lưu setting trên lại và kiểm tra bằng lệnh
 ```
 $ sudo cat /etc/docker/daemin.json
 {
    "log-driver": "json-file",
    "log-opts": {"max-size": "10m", "max-file": "3"}
 }
 ```
 
 Dùng cách này chúng ta phải restart cả docker service để load lại config cho docker
 ```
 $ docker-compose stop
 $ sudo systemctl restart docker
 $ docker-compose restart
 ```
 
🍺 🍺 🍺 Okie đã xong và yên tâm việc không bị file log làm tràn dung lượng nữa!
