import React from 'react';
import {useSelector} from 'react-redux';

function TopPass(){
    const marks = useSelector(state => state.marks)
    const {sem4} = marks
    
    const call=()=>{
        if(sem4){
            var pass = 0
            var fail = 0
            var n = 0
            return(
                <div>
                    {
            sem4.map(data =>{
                        n+=1
                        data.aoa_p===0.0
                        ?fail+=1
                        :pass+=1
                        return null
                    }   
                )
            }
                <br></br>
                <br></br>
                <li>pass = {pass}</li>
                <li>pass percentage = {(pass * 100)/n}%</li>
                <br></br>
                <br></br>
                <li>fail = {fail}</li>
                <li>fail percentage = {(fail * 100)/n}%</li>
            </div>
            )
        }
    }

    return(
        <div>
            <div className="passfail">
              {call()}
            </div>
        </div>
    )
}

export default TopPass