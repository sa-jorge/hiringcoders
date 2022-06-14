module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    port: '5432',
    username: 'postgres',
    password: 'docker',
    database: 'sistema',
    omitNull: true,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    }
}