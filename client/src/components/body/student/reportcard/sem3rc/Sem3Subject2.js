import React from 'react';
import {useSelector} from 'react-redux'
import '../reportcard.css';

function Sem3Subject2(){
    const Sem3CMPN = () =>{
        const marks = useSelector(state => state.marks)
                const {sem3} = marks
                const term = (sem3.dsgt_t)
                const unit = (sem3.dsgt_u)
                const total = (parseInt(term) + parseInt(unit)).toString()
        return(
            <div className="Subject2">
                <h2> DSGT </h2>
                <table>
                    <tbody>
                            <tr>
                                <th></th>
                                <th>Scored</th>
                                <th>Out of</th>
                            </tr>
                            <tr>
                                <th>Term Exam</th>
                                <td>{term}</td>
                                <td>80</td>
                            </tr>
                            <tr>
                                <th>Unit Test</th>
                                <td>{unit}</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <th>Total</th>
                                <td>{total}</td>
                                <td>100</td>
                            </tr>
                    </tbody>
                </table>
            </div>
        )
    }
    
    return(
        <div>
             {Sem3CMPN()}
        </div>
    )
}

export default Sem3Subject2