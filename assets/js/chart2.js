const ctx2 = document.getElementById('doughnut').getContext('2d');
const doughnut = new Chart(ctx2, {
    type:'doughnut',
    data : {
        labels: ['Não investem (LATAM%)', 'Investem (LATAM%)'],
        datasets: [{
            label: 'PMEs que investem em tecnologia na América do Sul',
            data: [55, 45],
            backgroundColor: [
                'rgba(30,144,255,0.6)',
                'rgba(10,59,110,0.6)',
            ],
            borderColor: [
                'rgba(30,144,255,0.9)',
                'rgba(10,59,110,0.9)',
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

