var mongodb = require('./db');

function Catalog(catalog) {
  this.name = catalog.name;
};

module.exports = Catalog;


//读取用户信息
Catalog.get = function(id, callback) {
  

  //打开数据库
  mongodb.open(function(err, db) {
      if (err) {
        return callback(err); //错误，返回 err 信息
      }
    
      db.collection('catalogs', function(err, collection) {
        if (err) {
          mongodb.close();
          return callback(err); //错误，返回 err 信息
        }
        if (!id) {
          collection.find().toArray(function(error, data){
            mongodb.close();
            callback(error, data);
          }); //成功！返回查询的用户信息
        } else {
          //查找用户名（name键）值为 name 一个文档
          collection.findOne({
            _id: id
          }, function(err, catalog) {
            mongodb.close();
            if (err) {
              return callback(err); //失败！返回 err
            }
            callback(null, catalog); //成功！返回查询的用户信息
          });
        }
      });
    });
  };