import React from 'react';
import {useSelector} from 'react-redux';
import {Bar} from 'react-chartjs-2';

const BarChart = () =>{
    const marks = useSelector(state => state.marks)
    const {sem3} = marks
    const p_am3 = sem3.am3_p
    const p_dsgt = sem3.dsgt_p
    const p_ds = sem3.ds_p
    const p_cg = sem3.cg_p
    const p_dlcoa = sem3.dlcoa_p
    const p_oop = sem3.oop_p
    const p_minipro1 = sem3.minipro1_p

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
                if(A<=data.am3_p){
                    A = data.am3_p
                }
                if(B<=data.dsgt_p){
                    B = data.dsgt_p
                }
                if(C<=data.ds_p){
                    C = data.ds_p
                }
                if(D<=data.cg_p){
                    D = data.cg_p
                }
                if(E<=data.dlcoa_p){
                    E = data.dlcoa_p
                }
                if(F<=data.oop_p){
                    F = data.oop_p
                }
                if(G<=data.minipro1_p){
                    G = data.minipro1_p
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
                    labels: ['Am3', 'Dsgt', 'Ds', 'Cg','Dlcoa','Oop','Mini Project 1'],
                    datasets: [{
                        label: 'Your Percentage',
                        data: [p_am3,p_dsgt,p_ds,p_cg,p_dlcoa,p_oop,p_minipro1],
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