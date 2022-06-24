import React from 'react';
import {useSelector} from 'react-redux'
import '../reportcard.css';

function Sem3Footer(){
    var total ;
    var percentage ;
    var npercentage;
    var grade ;
    var result ;

    const Sem3CMPN = () =>{
        const marks = useSelector(state => state.marks)
        const {sem3} = marks

        const am3_t = sem3.am3_t
        const am3_u = sem3.am3_u
        const am3_i = sem3.am3_i
        const dsgt_t = sem3.dsgt_t
        const dsgt_u = sem3.dsgt_u
        const ds_t = sem3.ds_t
        const ds_u = sem3.ds_u
        const ds_i = sem3.ds_i
        const cg_t = sem3.cg_t
        const cg_u = sem3.cg_u
        const cg_i = sem3.cg_i
        const dlcoa_t = sem3.dlcoa_t
        const dlcoa_u = sem3.dlcoa_u
        const dlcoa_i = sem3.dlcoa_i
        const oop_t = sem3.oop_t
        const minipro1_t = sem3.minipro1_t

        const am3total = parseInt(am3_t) + parseInt(am3_u) + parseInt(am3_i)
        const dsgttotal = parseInt(dsgt_t) + parseInt(dsgt_u)
        const dstotal = parseInt(ds_t) + parseInt(ds_u) + parseInt(ds_i)
        const cgtotal = parseInt(cg_t) + parseInt(cg_u) + parseInt(cg_i)
        const dlcoatotal = parseInt(dlcoa_t) + parseInt(dlcoa_u) + parseInt(dlcoa_i)

        const ntotal = gettotal(am3total,dsgttotal,dstotal,cgtotal,dlcoatotal,oop_t,minipro1_t)
        total = (ntotal).toString()

        if(am3_t<32 || am3_u<8 || am3_i<10 || dsgt_t<32 || dsgt_u<8 || ds_t<32 || ds_u<8 || ds_i<20 || cg_t<32 || cg_u<8 || cg_i<20 || dlcoa_t<32 || dlcoa_u<8 || dlcoa_i<10 || oop_t<30 || minipro1_t<20){
            npercentage = 0.0
        }else{
            npercentage = getpercentage(ntotal)
        }

        percentage = (npercentage).toString()

        grade = getgrade(npercentage)

        result = getresult(grade)

    }
    const FootTemplate = () =>{
        return(
            <div>
                <div className="D2T1">
                    <table>
                        <tbody>
                            <tr>
                                <th>Overall Total</th>
                                <td bgcolor='white'>{total}</td>
                                <td bgcolor='white'>out of 775</td>
                                <th>Percentage</th>
                                <td bgcolor='white'>{percentage}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="D2T2">
                    <table>
                        <tbody>
                            <tr>
                                <th>Result</th>
                                <td bgcolor='white'>{result}</td>
                                <th>Grade</th>
                                <td bgcolor='white'>{grade}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    return(
        <div>
            {Sem3CMPN()}
            {FootTemplate()}
        </div>
    )
}

function gettotal(total1,total2,total3,total4,total5,total6,total7){
    const sendtotal = total1 + total2 + total3 + total4 + total5 + total6 + total7
    return sendtotal
}

function getpercentage(gettotalmarks){
    const sendpercentage = ((parseFloat(gettotalmarks)/775)*100).toFixed(3) 
    return sendpercentage
}

function getgrade(getpercentageof){
    if(getpercentageof>=80&&getpercentageof<=100){
        const sendgrade = 'O'
        return sendgrade
    }
    else if(getpercentageof>=75&&getpercentageof<80){
        const sendgrade = 'A'
        return sendgrade
    }
    else if(getpercentageof>=70&&getpercentageof<75){
        const sendgrade = 'B'
        return sendgrade
    }
    else if(getpercentageof>=60&&getpercentageof<70){
        const sendgrade = 'C'
        return sendgrade
    }
    else if(getpercentageof>=50&&getpercentageof<60){
        const sendgrade = 'D'
        return sendgrade
    }
    else if(getpercentageof>=45&&getpercentageof<50){
        const sendgrade = 'E'
        return sendgrade
    }
    else if(getpercentageof>=40&&getpercentageof<45){
        const sendgrade = 'P'
        return sendgrade
    }
    else if(getpercentageof>=0&&getpercentageof<40){
        const sendgrade = 'F'
        return sendgrade
    }
    else{
        const sendgrade = 'NA'
        return sendgrade
    }
}

function getresult(getgradeof){
    if(getgradeof === 'F'){
        const sendresult = 'Failed'
        return sendresult
    }
    else if(getgradeof === 'NA'){
        const sendresult = 'Error'
        return sendresult
    }
    else{
        const sendresult = 'Passed'
        return sendresult
    }
}

export default Sem3Footer