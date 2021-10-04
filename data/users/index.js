const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getAll = async () => {
    try {
        // Connect to sql server
        let pool = await sql.connect(config.sql);
        // Load Query
        let query = await utils.loadQuery('users', 'getAllUsers');
        // run query
        const all = await pool.request().query(query);
        // return results
        return all.recordset;
    } catch (error) {
        throw error;
    }
}

const create = async data => {
    try {
        // Connect to sql server
        let pool = await sql.connect(config.sql);
        // Load query
        let query = await utils.loadQuery('users', 'createUser');
        // Run query
        // console.log('the data is:' + data.username, '\n' , data.password , '\n' , data.email);
        const insert = await pool.request()
            .input('username', sql.VarChar(50), data.username)
            .input('password', sql.Text(), data.password)
            .input('email', sql.NVarChar(100), data.email)
            .query(query);
           
        // return results
        return insert.recordset
    } catch (error) {
        throw error;
    }
}

const remove = async (id) => {
    try {
        //connect to sql server
        let pool = await sql.connect(config.sql);
        //load query
        let query = await utils.loadQuery('users','deleteUser');
        //run query
        const deleted = await pool.request()
                                    .input('usersId', sql.Int, id)
                                    .query(query);
        return deleted.recordset;
    } catch (error) {
        throw error;
    }
}

const getById = async (id) => {
    try {
        //connect to sql server
        let pool = await sql.connect(config.sql);
        //load query
        let query = await utils.loadQuery('users','getUserById');
        //run query
        const oneUser = await pool.request()
                                .input('usersId', sql.Int, id)
                                .query(query);
        return oneUser.recordset;
        
    } catch (error) {
        throw error;  
    }
}

const update = async (id, data) => {
    try {
        //connect to sql server
        let pool = await sql.connect(config.sql);
        //load query
        let query = await utils.loadQuery('users','updateUser');
        // run query
        const updated = await pool.request()
                .input('usersId', sql.Int, id)
                .input('username',sql.VarChar(100),data.username)
                .input('password',sql.Text(),data.password)
                .input('email',sql.VarChar(100),data.email)
                .query(query);
        
        return updated.recordset;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAll,
    create,
    remove,
    getById,
    update
}