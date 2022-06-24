import React, {useState } from 'react';
import {useSelector} from 'react-redux';

const initialState = {
    percent:'',
    choice: 'Great',
}

function Flex(){
    const [stats, setStats] = useState(initialState)
    const {percent,choice} = stats

    const marks = useSelector(state => state.marks)
    const {sem3} = marks

    const handleChangeInput = e => {
        const {name, value} = e.target
        setStats({...stats, [name]:value, err: '', success: ''})
    }

    const call1 = () =>{
        if(sem3 && percent){
            return(
            sem3.map(data => (
                <div key={data._id}>
                    <ul>
                        {
                            data.am3_p>=percent
                            ? <li>{data.pid} &emsp;&emsp; {data.am3_p}</li>
                            : null
                        }
                    </ul>
                </div>
            )
            ))
        }
    }

    const call2 = () =>{
        if(sem3 && percent){
            return(
            sem3.map(data => (
                <div key={data._id}>
                    <ul>
                        {
                            data.am3_p<=percent
                            ? <li>{data.pid} &emsp;&emsp;  {data.am3_p}</li>
                            : null
                        }
                    </ul>
                </div>
            )
            ))
        }
    }

    return(
        <div>
            <div className="flexoutput">
                {
                    choice ==='Great'
                    ?call1()
                    :(choice==='Less'
                    ?call2()
                    :<p>No Percentage entered</p>
                    )
                }
            </div>
            <div className="flexchoice">
                <form>
                    <input type="number" placeholder="Enter Percentage" id="percent"
                        value={percent} name="percent" onChange={handleChangeInput} min="0" max="100"/>
                    <br></br>
                    <select name="choice" id="choice" value={choice} onChange={handleChangeInput}>
                        <option value='Great'>Greater than equal too</option>
                        <option value='Less'>Lesser than equal too</option>
                    </select>     
                </form>
            </div>
        </div>
    )
}

export default Flex