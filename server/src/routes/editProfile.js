const router = require("express").Router();
const pool = require("../db/index");



//get all the posts
router.get("/", async (req, res) => {
    try {
        



    } catch (error) {
        console.error(error.message)
        res.status(500).json('Server Error')
    }
})






module.exports = router;