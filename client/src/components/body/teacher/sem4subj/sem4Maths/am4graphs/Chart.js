import React from 'react';
import {Bar, Pie} from 'react-chartjs-2';
import {useSelector} from 'react-redux';

const Chart = () =>{
    const marks = useSelector(state => state.marks)
    const {sem4} = marks

     var A = 0
     var B = 0
     var C = 0
     var F = 0

    const call = () =>{
        if(sem4){
            sem4.map(data=>{
                if(data.am4_p>=75 && data.am4_p<=100){
                    A+=1
                }
                else if(data.am4_p>=60 && data.am4_p<75){
                    B+=1
                }
                else if(data.am4_p>=40 && data.am4_p<60){
                    C+=1
                }
                else{
                    F+=1
                }
                return null
            })
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
                    labels: ['0%', '40%-59%', '60%-74%', '75%-100%'],
                    datasets: [{
                        label: '# of Students',
                        data: [F,C,B,A],
                        backgroundColor: [
                            'red',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(200, 249, 2, 0.6)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
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
            <br></br>
            <div>
                <Pie
                    data={{
                        labels: ['0%', '40%-59%', '60%-74%', '75%-100%'],
                        datasets: [{
                            label: '# of Students',
                            data: [F,C,B,A],
                            backgroundColor: [
                                'red',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(200, 249, 2, 0.6)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
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
                                    color:'white',
                                    display:false
                                }
                            },
                            x: {
                                ticks:{
                                    font:{
                                        size:18
                                    },
                                    color:'white',
                                    display:false
                                }
                            }
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default Chart