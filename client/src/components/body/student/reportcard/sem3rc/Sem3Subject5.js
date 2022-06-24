import React from 'react';
import {useSelector} from 'react-redux'
import '../reportcard.css';

function Sem3Subject5(){
    const Sem3CMPN = () =>{
        const marks = useSelector(state => state.marks)
            const {sem3} = marks
            const term = sem3.dlcoa_t
            const unit = sem3.dlcoa_u
            const internal = sem3.dlcoa_i
            const total = (parseInt(term) + parseInt(unit) + parseInt(internal)).toString()
        return(
            <div className="Subject5">
                <h2> DLCOA </h2>
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
                            <td>25</td>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <td>{total}</td>
                            <td>125</td>
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

export default Sem3Subject5