#Tour of Heroes Angular Tutorial with a Mongodb backend

This code falls under the following license:
https://creativecommons.org/licenses/by/4.0/

It is a version of the Tour of Heroes Tutorial, from the Angular documentation
website, with a Mongodb back-end added. You can find the original tutorial for
the front-end here:

https://angular.io/docs/ts/latest/tutorial/


##Changes from the Original:

The urls have been changed and the in-memory database imports
have been commented out, the name of the heroes property, `id`, has been changed
to `hid` to avoid confusion with the mongodb document property, `_id`.
Also, the Angular skeleton for this project was generated using `angular-cli`.
The code from the Tour of Heroes tutorial was adapted to fit with the angular-cli
skeletal structure. Lastly, the code has been divided into more folders to make it
look less cluttered. Import paths have been adjusted accordingly.


##Architecture

The backend of this uses Mongodb, Node.js, and Koa. This backend architecture
is the substantial contribution in this code base.

In the heroes-server folder, there is a folder named `public`. This public folder
is just a production build of the heroes-app folder, created by running:

```
ng build -prod
```

while at the root of the heroes-app folder.

The resulting `dist` folder that is produced from this command was copied to the
`heroes-server` folder and renamed `public`. To run the build command yourself,
you will have to globally install angular-cli using npm.


##Configuration

You can run this project by entering the heroes-server folder and typing:

```
>npm install
>node app.js
```

and then accessing the program by loading up a browser and visiting:

http://localhost:3333

It should be noted that you will need a mongod daemon running on mongodb's
default port, 27017. You will have to have a database named TourOfHeroes created
along with a collection named heroes, populated with documents that have a
'name' property and an 'hid' number property. You will also need a collection
in the same database named counters. You should populate counters with a single
documents that looks like this:

```javascript
{"name" : "heroes", "seq" : 0 }
```

where the value of the property, `seq` corresponds to the number of documents
you put in the heroes collection.

The document in the counters collection will of course have an underscore id
property as well.


###Generating the Mongdb database

Here is a list of commands that might generate the initial database when executed
from the mongo shell:

```javascript
use TourOfHeroes;

db.createCollection("heroes");
db.createCollection("counters");

db.heroes.insert({hid: 11, name: "Mr. Nice"});
db.heroes.insert({hid: 12, name: "Narco"});
db.heroes.insert({hid: 13, name: "Bombasto"});

db.counters.insert({"name" : "heroes", "seq" : 3 });
```

Best of luck to you!
