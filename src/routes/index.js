const router = require('express').Router()

router.get('/clientes', (req, res)=>{
    res.send({
        ok:12
    })
})

module.exports = router