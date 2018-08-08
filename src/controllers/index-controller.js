'use strict';


exports.get = (req, res, next) => {
    res.status(200).send({
        title: 'Hello World',
        version: '0.0.1'
    });
};