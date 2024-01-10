document.addEventListener("DOMContentLoaded", function () {
    var data = {
        labels: [20, 25, 35, 40, 60, 65],
        datasets: [{
            label: "Retirement Income",
            data: [100, 150, 200, 250, 300,350], 
            backgroundColor: [
                'blue'
            ],
            borderColor:  'blue',
            borderWidth: 1,
            barPercentage: 0.5,
        }],
    };

    // Chart configuration
    var options = {
        scales: {
            x: {
                title: {
                    display: true,
                    
                },
                beginAtZero: false,
                min: 20,
                max: 65,
                step: 5,
                grid: {
                    drawOnChartArea: false, 
                },
                ticks: {
                    maxRotation: 0, 
                },
            },
            y: {
                title: {
                    display: true,
                    
                },
                beginAtZero: true,
                min: 0,
                max: 350,
                step: 50,
            },
        },
        
    };

    var ctx = document.getElementById('retirementIncomeChart');
    if (ctx) {
        var retirementIncomeChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options,
        });
    } else {
        console.error("Canvas element not found");
    }
});


const employeePercentageInput = document.getElementById('employeePercentage');
const selectedEmployeePercentage = document.getElementById('selectedEmployeePercentage');
const retirementAgeInput = document.getElementById('retirementAge');
const selectedRetirementAge = document.getElementById('selectedRetirementAge');

employeePercentageInput.addEventListener('input', (event) => {
    const value = event.target.value;
        selectedEmployeePercentage.textContent = `${value}%`;
        selectedEmployeePercentage.style.backgroundColor = 'white'; 
        selectedEmployeePercentage.style.color = 'black';       
});

retirementAgeInput.addEventListener('input', (event) => {
    selectedRetirementAge.textContent = event.target.value;
});