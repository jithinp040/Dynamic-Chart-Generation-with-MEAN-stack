//This is the trail work of converting a php code to be in nodejs
const express = require('express');//framework for nodejs
const path = require('path');//This is helpful in adding directories or files into the server.No install is required here
const mysql = require('mysql');
const bodyparser = require('body-parser');//Reads form requests from the client
const cors = require('cors');//Allows us to give request and response from the same browser.
const connect = require('express-myconnection');
const getYear = require('date-fns/get_year');
const app = express();//This app contains the entire expressjs module

//The app.use part tells expressjs to use these middleware while working on the server

//Enabling bodyparser in nodejs
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

//Stuff to include a directory to a server ,no need of typing directory names in browsers with help of this
app.use(express.static(path.join(__dirname, 'app')));
//Allows us to give request and response from the same browser.
app.use(cors())
app.options('*', cors());
//Contains details about the database
var dbopt = {
    host: 'localhost',
    port: '3306',
    database: 'minipro',
    user: 'root',
    password: '',
    multipleStatements:true

}
//This part connects the server to the database,done with the help of express-myconnection
app.use(connect(mysql, dbopt, 'pool'));//Note that the connect function used is the filename for the express-myconnection
//This contains the msg to be sent to the client(res.send messages)
var msg = {text:'',code:''}
//Loginn check
app.post('/logins', function (req, res) {
    req.getConnection(function (error, conn) {
        conn.query("SELECT * from users where name=?;",req.body.name, function (err, rows, fields) {
            if (err) {
                console.log(err); res.send(err);
            }else{
                if(rows.length>0){
                    if(rows[0].pass == req.body.pass){
                        msg.text='User Login Successful';
                        msg.code='200';
                        res.send(msg);
                    }else{
                        msg.text='Password is wrong';
                        msg.code='400';
                        res.send(msg);
                    }
                }else{
                    msg.text='User Name doesn\'t exist';
                    msg.code='400';
                    console.log(fields[0].name);
                    res.send(msg);
                }
            }
        })
    }
    )
})
//Check whether if the user exists
app.post('/registration',function(req,res){
    req.getConnection(function(error,conn){
        conn.query("SELECT name from users where name=?;",req.body.name,function(err,rows,fields){
            if(err){
                console.log(err);res.send(err);
            }else{
                if(rows.length>0){
                    msg.text='Username Already Exists Please Select another name';
                    msg.code='400';
                    res.send(msg);
                }else{
                    insertion(req,res);
                }
            }
        })
    })
})
//Creates a new user
function insertion(req,res){
    req.getConnection(function(error,conn){
        conn.query("INSERT INTO users (`name`,`pass`,`email`,`rname`) VALUES (?,?,?,?);",[req.body.uname,req.body.pass,req.body.email,req.body.name],function(err,rows,fields){
            if(err){
                console.log(err);res.send(err);
            }else{
                var today = getYear(Date.now());
                var next = today+1;
                var queries="CREATE TABLE `repof" + req.body.uname +"` (`year` VARCHAR(12) NOT NULL,`Jan` INT NULL,`Feb` INT NULL,`Mar` INT NULL,`Apr` INT NULL,`Jun` INT NULL,`Jul` INT NULL, `Aug` INT NULL,`Sept` INT NULL,  `Oct` INT NULL,`Nov` INT NULL,`Dec` INT NULL,`stat` TEXT NULL, PRIMARY KEY (`year`) );INSERT INTO `repof"+ req.body.uname + "` (`year`) VALUES ('"+today+"-"+next+"');";
                conn.query(queries,function(err,rows,fields){
                    if(err){
                        console.log(err);
                        msg.text="error occured";
                        msg.code="500";
                        res.send(msg);
                    }else{
                        msg.text="Registration Successful";
                        msg.code="200";
                        res.send(msg);
                    }
                })
            }
        })
    })
}
//Fetch List of Reports
app.post('/reports',function(req,res){
    var rep=[];
    req.getConnection(function(error,conn){
        conn.query("SELECT year from repof"+req.body.name+";",function(err,rows,fields){
            if(err){
                console.log(err);
                msg.text="error occured";
                msg.code="500";
                res.send(msg);
            }else{
                if(rows.length>0){
                    for(var i=0;i<rows.length;i++){
                        rep.push(rows[i].year);
                    }
                    res.send(rep);
                }
            }
        })
    })
})

//This part gets the Details for the generation of the chart
app.post('/details',function(req,res){
    var detail=[];//holds the response body to be sent
    var months=[];var no=[];//These two arrays will contain the X and Y axis of chart
    var body='';//will hold the written report
    req.getConnection(function(error,conn){
        conn.query("SELECT * from repof"+req.body.name+" where year='"+req.body.year+"';",function(err,rows,fields){
            if(err){
                console.log(err)
                res.send(err);
            }else{
                if(rows.length>0){
                    for(var i=0;i<fields.length;i++){
                        if(i==0){continue;}
                        if(i==fields.length-1){body=rows[0][fields[i].name];continue;}
                        months.push(fields[i].name);
                        no.push(rows[0][fields[i].name]);
                    }
                    detail.push(months,no,body);
                    res.send(detail);
                }else{
                    msg.text="data not found";
                    msg.code="404";
                    res.send(msg);
                }
            }
        })
    })
})

//This part runs the server**Pretty Important**
app.listen(3000, function () {
    console.log("server runs");
})


/*This section of code will be used if "express-myconnection" middleware is not installed
var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
*/