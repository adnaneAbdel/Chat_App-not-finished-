const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const ModelSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true,
        maxlength: 20
    },
    username:{
        type: String,
        required : true,
        unique : true,
        maxlength: 20
    },
    password:{
        type: String,
        required : true
     
    },
    about:{
        type: String,
       maxlength: 100
     
    },
    avater: String
});

ModelSchema.methods.getDate = function(){
    return {
        id: this._id,
        name: this.name,
        username: this.username,
        about : this.about,
        avater: this.avater
    };
}

ModelSchema.methods.signJwt  = function(){
    let data = this.getDate();
    data.token = jwt.sign (data, process.env.JWT_SECRET)
    return data ;
}



ModelSchema.virtual('id').get(function() {
    return this._id.toHexString();
})

ModelSchema.set('toJSON', {virtuals: true});

const Model = mongoose.model ('User', ModelSchema);

module.exports = Model ;