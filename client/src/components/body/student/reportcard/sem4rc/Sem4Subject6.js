import React from 'react';
import {useSelector} from 'react-redux'
import '../reportcard.css';

function Sem4Subject6(){
    const Sem4CMPN = () =>{
        const marks = useSelector(state => state.marks)
        const {sem4} = marks
        const total = sem4.pp_t
        return(
            <div className="Subject6">
                <h2> PP </h2>
                <table>
                    <tbody>
                        <tr>
                            <th></th>
                            <th>Scored</th>
                            <th>Out of</th>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <td>{total}</td>
                            <td>25</td>
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

export default Sem4Subject6