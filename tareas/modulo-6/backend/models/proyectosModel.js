var pool = require('./bd');

async function getProyectos() {
    try {
        var query = 'select * from proyectos'
        var rows = await pool.query(query);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function insertProyecto(obj) {
    try {
        var query = "insert into proyectos set ?"
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteProyectosById(id) {
    var query = 'delete from proyectos where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}


async function getProyectosById(id) {
    var query = 'select * from proyectos where id = ?';
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function modificarProyectoById(obj, id) {
    try {
        var query = "update proyectos set ? where id = ?"
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { getProyectos, insertProyecto, deleteProyectosById, getProyectosById, modificarProyectoById }