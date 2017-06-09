# Freddit

Why Freddit? Why this name?
--> Why not :p , I know the name contains "reddit" and this looks nowhere similar to it, but well freedom to name my creation!
* Its a simple add a Post and Comment on posted stuff based app. Also provides the functionality of upvoting a Post. The app then instantly sorts the Posts based on the upvotes i.e Posts are displayed in descending order of their upvotes. 
* Clicking on the 'Comments' text will route to the comments that were posted for that particular post. You can add a new comment from this page and you can also upvote any comment that are there. Again the comments get sorted in descending order of their upvotes.

### Prerequisites

You need to have [NodeJS](https://nodejs.org/en/) and [MongoDB](https://www.mongodb.com/download-center#community) installed on 
your system.


## How to Run the App

1. Open cmd in the current directory where the files have been extracted. And type...
```
  npm install
```
* This should install all the required node modules you'll need to run the app.

2. You can either use the default location to create the database that'd be C:\data\db or you can locally create one in your current directory by running the command...
```
mkdir data
```
* This will create a directory in your current workspace.

3. Open a new cmd terminal and run the following command if you're gonna use the default location for database..
```
mongod
```
Or if you created data directory in the current work environment, then run..

```
mongod --dbpath "Path to your data directory"
```
* Dont use the quotes while giving path, also make sure your path looks like PATH\data or so.

4. In the other terminal that is open, run the command..
```
node server.js
```

5. Open up your browser and type [localhost:3000](http://localhost:3000)
