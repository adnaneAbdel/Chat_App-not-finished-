const User = require('../models/user')
const bcrypt = require('bcrypt')


exports.login = (req, res ,next ) => {
    const {username, password} = req.body ;
    User.findOne({username}).then(user => {
        if(!user || bcrypt.compareSync(password, user.password)) {
            return  res.status(401).json({
                message: 'your username or your passsword inccorct'
            }) }
        res.json(user.signJwt());   
    }).catch(next)
}

exports.register = async  (req, res, next ) =>{
  const { name:any , username , password} = req.body;
  
  const user =   User({
    name:any,
    username,
    password: bcrypt.hashSync(password, 8)
  })
  try{
    await user.save()
    res.json(user.signJwt());   
}catch (e){
    res.status(500).json({
        message: 'somthing was wrong'
    })
}

}