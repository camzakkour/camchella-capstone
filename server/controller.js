require('dotenv').config()
const {CONNECTION_STRING} = process.env
const Sequelize = require('sequelize')

console.log(CONNECTION_STRING)
const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    getArtists: (req,res) => {
        console.log('hit server')

        sequelize.query(`
        SELECT * FROM artists
        `).then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    updateArtists: (req,res) => {
        console.log(req.body)
        let {id} = req.body

        sequelize.query(`
        INSERT INTO user_favorites

        UPDATE artists
        SET isFavorited = true
        WHERE artist_id = ${id}
        `).then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    createUser: (req,res) => {
        const {username, password, name} = req.body

        sequelize.query(`
        INSERT INTO users
        (username, password, name)
        VALUES (${user_id}, '${username}', '${password}', '${name}')
        returning *;
        `).then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    getUserInfo: (req,res) => {
        console.log(req.query)
        let {username} = req.query

        sequelize.query(`
        SELECT 
            a.artist_id,
            a.isFavorited,
            a.name,
            u.user_id,
            f.user_favorites_id 
        FROM 
            user_favorites f
        JOIN artists a ON a.artist_id = f.artist_id
        JOIN users u ON u.user_id = f.user_id
        WHERE u.username = ${username}
        `).then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    getUserFavs: (req,res) => {
        let {username} = req.query
        console.log(req.query)

        sequelize.query(`
        SELECT * FROM users
        WHERE isFavorited = true AND username = ${username};
        `).then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    }
}