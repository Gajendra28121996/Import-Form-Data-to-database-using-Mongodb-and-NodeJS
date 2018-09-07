
//Thrusday 6 sep 2018
//Node JS and Mongo Db supported Form ! : Continue after Server and Mongodb Creation
//Declare of Reqired Module 

		var MongoClient = require('mongodb').MongoClient;
		var express=require("express"); //express used for routing
		var bodyParser = require('body-parser'); //Use to work as a Parser for each body element (a process called before the input validation)
		var path = require('path'); //Use to work with directory of file (like locating a file)

		//For the Connection of Mongo DB
		let dbo;
			MongoClient.connect("mongodb://localhost:27017/mydb1",{useNewUrlParser:true},function(err,db)
				{
					dbo=db.db("mydb1");
					console.log("Database created!");
				});
		//Declaration of app to use Express Frame work
		var app = express();

		app.use(bodyParser.urlencoded({extended:false}));
		app.use(express.static(path.resolve(__dirname)));

			//Here Get Method used to load our Html file
			app.get('/view-feedback',function(req,res)
					{
						res.sendFile(__dirname + '/index.html');			
					})
			//Here Post method used to insert data from form to mongo database
			app.post('/post-feedback',function(req,res)
				{
					console.log('req.body',req.body);

					dbo.collection('customers').insertOne(req.body);
					//OPTIONAL CODE : To Store only targeted data fields in Monod Database : such as "name"
					
					// console.log('req.body',req.body);
					// let finalData ={
					//here request is only for a body element called client-name
					// 	name : req.body.client-name,  	
					// }
					// dbo.collection('customers').insertOne(finalData);
					
					//Above into "insertOne(finalData)" finalData is the object that is 
					//defined as let finalData we called its all propertied to store data into it in Mongodatabase 
					 res.send('Thank you')
				});

			
		app.listen(3030);

		console.log("Server Created on 3018 Port and Listening ");