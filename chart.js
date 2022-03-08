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
            data: [591, 480, 412]
        }]
    },
    options: {
        title: {
            display: true,
            text: "World Wide Wine Production"
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
                    data: [260, 320, 150, 500],
                    fill: false,
                    pointRadius: 5,
                    borderColor: "rgba(255,0,0)",
                }],
        },
        options: {
            responsive: false,
            title: {
                display: true,
                text: "All Downloads"
            }
        }
    });

// ---------------------2---------------------------------

var crt1 = document.getElementById("linechart2").getContext('2d');
var myChart = new Chart(crt1,
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
                    borderColor: "rgba(255,0,0)",
                }],
        },
        options: {
            responsive: false,
            title: {
                display: true,
                text: "All Downloads"
            }
        }
    });
// ------------------------3------------------------------

var crt1 = document.getElementById("linechart3").getContext('2d');
var myChart = new Chart(crt1,
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
                    borderColor: "rgba(255,0,0)",
                }],
        },
        options: {
            responsive: false,
            title: {
                display: true,
                text: "All Downloads"
            }
        }
    });
// ------------------------4------------------------------

var crt1 = document.getElementById("linechart4").getContext('2d');
var myChart = new Chart(crt1,
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
                    borderColor: "rgba(255,0,0)",
                }],
        },
        options: {
            responsive: false,
            title: {
                display: true,
                text: "All Downloads"
            }
        }
    });