const express = require('express');
const path = require('path');
const router = express.Router();

router.get('*', (req, resp) => {

    //todo: get initial data
    const appData = {
        test: 'i was sent with initial </script><script>alert("xss check")</script> page load ',
    };

    resp.render('index', {
        base: path.resolve(__dirname, '../build', 'index.html'),
        appData
    });
});

module.exports = router;