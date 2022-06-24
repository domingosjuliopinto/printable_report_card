import React from 'react';
import {useSelector} from 'react-redux'
import '../reportcard.css';

function Sem4Footer(){
    var total ;
    var percentage ;
    var npercentage;
    var grade ;
    var result ;

    const Sem4CMPN = () =>{
        const marks = useSelector(state => state.marks)
        const {sem4} = marks

        const am4_t = sem4.am4_t
        const am4_u = sem4.am4_u
        const am4_i = sem4.am4_i
        const dbms_t = sem4.dbms_t
        const dbms_u = sem4.dbms_u
        const dbms_i = sem4.dbms_u
        const aoa_t = sem4.aoa_t
        const aoa_u = sem4.aoa_u
        const aoa_i = sem4.aoa_i
        const microp_t = sem4.microp_t
        const microp_u = sem4.microp_u
        const microp_i = sem4.microp_i
        const os_t = sem4.os_t
        const os_u = sem4.os_u
        const os_i = sem4.os_i
        const pp_t = sem4.pp_t
        const minipro2_t = sem4.minipro2_t

        const am4total = parseInt(am4_t) + parseInt(am4_u) + parseInt(am4_i)
        const dbmstotal = parseInt(dbms_t) + parseInt(dbms_u) + parseInt(dbms_i)
        const aoatotal = parseInt(aoa_t) + parseInt(aoa_u) + parseInt(aoa_i)
        const microptotal = parseInt(microp_t) + parseInt(microp_u) + parseInt(microp_i)
        const ostotal = parseInt(os_t) + parseInt(os_u) + parseInt(os_i)

        const ntotal = gettotal(am4total,dbmstotal,aoatotal,microptotal,ostotal,pp_t,minipro2_t)
        total = (ntotal).toString()

        if(am4_t<32 || am4_u<8 || am4_i<10 || dbms_t<32 || dbms_u<8 || dbms_i<20 || aoa_t<32 || aoa_u<8 || aoa_i<20 || microp_t<32 || microp_u<8 || microp_i<10 || os_t<32 || os_u<8 || os_i<20 || pp_t<10 || minipro2_t<20){
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
            {Sem4CMPN()}
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

export default Sem4Footer