var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Chreol-860",
  database: "world"
});

function show_results(result){
  Object.keys(result).forEach(function(key) {
  var row = result[key];
    console.log(row)
  });
}

/*
* Write your code in here
*/
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// Execute simple query
sql = raw_sql();
data = ['Test', 'PSE', 'Test', 100];
//sql = sql_parameter_validation_example(data);
//sql = sql_escaping();
//sql = sql_prepared_statement();
//sql = sql_stored_procedure();
//sql = sql_injection();

con.end();

/*
* Raw sql example
*/
function raw_sql(){
  sql = "SELECT * FROM city BY ID DESC LIMIT 5;"
  
  con.query(sql, function (err, result) {
    if (err) throw err;
    show_results(result)
  });
}

/*
* Parameter validation example
*/
function sql_parameter_validation_example(data){
  // Don't
  sql = "INSERT INTO city (Name, CountryCode, District, Population) VALUES (?,?,?,?);"
  con.query(sql, [data[0],data[1],data[2],data[3]], function (err) {
    console.log("Done!");
  });
  
  // Always validate, even the most obvious (integers for example)
  // population = "suspicious data";
  // if (typeof population != "number"){
  //   throw "Population is not an integer. I will quit now!";
  // }

  //Especially email addreses!
}

/*
* Prepared statement example
*/
function sql_prepared_statement(){
  userId = 1;
  sql = "SELECT * FROM city WHERE ID= 1;"
  
  con.query(sql, [userId], function (err, result) {
    if (err) throw err;
    show_results(result)
  });
}

/*
* Escaping example
*/
function sql_escaping(){
  userId = 1;
  sql = "SELECT * FROM city WHERE ID=" + con.escape(userId);
  
  con.query(sql, [userId], function (err, result) {
    if (err) throw err;
    show_results(result)
  });
}
  
/*
* Stored procedure example
*/
function sql_stored_procedure(){
    var sql =
        "CREATE PROCEDURE addCity(IN Name char(35), IN CountryCode char(3), IN District char(20), IN Population int(11))\n" +
        "BEGIN\n" +
        "INSERT INTO city (Name, CountryCode, District, Population) VALUES (Name, CountryCode, District, Population);\n" +
        "END";
  
  con.query(sql, function (err, result) {
    if (err) throw err;
    show_results(result)
  });
  // Then:
  // SHOW PROCEDURE STATUS
  // DROP PROCEDURE addCity;
}

function sql_injection(){
  name = 'Gaza';
  // If you are a hacker though
  //name = 'invalid\' OR 1=\'1';
  sql = "SELECT * FROM city WHERE Name = '"+name+"';"
  console.log(sql);
  
  con.query(sql, function (err, result) {
    if (err) throw err;
    show_results(result)
  });
}