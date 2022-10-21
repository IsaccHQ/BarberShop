const { Router } = require('express');
const router = Router();

router.get('/cliente', (req, res) => {
    res.send("Listado de clientes")
});

module.exports = router;