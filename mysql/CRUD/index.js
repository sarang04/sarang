const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'employeeDB',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});


app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));


//Get all employees
app.get('/employees', (req, res) => {
    mysqlConnection.query('SELECT * FROM employee', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//Get an employees
app.get('/employees/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM employee WHERE EmpID = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});



//Delete an employees
app.delete('/employees/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM employee WHERE EmpID = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted successfully.');
        else
            console.log(err);
    })
});

//Insert an employees
app.post('/employees', (req, res) => {
    let emp = req.body;
    var sql = "SET @EmpID = ?;SET @Name = ?;SET @EmpCode = ?;SET @Salary = ?; \
    CALL EmployeeAddOrEdit(@EmpID,@Name,@EmpCode,@Salary);";
    mysqlConnection.query(sql, [emp.EmpID, emp.Name, emp.EmpCode, emp.Salary], (err, rows, fields) => {
        if (!err)
            rows.forEach(element => {
                if(element.constructor == Array)
                res.send('Inserted employee id : '+element[0].EmpID);
            });
        else
            console.log(err);
    })
});

//Update an employees
app.put('/employees', (req, res) => {
    let emp = req.body;
    var sql = "SET @EmpID = ?;SET @Name = ?;SET @EmpCode = ?;SET @Salary = ?; \
    CALL EmployeeAddOrEdit(@EmpID,@Name,@EmpCode,@Salary);";
    mysqlConnection.query(sql, [emp.EmpID, emp.Name, emp.EmpCode, emp.Salary], (err, rows, fields) => {
        if (!err)
            res.send('Updated successfully');
        else
            console.log(err);
    })
});




// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const mysql = require('mysql');
 
// // parse application/json
// app.use(bodyParser.json());
 
// //create database connection
// const conn = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'employeeDB'
// });
 
// //connect to database
// conn.connect((err) =>{
//   if(err) throw err;
//   console.log('Mysql Connected...');
// });
 
// //show all products
// app.get('/api/products',(req, res) => {
//   let sql = "SELECT * FROM product";
//   let query = conn.query(sql, (err, results) => {
//     if(err) throw err;
//     res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
//   });
// });
 
// //show single product
// app.get('/api/products/:id',(req, res) => {
//   let sql = "SELECT * FROM product WHERE product_id="+req.params.id;
//   let query = conn.query(sql, (err, results) => {
//     if(err) throw err;
//     res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
//   });
// });
 
// //add new product
// app.post('/api/products',(req, res) => {
//   let data = {product_name: req.body.product_name, product_price: req.body.product_price};
//   let sql = "INSERT INTO product SET ?";
//   let query = conn.query(sql, data,(err, results) => {
//     if(err) throw err;
//     res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
//   });
// });
 
// //update product
// app.put('/api/products/:id',(req, res) => {
//   let sql = "UPDATE product SET product_name='"+req.body.product_name+"', product_price='"+req.body.product_price+"' WHERE product_id="+req.params.id;
//   let query = conn.query(sql, (err, results) => {
//     if(err) throw err;
//     res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
//   });
// });
 
// //Delete product
// app.delete('/api/products/:id',(req, res) => {
//   let sql = "DELETE FROM product WHERE product_id="+req.params.id+"";
//   let query = conn.query(sql, (err, results) => {
//     if(err) throw err;
//       res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
//   });
// });
 
// //Server listening
// app.listen(3000,() =>{
//   console.log('Server started on port 3000...');
// });