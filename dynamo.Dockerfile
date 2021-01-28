FROM amazon/dynamodb-local:latest

COPY db-jar /

EXPOSE 8000

CMD jar /db-jar/DynamoDBLocal.jar -sharedDb -dbPath /home/dynamodblocal