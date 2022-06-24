import React from 'react';
import {useSelector} from 'react-redux'
import '../reportcard.css';

function Sem3Subject6(){
    const Sem3CMPN = () =>{
        const marks = useSelector(state => state.marks)
        const {sem3} = marks
        const total = sem3.oop_t
        return(
            <div className="Subject6">
                <h2> OOP </h2>
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
                            <td>75</td>
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

export default Sem3Subject6