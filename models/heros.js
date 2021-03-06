var express = require('express');
var mysql=require('mysql2');
    
let Heros= {}
//get all heros from the database
Heros.getAll = function(){
	return new Promise(function(resolve,reject){
		
	
   
	//create connection to database
	const connection=mysql.createConnection({
		host:'localhost',
		user:'root',
		database:'heros',
		password:'ccs#1234'
	});


    let query ='select * from hero where is_valid=1';
    connection.query(query,function(err,result,fields){
    	if(err){
    		console.log(err);
    		console.log('ERR :: fetching data from database.');
    		reject();



    	}
    	else
    	{
    		//console.log(result);
    		//console.log(fields);
    		resolve(result);
    	}
    });
});
   }
Heros.saveNew = function(newHeroData){
	return new Promise(function(resolve,reject){
		
	
   
	//create connection to database
	const connection=mysql.createConnection({
		host:'localhost',
		user:'root',
		database:'heros',
		password:'ccs#1234'
	});

	let query=`insert into hero(superhero,publisher,alter_ego,first_appearence,characters,is_valid,update_time) values('${newHeroData.superhero}','${newHeroData.publisher}','${newHeroData.alter_ego}','${newHeroData.first_appearence}','${newHeroData.characters}',1,'${new Date()}')`;

	connection.query(query,function(err,result,fields){
    	if(err){
    		console.log(err);
    		console.log('ERR :: fetching data from database.');
    		reject();



    	}
    	else
    	{
    		
    		resolve();
    	}
    });
});
}
Heros.delete = function(newHeroData){
	return new Promise(function(resolve,reject){
		
	
   
	//create connection to database
	const connection=mysql.createConnection({
		host:'localhost',
		user:'root',
		database:'heros',
		password:'ccs#1234'
	});

	let query=`update hero set is_valid=0 where id='${newHeroData.id}'`;

	connection.query(query,function(err,result,fields){
    	if(err){
    		console.log(err);
    		console.log('ERR :: fetching data from database.');
    		reject();



    	}
    	else
    	{
    		
    		resolve();
    	}
    });
});


}

Heros.viewHero=function(newHeroData){
	return new Promise(function(resolve,reject){
		const connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			database: 'heros',
			password : 'ccs#1234'
		});
		let query=`select * from hero where id='${newHeroData.id}'`;
		connection.query(query,function(err, result, fields){
			if(err) {
				console.log(err);
				console.log('ERR :: fetching data from database');
				reject();
			}
			else{
			//console.log(result);
			//console.log(fields);
				resolve(result);
			}
		});
	});
}


Heros.update = function(newHeroData){
	return new Promise(function(resolve,reject){
		
	
   
	//create connection to database
	const connection=mysql.createConnection({
		host:'localhost',
		user:'root',
		database:'heros',
		password:'ccs#1234'
	});

	let query=`update hero set superhero='${newHeroData.superhero}',publisher='${newHeroData.publisher}',alter_ego='${newHeroData.alter_ego}',first_appearence='${newHeroData.first_appearence}',characters='${newHeroData.characters}',1,'${new Date()}' where id='${newHeroData.id}'`;


	//querying the database for results..
	connection.query(query,function(err,result,fields){
    	if(err){
    		console.log(err);
    		console.log('ERR :: fetching data from database.');
    		reject();
    	}
    	else
    	{
    		resolve();
    	}
    });
});


}



     module.exports = Heros;
 