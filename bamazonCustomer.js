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
            console.log(typeof user.ids);
            console.log(user.answer);

            var query = "SELECT stock_quantity FROM products WHERE ?";
            con.query(query, { id: parseInt(user.ids) }, function (err, res) {
                console.log(res);



                var quantity = parseInt(user.answer)
                console.log(quantity);
                var stock = parseInt(res[0].stock_quantity);
                console.log(stock);

                if (quantity <= stock) {
                    console.log("There is enough inventory!");
                    var newStock = stock - quantity;

                    console.log("New inventory: " + newStock);
                    con.query("UPDATE products SET ?", 
                    [{
                        stock_quantity: newStock,

                        
                    }], function (err, res) {

                        console.log("this is new stock: " + newStock);
                        console.log(res);

                    })

                }



                else {
                    console.log("Not enough product to complete this order")
                }
            })
        });






}