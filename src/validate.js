const jwt = require('jsonwebtoken')

module.exports = {
    verifyTokenAdmin: function (req, res, next) {
        const bearerHeader = req.headers['authorization'];
        if (typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(' ')
            const bearerToken = bearer[0];
            console.log(bearerHeader)
            req.token = bearerToken;
            jwt.verify(req.token, process.env.SECRET_KEY, (err, authData) => {
                console.log(req.token)
                if (err) {
                    res.send(403)
                }
                else if (authData.role == "admin" || authData.role == "superadmin") {
                    console.log(authData.role)
                    req.authData = authData
                    next()
                }
                else {
                    res.send(403)
                }
            })
        } else {
            res.send(403)
        }
    },
    verifyTokenSuperAdmin: function (req, res, next) {
        const bearerHeader = req.headers['authorization'];
        if (typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(' ')
            const bearerToken = bearer[0];
            console.log(bearerHeader)
            req.token = bearerToken;
            jwt.verify(req.token, process.env.SECRET_KEY, (err, authData) => {
                console.log(req.token)
                if (err) {
                    res.send(403)
                }
                else if (authData.role == "superadmin") {
                    console.log(authData.role)
                    req.authData = authData
                    next()
                }
                else {
                    res.send(403)
                }
            })
        } else {
            res.send(403)
        }
    },
    verifyTokenClient: function (req, res, next) {
        const bearerHeader = req.headers['authorization'];
        if (typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(' ')
            const bearerToken = bearer[0];
            console.log(bearerHeader)
            req.token = bearerToken;
            jwt.verify(req.token, process.env.SECRET_KEY, (err, authData) => {
                console.log(authData)
                if (err) {
                    res.send(403)
                }
                else if (authData.role == "client" || authData.role == "admin" || authData.role == "superadmin") {
                    console.log(authData.role)
                    req.authData = authData
                    next()
                }
                else {
                    res.send(403)
                }
            })
        } else {
            res.send(403)
        }
    },
    verifyTokenAmbassador: function (req, res, next) {
        const bearerHeader = req.headers['authorization'];
        if (typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(' ')
            const bearerToken = bearer[0];
            console.log(bearerHeader)
            req.token = bearerToken;
            jwt.verify(req.token, process.env.SECRET_KEY, (err, authData) => {
                console.log(authData)
                if (err) {
                    res.send(403)
                }
                else if (authData.role == "ambassador" || authData.role == "admin" || authData.role == "superadmin") {
                    console.log(authData.role)
                    req.authData = authData
                    next()
                }
                else {
                    res.send(403)
                }
            })
        } else {
            res.send(403)
        }
    }



}

