const orm = require('../config/orm')

const burger = {
    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },
    insert(name, cb) {
        orm.create('burgers', [burger_name, good], [name, true], (res) => cb(res));
    },
    updateOne(id, cb) {
        var condition = 'id='+ id
        orm.updateOne('burgers', {good: false}, condition, (res) => cb(res));
    },
};

module.exports = burger;