const Sequelize = require('sequelize');

const  serialize = require('../../util/database');

const order = serialize.define('order', {
    total_price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    order_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    order_status : {
        type: Sequelize.ENUM,
        values: ['pending', 'rejected', 'confirmed'],
        allowNull: false
    },
    shipping_date : {
        type: Sequelize.DATE,
        allowNull: false
    },
    customerId : {
            type : Sequelize.INTEGER,
            allowNull : false,

    }
});

module.exports = order;
