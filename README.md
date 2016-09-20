This code falls under the following license:
https://creativecommons.org/licenses/by/4.0/

It is a version of the Tour of Heroes Tutorial for Angular on the documentation
website. You can find it here:

https://angular.io/docs/ts/latest/tutorial/

CHANGES FROM THE ORIGINAL:

The urls have been changed and the in-memory database imports
have been commented out, the name of the heroes property, id, has been changed
to hid to avoid confusion with the mongodb document property, underscore id.
Also, the Angular skeleton for this project was generated using angular-cli.
The code from the Tour of Heroes was adapted to fit with the angular-cli
skeletal structure. Lastly, I divided the code up into more folders to make it
look less cluttered. Import paths have been adjusted accordingly.

The backend of this uses Koa, Node.js, and Mongodb. This backend is
the substantial contribution in this code base.

In the heroes-server folder, there is a folder named public. This public folder
is just a production build of the heroes-app folder, created by running:

```
ng build -prod
```
while at the root of the heroes-app folder.

The resulting dist folder that is produced from this command was copied to the
heroes-server folder and renamed 'public'. To run the build command yourself,
you will have to globally install angular-cli using npm.


You can run the production version of this project by entering the heroes-server folder and typing:

```
> npm install
> node app.js
```

and then accessing the program by loading up a browser and visiting:

http://localhost:3333

It should be noted that you will need a mongod daemon running on mongodb's
default port, 27017. You will have to have a database named TourOfHeroes created
along with a collection named heroes, populated with documents that have a
'name' property and an 'hid' number property. You will also need a collection
in the same database named counters. You should populate counters with a single
documents that looks like this:

{"name" : "heroes", "seq" : 0 }

It will of course have an underscore id property as well.

Here is a list of commands that might generate the initial database when executed
from the mongo shell:

```
use TourOfHeroes;

db.createCollection("heroes");
db.createCollection("counters");

db.heroes.insert({hid: 11, name: "Mr. Nice"});
db.heroes.insert({hid: 12, name: "Narco"});
db.heroes.insert({hid: 13, name: "Bombasto"});

db.counters.insert({"name" : "heroes", "seq" : 3 });
```

Best of luck to you!
