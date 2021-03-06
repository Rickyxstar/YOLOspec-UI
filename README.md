# YOLOspec Infrastructure Documentation Standard
YOLOspec is a proof of concept documentation standard influenced by [OpenAPI](https://swagger.io/specification/) to generate documentation for infrastructure. This project is an interactive UI to view YOLOspec YAML influenced by [Swagger UI](https://swagger.io/tools/swagger-ui/).

## Live demo
[https://yolo.rickyxstar.com](https://yolo.rickyxstar.com)

## Develop
```bash
npm install
npm run watch
```

## Build
```bash
npm run build
```

# Example yolospec.yml
```yaml
yolo: "1.0"
info:
  title: Ricky's Application
  description: A sample application

network:
  main:
    cidr: 192.168.1.0/24
    dns:
      - 192.168.10.2
      - 192.168.10.3
    gateway: 192.168.0.0/24
    subnets:
      api:
        cidr: 192.168.1.0/28
      database:
        cidr: 192.168.1.16/28
      management:
        cidr: 192.168.1.32/29

host:
  api1:
    hostname: api_1
    ip: 192.168.1.3
    subnet: network.main.api
    os: os.centos7
  api2:
    hostname: api_2
    ip: 192.168.1.4
    subnet: network.main.api
    os: os.centos7
  mysql:
    hostname: mysql_1
    ip: 192.168.1.17
    subnet: network.main.database
    os: os.ubuntu
  mysql read rep1:
    hostname: mysql_2
    ip: 192.168.1.18
    subnet: network.main.database
    os: os.ubuntu
  mysql read rep2:
    hostname: mysql_3
    ip: 192.168.1.18
    subnet: network.main.database
    os: os.ubuntu
  guacamole:
    hostname: guacamole
    ip: 192.168.1.33
    subnet: network.main.management
    os: os.centos7

os:
  centos7:
    packagemanager: yum
  ubuntu:
    packagemanager: apt-get
```