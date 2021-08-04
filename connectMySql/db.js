var mysql = require('mysql');
var connection;
function openConnection () {
  connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '112233',
    database: 'test',
  })
  connection.connect();

}
function closeConnection () {
  connection.end();
}

function showAll () {
  openConnection();
  var sql = "SELECT * FROM category_ order by id asc";
  connection.query(sql, (err, results) => {
    if (err) {
      console.log('SELECT * FROM category_,error Message');
      return;
    }
    if (results) {
      for (var i = 0; i < results.length; i++) {
        console.log("%d\t%s", results[i].id, results[i].name);
      }
    }
  });
  closeConnection();
}

function add (name) {
  openConnection();
  var params = [null, name];
  var sql = 'INSERT INTO category_ value(?,?)';
  connection.query(sql, params, (err, data) => {
    if (err) {
      console.log(error, 'add Message');
      return;
    }
    if (data) {
      console.log(data);
    }
  });
  closeConnection()
}

function remove (id) {
  openConnection();
  var params = [id];
  var sql = "delete from category_ where id = ?";
  connection.query(sql, params, function (err, result) {
    if (err) {
      console.log("[REMOVE ERROR] - ", err.message);
      return;
    }
    console.log("remove id=%d success ", id);
  });
  closeConnection();
}

function get (id) {
  openConnection();
  var params = [id];
  var sql = "select * from category_ where id = ?";
  connection.query(sql, params, function (err, result) {
    if (err) {
      console.log("[GET ERROR] - ", err.message);
      return;
    }
    if (result.length != 0) {
      var category = { id: result[0].id, name: result[0].name };
      console.log("get category:" + JSON.stringify(result))
    }
    else {
      console.log("not found with id :" + id)
    }

  });
  closeConnection();
}

function update (id, name) {
  openConnection();
  var params = [name, id];
  var sql = "update category_ set name = ? where id = ?";
  connection.query(sql, params, function (err, result) {
    if (err) {
      console.log("[UPDATE ERROR] - ", err.message);
      return;
    }

    console.log("update success" + result.affectedRows);

  });
  closeConnection();
}
exports.showAll = showAll;
exports.closeConnection = closeConnection;
exports.add = add;
exports.remove = remove;
exports.get = get;
exports.update = update;