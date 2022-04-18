#!/bin/bash

# start the db container
sudo docker run --net notes-net -p 27017:27017 -v ~/Django_practise/Database:/data/db --name notesmongo mongo:latest

# start the backend container
sudo docker run --net notes-net -p 8000:8000 --name notes-backend notes-backend

# start the frontend container
sudo docker run --net notes-net -p 3000:3000 --name notes-frontend notes-frontend
