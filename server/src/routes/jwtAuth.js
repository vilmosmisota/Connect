const router = require('express').Router();
const pool = require("../db/index");
const bcrypt = require("bcrypt");


router.post("/register", async (req, res) => {
    try {

        //1. destructure req.body (name, email, password)
        const {name, email, password} = req.body;


        //2. check if user exists (if user exists throw an error)
        const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [email]);

        if(user.rows.length !== 0) {
            return res.status(401).send('User already exists');
        }

        //3. Bycript the user password
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);

        const bcryptPassword = await bcrypt.hash(password, salt);
        
        //4. enter the new user into database
        const newUser = await pool.query("INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *", [name, email, bcryptPassword]);

        res.send(newUser.rows[0]);


        //5. generating jwt token

    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
    }
})




module.exports = router;