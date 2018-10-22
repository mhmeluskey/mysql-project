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
            con.end();
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
            .then(function(user) {
                console.log (user.ids);
                console.log(user.answer);
                // var amountBought = inquirerResponse;
                // var currentInventory = 



            })
    }

  