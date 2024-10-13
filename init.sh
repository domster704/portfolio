#!/bin/bash

sudo git reset HEAD --hard && sudo git pull

CONTAINER_NAME="portfolio-container"

docker stop $CONTAINER_NAME && docker rm $CONTAINER_NAME

docker build -t portfolio:latest . && docker run -it -p 8080:80 -d --restart --name $CONTAINER_NAME portfolio:latest