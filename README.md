# node-api
Node.js REST API application using express and mongodb

## Requirements:
- Database (MongoDB)

## Create .env file
Create .env file to store your credentials. Example below:

```
MONGODB_URI = mongodb+srv://<username>:<password>@mongodburlhere
```

## Installation
To install dependencies for this project run the following command:
```
$ npm install
```

After installing necessary dependencies you can start your server running the command below:
```
$ npm start
```

## Deploying to Google App Engine
Before deploying you need to create configuration yaml-file "app.yaml" to store your credentials. Example below:
```
runtime: nodejs18
env_variables:
  MONGO_URI: "<connection string>"
```

Now you can deploy your app using the command below:
```
$ gcloud app deploy
```

If you want to stream the logs from a Google App Engine application to your console, use the following command:
```
$ gcloud app logs tail -s default
```
