const mongoose = require('mongoose')
//t-term , u-unit, i-internals
const CMPN4Schema= new mongoose.Schema({
    pid: {
        type : Number
        },
    am4_t: {
        type : Number
        },
    am4_u: {
            type : Number
         },
    am4_i: {
        type : Number
        },
    am4_p: {
        type : Number
        },
    microp_t: {
        type : Number
        },
    microp_u: {
            type : Number
         },
    microp_i: {
        type : Number
        },
    microp_p: {
        type : Number
        },
    os_t: {
        type : Number
        },
    os_u: {
            type : Number
         },
    os_i: {
        type : Number
        },
    os_p: {
        type : Number
        },
    aoa_t: {
        type : Number
        },
    aoa_u: {
            type : Number
         },
    aoa_i: {
        type : Number
        },
    aoa_p: {
        type : Number
        },
    dbms_t: {
        type : Number
        },
    dbms_u: {
            type : Number
         },
    dbms_i: {
        type : Number
        },
    dbms_p: {
        type : Number
        },
    minipro2_t: {
        type : Number
        },
    minipro2_p: {
        type : Number
        },
    pp_t: {
        type : Number
        },
    pp_p: {
        type : Number
        },
},{timestamps:true})

module.exports = mongoose.model("CMPN_Sem4",CMPN4Schema)