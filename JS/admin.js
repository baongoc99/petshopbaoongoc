const ctx = document.getElementById('myChart').getContext('2d');
const earning = document.getElementById('earning').getContext('2d');

const myChartt = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Facebook', 'Youtube', 'Tiktok'],
        datasets: [{
            label: 'Traffic Source',
            data: [1200, 1600, 1015],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],

        }]
    },
    options: {
        responsive: true,
    }
});

const myChart = new Chart(earning, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'April', 'June', 'July', 'August', 'September', 'October', 'November', 'December', ],
        datasets: [{
            label: 'Earning',
            data: [40200, 10090, 30000, 55400, 70200, 45000,35000, 20578, 25622, 84044, 60285, 90000],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)'
            ],
        }]
    },
    options: {
        options: {
            responsive: true,
        }
    }
});