const Sequelize = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    seed: (req,res) => {
        sequelize.query(`
        CREATE TABLE artists (
            artist_id SERIAL PRIMARY KEY,
            name VARCHAR(100),
            isFavorited BOOLEAN
        );

        CREATE TABLE users (
            user_id SERIAL PRIMARY KEY,
            username VARCHAR(100),
            password VARCHAR(100),
            name VARCHAR(100)
        );

        CREATE TABLE user_favorites (
            user_favorites_id SERIAL PRIMARY KEY,
            user_id INT NOT NULL REFERENCES users(user_id),
            artist_id INT NOT NULL REFERENCES artists (artist_id)
        );
        
        INSERT INTO artists (name, isFavorited)
        VALUES ('100 gecs',false),
            ('21 Savage',false),
            ('Adam Port',false),
            ('Alaina Castillo',false),
            ('Alec Benjamin',false),
            ('Ali Gatie',false),
            ('Altin Gün',false),
            ('Amber Mark',false),
            ('Amémé',false),
            ('Amyl and the Sniffers',false),
            ('Anitta',false),
            ('Anna',false),
            ('Ari Lennox',false),
            ('Arlo Parks',false),
            ('Arooj Aftab',false),
            ('Artbat',false),
            ('Baby Keem',false),
            ('BadBadNotGood',false),
            ('Banda MS',false),
            ('Beabadoobee',false),
            ('Beach Bunny',false),
            ('Beach Goons',false),
            ('Bedouin',false),
            ('Belly',false),
            ('Big Sean',false),
            ('Billie Eilish',false),
            ('Bishop Briggs',false),
            ('Black Coffee',false),
            ('Black Midi',false),
            ('Brockhampton',false),
            ('Caribou',false),
            ('Cariño',false),
            ('Carly Rae Jepsen',false),
            ('Caroline Polachek',false),
            ('Channel Tres',false),
            ('Chelsea Cutler',false),
            ('Chicano Batman',false),
            ('Chris Liebing',false),
            ('City Girls',false),
            ('Code Orange',false),
            ('Cole Knight',false),
            ('Conan Gray',false),
            ('Cordae',false),
            ('Crumb',false),
            ('Cuco',false),
            ('Current Joys',false),
            ('Damian Lazarus',false),
            ('Daniel Caesar',false),
            ('Danny Elfman',false),
            ('Daphni',false),
            ('Dave',false),
            ('Dear Humans',false),
            ('Denzel Curry',false),
            ('Disclosure',false),
            ('Dixon',false),
            ('DJ Holographic',false),
            ('DJ Koze',false),
            ('DJ Lord',false),
            ('Doja Cat',false),
            ('Dom Dolla',false),
            ('Duck Sauce',false),
            ('Duke Dumont',false),
            ('Ed Maverick',false),
            ('Ela Minus',false),
            ('Emo Nite',false),
            ('Emotional Oranges',false),
            ('Epik High',false),
            ('Eyedress',false),
            ('Fatboy Slim',false),
            ('88risings Head in the Clouds Forever',false),
            ('Finneas',false),
            ('Floating Points',false),
            ('Flume',false),
            ('Fred Again..',false),
            ('Freddie Gibbs & Madlib',false),
            ('GG Magree',false),
            ('Girl in Red',false),
            ('Giselle Woo & the Night Owls',false),
            ('Giveon',false),
            ('Griselda',false),
            ('Grupo Firme',false),
            ('Harry Styles',false),
            ('Hayden James',false),
            ('Holly Humberstone',false),
            ('Hot Chip',false),
            ('Idles',false),
            ('Inner Wave',false),
            ('Isaiah Rashad',false),
            ('J.I.D',false),
            ('Jamie xx',false),
            ('Japanese Breakfast',false),
            ('Jayda G',false),
            ('Jean Dawson',false),
            ('Jessie Reyez',false),
            ('John Summit',false),
            ('Joji',false),
            ('Karol G',false),
            ('Kim Petras',false),
            ('King Gizzard & The Lizard Wizard',false),
            ('Koffee',false),
            ('Kyary Pamyu Pamyu',false),
            ('LImpératrice',false),
            ('Lane 8',false),
            ('Lawrence',false),
            ('Layla Benitez',false),
            ('Lil Baby',false),
            ('Logic1000',false),
            ('Lost Kings',false),
            ('Louis the Child',false),
            ('Luttrell',false),
            ('Madeon',false),
            ('Maggie Rogers',false),
            ('Måneskin',false),
            ('Mannequin Pussy',false),
            ('Mariah the Scientist',false),
            ('Masego',false),
            ('Maxo Kream',false),
            ('Megan Thee Stallion',false),
            ('Meute',false),
            ('Miane',false),
            ('Michael Bibi',false),
            ('Mika',false),
            ('Molchat Doma',false),
            ('Natanael Cano',false),
            ('Nathy Peluso',false),
            ('Nicki Nicole',false),
            ('Niki',false),
            ('Nilüfer Yanya',false),
            ('Olivia OBrien',false),
            ('Omar Apollo',false),
            ('Orville Peck',false),
            ('Pabllo Vittar',false),
            ('Paco Osuna',false),
            ('Peggy Gou',false),
            ('Phoebe Bridgers',false),
            ('Pink Sweat$',false),
            ('Princess Nokia',false),
            ('PUP',false),
            ('Purple Disco Machine',false),
            ('Raveena',false),
            ('Rich Brian',false),
            ('Richie Hawtin',false),
            ('Rina Sawayama',false),
            ('Role Model',false),
            ('Run the Jewels',false),
            ('Sama Abdulhadi',false),
            ('Sampa the Great',false),
            ('Satori',false),
            ('Skegss',false),
            ('Slander',false),
            ('Slowthai',false),
            ('Snoh Aalegra',false),
            ('Sohmi',false),
            ('Solomun',false),
            ('Spiritualized',false),
            ('Steve Lacy',false),
            ('Still Woozy',false),
            ('Stromae',false),
            ('Surf Curse',false),
            ('Swedish House Mafia',false),
            ('Tchami',false),
            ('The Avalanches',false),
            ('The Blessed Madonna + Honey Dijon',false),
            ('The Chats',false),
            ('The Hu',false),
            ('The Marías',false),
            ('The Martinez Brothers',false),
            ('The Regrettes',false),
            ('Tokimonsta',false),
            ('Turnstile',false),
            ('Viagra Boys',false),
            ('Vince Staples',false),
            ('Vnssa',false),
            ('Wallows',false),
            ('Whipped Cream',false),
            ('Yard Act',false),
            ('Ye',false),
            ('Yola',false);
        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    }
}