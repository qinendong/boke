var mysql = require('mysql');
var pool = mysql.createPool({
	host:"localhost",
	user:"root",//建mysql数据库的名字
password:"", //建mysql数据库的密码
	database:"boke"//数据库名
	
	
}) 

function query(sql,callback){//查询方法
	pool.getConnection(function(err,connection){
		connection.query(sql,function(err,rows){
			callback(err,rows);
			connection.release();
		});
	});
}


exports.query = query;