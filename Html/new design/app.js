/* ----------------------------- DONUT CHART JS START ----------------------------- */

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Mobile', 'Desktop', 'Tablet'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['#303030', '#FDD547', '#FF5B79'],
            data: [60, 20 ,20],
            hover:{
                mode: 'nearest',
                intersect: true,
                axis: 'y',
                animationDuration: 400,
            }
        }]
    },

    // Configuration options go here
    options: {
        responsive: true,
        responsiveAnimationDuration: 10,
        maintainAspectRatio: false,
        hover:{
            intersect: true,
        },
        legend: {
            display: true,
            position: 'left',
            align: 'center',
            labels: {
                fontColor: '#000',
                boxWidth: 9,
                usePointStyle: true,
                fontStyle: 'bold',
                fontSize: 11
            }
        }
    }

});

/* ----------------------------- DONUT CHART JS FINISH ----------------------------- */

/* ---------------------------- BAR CHART START ---------------------------- */


var ctx = document.getElementById('barChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Mobile', 'Desktop', 'Tablet', 'lol', 'facebook', 'instagram'],
        datasets: [{
            backgroundColor: '#FF5B79',
            data: [80, 60, 40, 70, 100, 70],
        }]
    },

    // Configuration options go here
    options: {
        responsive: true,
        responsiveAnimationDuration: 10,
        maintainAspectRatio: false,
        hover:{
            intersect: true,
        },
        legend: {
            display: false,
        },
        scales: {
            offset: true,
            xAxes:[{
                display: false,

                ticks: {
                    display:false,
                }
            }],
            yAxes: [{
                stacked: true,
                display: true,
                ticks: {
                    display:false,
                }
            }],
        }
    }

});


/* ---------------------------- BAR CHART FINISH --------------------------- */

/* ------------------------- SCROLL ANIMATION START ------------------------- */

const windowsPosition = window.innerHeight;
function featuresAnimation(){
    const animateElements = document.querySelectorAll(".feature")
    animateElements.forEach(element=>{
        const elementPosition = element.getBoundingClientRect().top;
        if(elementPosition < windowsPosition){
            element.setAttribute("style","opacity: 1; transform: translate(0%); transition: 1s ease-out;")
        }
    })
}

window.addEventListener("scroll", featuresAnimation);

function aboutAnimation(){
    const animateElementsShape = document.querySelectorAll(".shape canvas");
    const animateElementsContent = document.querySelector(".about-content");
    const contentElementPosition = animateElementsContent.getBoundingClientRect().top;

    if(contentElementPosition < windowsPosition){
        animateElementsContent.setAttribute("style","transform: translateX(0%); transition: 1s ease-out; opacity: 1")
    }

        animateElementsShape.forEach(element=>{
        const shapeElementPosition = element.getBoundingClientRect().top;
        if(shapeElementPosition < windowsPosition){
            element.setAttribute("style","transform: scale(1); transition: 0.5s ease-out;")
        }
    })
}

window.addEventListener("scroll", aboutAnimation);

function teamAnimation(){
    const animateElements = document.querySelectorAll(".member-card")
    animateElements.forEach(element=>{
        const elementPosition = element.getBoundingClientRect().top;
        if(elementPosition < windowsPosition){
            element.setAttribute("style","opacity: 1; transform: translateY(0%); transition: 1s ease-out;")
        }
    })
}

window.addEventListener("scroll", teamAnimation);

function activityAnimation(){
    const animateLeftElements = document.querySelectorAll(".animate-left");
    const animateRightElements = document.querySelectorAll(".animate-right");
    const animateInformations = document.querySelectorAll(".information div")

    animateLeftElements.forEach(leftElement=>{
        leftElementPosition = leftElement.getBoundingClientRect().top;
        if(leftElementPosition < windowsPosition){
            leftElement.setAttribute("style","transform: translateX(0%); opacity: 1; transition: 1s ease-out;");
        }
    })

    animateRightElements.forEach(rightElement=>{
        rightElementPosition = rightElement.getBoundingClientRect().top;
        if(rightElementPosition < windowsPosition){
            rightElement.setAttribute("style","transform: translateX(0%); opacity: 1; transition: 1s ease-out;");
        }
    })

    animateInformations.forEach(animateInformation=>{
        informationPosition = animateInformation.getBoundingClientRect().top;
        if(informationPosition < windowsPosition){
            animateInformation.setAttribute("style","transform: translateY(0%); opacity: 1; transition: 0.5s ease-out")
        }
    })
}

window.addEventListener("scroll", activityAnimation);


/* ------------------------- SCROLL ANIMATION FINISH ------------------------ */