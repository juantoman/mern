#Stop the container(s) using the following command:
sudo docker-compose down
#Delete all containers using the following command:
sudo docker rm -f $(sudo docker ps -a -q)
#Delete all volumes using the following command:
sudo docker volume rm $(sudo docker volume ls -q)
#Restart the containers using the following command:
sudo docker-compose up -d
