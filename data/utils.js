const fs = require('fs');

const loadQuery = (foldername,queryname) => {
    return fs.readFileSync(`${__dirname}/${foldername}/${queryname}.sql`,'utf-8');
}

module.exports = {
    loadQuery
}