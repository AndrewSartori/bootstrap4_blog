***Install mongoDB and mongoose***
sudo apt-get install -y mongodb-org
mkdir data
echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
chmod a+x mongod
./mongod
npm install mongoose --save
    
*If MongoDB returns "Unclean shutdown detected.", repaid the DB:* `Must be in the root directory where ./mongod will run`
./mongod --repair ; cd data ; rm -rf mongod.lock ; cd .. ; ./mongod

*Packages to Remember*
- npm install ejs --save

*Custom modifications*
- /posts is just the template for /:id articles

*****Notes*****
- When you make the index page for some resource that is pulling a list of collections from the DB, you will get an ECONOREST type error until you either seed that DB or Postman (manually enter) a collection entry into that collection