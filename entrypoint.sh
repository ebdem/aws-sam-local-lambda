#! /bin/bash

set -o errexit
echo "Invoke...."
sam local invoke GetVersions  --docker-network proaktif-sam
echo "Start..."
sam local start-api --host 0.0.0.0 --docker-network proaktif-sam