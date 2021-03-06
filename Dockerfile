
FROM python:alpine
RUN apk update && \
    apk upgrade && \
    apk add bash && \
    apk add --no-cache --virtual build-deps build-base gcc && \
    pip install aws-sam-cli && \
    apk del build-deps
RUN mkdir /app
WORKDIR /app
COPY . .
EXPOSE 3000
CMD ["sh", "entrypoint.sh"]