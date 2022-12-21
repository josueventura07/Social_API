const router = require('express').Router()
const authServices = require('./auth.services')

router.post('/login', authServices.postLogin)
router.post('/recovery-password', authServices.postRecoveryToken)
<<<<<<< HEAD
router.post('/recovery-password/:id', authServices.patchPassword)
=======
router.patch('/recovery-password/:id', authServices.patchPassword)

>>>>>>> c86fa1f (add recovery password)
module.exports = router
