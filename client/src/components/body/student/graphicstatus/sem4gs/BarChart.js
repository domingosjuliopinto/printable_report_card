import React from 'react';
import {useSelector} from 'react-redux';
import {Bar} from 'react-chartjs-2';

const BarChart = () =>{
    const marks = useSelector(state => state.marks)
    const {sem4} = marks
    const p_am4 = sem4.am4_p
    const p_dbms = sem4.dbms_p
    const p_aoa = sem4.aoa_p
    const p_microp = sem4.microp_p
    const p_os = sem4.os_p
    const p_pp = sem4.pp_p
    const p_minipro2 = sem4.minipro2_p

    const all = useSelector(state => state.all)
    const {compare} = all

    var A = 0
    var B = 0
    var C = 0
    var D = 0
    var E = 0
    var F = 0
    var G = 0

   const call = () => {
       if(compare){
           compare.map(data =>{
                if(A<=data.am4_p){
                    A = data.am4_p
                }
                if(B<=data.dbms_p){
                    B = data.dbms_p
                }
                if(C<=data.aoa_p){
                    C = data.aoa_p
                }
                if(D<=data.microp_p){
                    D = data.microp_p
                }
                if(E<=data.os_p){
                    E = data.os_p
                }
                if(F<=data.pp_p){
                    F = data.pp_p
                }
                if(G<=data.minipro2_p){
                    G = data.minipro2_p
                }
                return null
            }   
            )
        }
    }

    return(
        <div>
            {
                call()
            }
            <div>
            <Bar
                data={{
                    labels: ['Am4', 'Dbms', 'Aoa', 'Microprocessor','Os','Pp','Mini Project 2'],
                    datasets: [{
                        label: 'Your Percentage',
                        data: [p_am4,p_dbms,p_aoa,p_microp,p_os,p_pp,p_minipro2],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(200, 249, 2, 0.6)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'lightgreen'
                        ],
                        borderWidth: 1
                    },
                    {
                        label: 'Highest Percentage',
                        data: [A,B,C,D,E,F,G],
                        backgroundColor: [
                            'orange'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'lightgreen'
                        ],
                        borderWidth: 1
                    }
                    ]
                }}
                height={400}
                weight={600}
                options={{
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: {
                                color: 'white',
                                font:{
                                    size:20
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            title: {
                                display:true,
                            },
                            ticks:{
                                font:{
                                    size:18
                                },
                                color:'white'
                            }
                        },
                        x: {
                            ticks:{
                                font:{
                                    size:18
                                },
                                color:'white'
                            }
                        }
                    }
                }}
            />
            </div>
            <h4 align="center" style={{ color: 'white' }}>Note: If failed in a subject, your graph won't show<br></br>If marks are not entered, the highest percentage graph won't display as well</h4>
        </div>
    )
}

export default BarChart