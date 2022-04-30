module.exports = {
  database: 'SDDB1',
  username: 'root',
  password: '1234',
  dialect: 'mysql',
  host: 'localhost',
  timezone: '-04:00',
  port: 3306,
  dialectOptions: {
    typeCast: function (field, next) { // for reading from database
      if (field.type === 'DATETIME') {
        return field.string()
      }
        return next()
      },
  },
}