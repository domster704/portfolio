#!/usr/bin/bash

docker build -t portfolio:latest . && > docker run -d -it -p 8080:80 portfolio:latest --name portfolio-container