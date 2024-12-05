const ctx = document.getElementById('barchart').getContext('2d');
const barchart = new Chart(ctx, {
    type:'bar',
    data : {
        labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [{
            label: '% das PMEs investindo em tecnologia',
            data: [32.5, 37.5, 46, 48, 50, 55],
            backgroundColor: [
                'rgba(30,144,255,0.6)',
                'rgba(10,59,110,0.6)',
                'rgba(30,144,255,0.6)',
                'rgba(10,59,110,0.6)',
            ],
            borderColor: [
                'rgba(30,144,255,0.2)',
                'rgba(30,144,255,0.2)',
                'rgba(30,144,255,0.2)',
                'rgba(30,144,255,0.2)',
            ], 
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

