#! /bin/bash

DYNAMODB_CONTAINER_NAME=dynamodb-local
DOCKER_NETWORK=proaktif-sam

set -o errexit


# start dynamodb docker-compose

echo "Starting dynamodb docker container name=$DYNAMODB_CONTAINER_NAME"
docker-compose up -d
echo "Waiting $DYNAMODB_CONTAINER_NAME to start...";
sleep 30;
until [ "`/usr/bin/docker inspect -f {{.State.Running}} $DYNAMODB_CONTAINER_NAME`"=="true" ]; do
    echo "Waiting $DYNAMODB_CONTAINER_NAME to start...";
    sleep 3;
done;
echo "$DYNAMODB_CONTAINER_NAME is started."

echo "Invoke GetVersions...."
sam local invoke GetVersions  --docker-network $DOCKER_NETWORK
echo "Start..."
sam local start-api --docker-network $DOCKER_NETWORK