var configValues = require('./config');

module.exports = {
    getDbCConnectionString: function () {
        return 'mongodb://' +configValues.uname +':' +configValues.pwd +'@ds139690.mlab.com:39690/node-todo-sample';
    }
}