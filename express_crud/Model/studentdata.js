const mongoose = require('mongoose');

const studentSchema =new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        roll:{
            type: String,
            required : true,
            unique: true,
        },
        branch:{
            type:String,
            required: true,
        }

    }
);

var Student=mongoose.model('studentdatas',studentSchema);
module.exports= Student;