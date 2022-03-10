var crt = document.getElementById("piechart").getContext('2d');
new Chart(crt, {
    type: "pie",
    data:
    {
        labels: ['Party hub pass', 'Disco dancer', 'Sparkling Nights'],
        datasets:
            [{
                backgroundColor:
                    [
                        'rgba(252, 3, 3)',
                        'rgba(3, 157, 252)',
                        'rgba(0, 255, 0)'
                    ],
                data: [591, 480, 412],
            }]
    },
    options: 
    {
        // layout:{
        //     padding: 0,
        // },
        // responsive:false,
        title:
        {
            display: true,
            text: "Top 3 events per View",
            fontSize: 15,
        },
        plugins: 
        {
            datalabels: {
                display:true,
                formatter: (value) => {
                  return value + ' views';
                // return crt.chart.data[crt.dataIndex]
            },
            color: 'white',
              }
        
        },
            legend: 
            {
                display: true,
                position: 'bottom',
                align: 'center',
                labels: 
                {
                    fontSize: 10,
                    boxWidth: 10,
                }
            }
        }
    });
// ---------------------1---------------------------------

var crt1 = document.getElementById("linechart").getContext('2d');
var myChart = new Chart(crt1,
    {
        type: "line",
        data:
        {
            labels: ['jan', 'feb', 'mar', 'apr'],
            datasets:
                [{
                    // label: 'All download',
                    data: [260, 320, 150, 500],
                    fill: false,
                    pointRadius: 5,
                    pointBackgroundColor: "rgb(226, 21, 182)",
                    borderColor: "rgb(226, 21, 182)",
                }],

        },
        options: 
        {
            layout:{
                padding: 50,
            },
            responsive: true,
            scales: 
            {
                xAxes: 
                [{
                    gridLines: {
                        display: false }
                }],
                yAxes: 
                [{
                    display: false,
                    gridLines: {
                    display: false
                    }
                }]
            },
            legend: 
            {
              display: false,
            },
            plugins: 
            {
            datalabels:  
            {
            color: "rgb(226, 21, 182)",
            display:true+'k',
            anchor: "end",
            align:"end"
            }
        }
    }
    });

// ---------------------2---------------------------------

var crt2 = document.getElementById("linechart2").getContext('2d');
var myChart = new Chart(crt2,
    {
        type: "line",
        data:
        {
            labels: ['jan', 'feb', 'mar', 'apr'],
            datasets:
                [{
                    data: [76, 59, 75, 120],
                    fill: false,
                    pointRadius: 5,
                    pointBackgroundColor: "rgb(226, 21, 182)",
                    borderColor: "rgb(226, 21, 182)",
                }],
        },
        options: 
        {
            layout:{
                padding: 50,
            },
            responsive: true,
            scales: 
            {
                xAxes: 
                [{
                    gridLines: {
                        display: false }
                }],
                yAxes: 
                [{
                    display: false,
                    gridLines: {
                    display: false
                    }
                }]
            },
            legend: 
            {
              display: false,
            },
            plugins: 
            {
            datalabels:  
            {
            color: "rgb(226, 21, 182)",
            display:true+'k',
            anchor: "end",
            align:"end"
            }
        }
    }
    });
// ------------------------3------------------------------

var crt3 = document.getElementById("linechart3").getContext('2d');
var myChart = new Chart(crt3,
    {
        type: "line",
        data:
        {
            labels: ['1-7', '8-15', '16-22', '23-29'],
            datasets:
                [{
                    data: [920, 2000, 1200, 1000],
                    fill: false,
                    pointRadius: 5,
                    pointBackgroundColor: "rgb(226, 21, 182)",
                    borderColor: "rgb(226, 21, 182)",
                }],
        },
        options: 
        {
            layout:{
                padding: 50,
            },
            responsive: true,
            scales: 
            {
                xAxes: 
                [{
                    gridLines: {
                        display: false }
                }],
                yAxes: 
                [{
                    display: false,
                    gridLines: {
                    display: false
                    }
                }]
            },
            legend: 
            {
              display: false,
            },
            plugins: 
            {
            datalabels:  
            {
            color: "rgb(226, 21, 182)",
            display:true+'k',
            anchor: "end",
            align:"end"
            }
        }
    }
    });
// ------------------------4------------------------------

var crt4 = document.getElementById("linechart4").getContext('2d');
var myChart = new Chart(crt4,
    {
        type: "line",
        data:
        {
            labels: ['1-7', '8-15', '16-22', '23-29'],
            datasets:
                [{
                    data: [920, 2000, 1200, 1000],
                    fill: false,
                    pointRadius: 5,
                    pointBackgroundColor: "rgb(226, 21, 182)",
                    borderColor: "rgb(226, 21, 182)",
                }],
        },
        options: 
        {
            maintainAspectRatio: true,
            layout:{
                padding: 50,
            },
            responsive: true,
            scales: 
            {
                xAxes: 
                [{
                    gridLines: {
                        display: false }
                }],
                yAxes: 
                [{
                    display: false,
                    gridLines: {
                    display: false
                    }
                }]
            },
            legend: 
            {
              display: false,
            },
            plugins: 
            {
            datalabels:  
            {
            color: "rgb(226, 21, 182)",
            display:true+'k',
            anchor: "end",
            align:"end"
            }
        }
    }
    });