const express = require('express');
const router = express.Router();

const controllers = [
    'values'
]
controllers.forEach(controller => {
    router.use(`/${controller}`, require(`./${controller}`))
})

router.use('*', (req, resp) => resp.sendStatus(404));

module.exports = router;