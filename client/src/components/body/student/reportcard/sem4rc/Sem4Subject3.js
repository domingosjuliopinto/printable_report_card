import React from 'react';
import {useSelector} from 'react-redux'
import '../reportcard.css';

function Sem4Subject3(){
    const Sem4CMPN = () =>{
        const marks = useSelector(state => state.marks)
            const {sem4} = marks
            const term = sem4.aoa_t
            const unit = sem4.aoa_u
            const internal = sem4.aoa_i
            const total = (parseInt(term) + parseInt(unit) + parseInt(internal)).toString()
        return(
            <div className="Subject3">
                <h2> AOA </h2>
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
                            <th>Internals</th>
                            <td>{internal}</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <td>{total}</td>
                            <td>150</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    return(
        <div>
            {Sem4CMPN()}
        </div>
    )
}

export default Sem4Subject3