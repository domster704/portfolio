#!/bin/bash

docker build -t portfolio:latest . &&  docker run -it -p 8080:80 -d --name portfolio-container portfolio:latest