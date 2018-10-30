var mysql = require("mysql");
var inquirer = require("inquirer");


var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazonDB"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    // con.query("SELECT * FROM products", function (err, result, fields) {
    //     if (err) throw err;
    //     // console.log(result);
    con.query("SELECT id, product_name FROM products", function (err, res) {
        if (err) throw err;
        console.log(res);
           shopping();
   
        
     
    });

    //});
})

function shopping() {


    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter the id number of the product you would like to buy',
            name: 'ids',
        },
        {
            type: "input",
            name: "answer",
            message: 'How many would you like to buy?'
        }])
        .then(function (user) {
            console.log( typeof user.ids  );
            console.log(user.answer);

            var query = "SELECT stock_quantity FROM products WHERE ?";
            con.query(query, {id: parseInt(user.ids)}, function(err, res) {
            console.log(res);

            var stock = JSON.parse(res, function(k, v) { 
                return (typeof v === "object") ; 
            });

            console.log(stock);
           
            var quantity  = parseInt(user.answer)
            console.log(quantity);
            // var stock = parseInt(res.stock_quantity);
            // console.log(stock); 
            
            })
           
        })
    
    
    }