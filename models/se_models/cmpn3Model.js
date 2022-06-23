const mongoose = require('mongoose')
//t-term , u-unit, i-internals
const CMPN3Schema= new mongoose.Schema({
    pid: {
        type : Number
        },
    am3_t: {
        type : Number
        },
    am3_u: {
            type : Number
         },
    am3_i: {
        type : Number
        },
    am3_p: {
        type : Number
    },
    cg_t: {
        type : Number
        },
    cg_u: {
            type : Number
         },
    cg_i: {
        type : Number
        },
    cg_p: {
        type : Number
    },
    dlcoa_t: {
        type : Number
        },
    dlcoa_u: {
            type : Number
         },
    dlcoa_i: {
        type : Number
        },
    dlcoa_p: {
        type : Number
    },
    ds_t: {
        type : Number
        },
    ds_u: {
            type : Number
         },
    ds_i: {
        type : Number
        },
    ds_p: {
        type : Number
    },
    dsgt_t: {
        type : Number
        },
    dsgt_u: {
            type : Number
         },
    dsgt_p: {
            type : Number
        },
    minipro1_t: {
        type : Number
        },
    minipro1_p: {
        type : Number
    },
    oop_t: {
        type : Number
        },
    oop_p: {
        type : Number
    }
},{timestamps:true})

module.exports = mongoose.model("CMPN_Sem3",CMPN3Schema)