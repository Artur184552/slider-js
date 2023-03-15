let images = [{
    url: '../images/slider-images/img-1.jpg',
    city: 'Rostov-on-Don LCD admiral',
    cityPart: 'LCD admiral',
    area: '81 m2',
    repairTime: '3.5 months'
}, {
    url: '../images/slider-images/img-2.jpg',
    city: 'Sochi',
    cityPart: 'Thieves',
    area: '105 m2',
    repairTime: '4 months'
}, {
    url: '../images/slider-images/img-3.jpg',
    city: 'Rostov-on-Don',
    cityPart: 'Patriotic',
    area: '93 m2',
    repairTime: '3 months'
}]

function initSlider() {

    let sliderImages = document.querySelector('.images-div');
    let sliderDots = document.querySelector('.slider_dots');
    let cityOutput = document.querySelector('.city-p');
    let cityPartOutput = document.querySelector('.city-part');
    let areaOutput = document.querySelector('.apartement-p');
    let repairTimeOutput = document.querySelector('.repair-p');
    let btnAdmiral = document.querySelector('.admiral-title');
    let btnThieves = document.querySelector('.sochi-title');
    let btnPatriotic = document.querySelector('.patriot-title');

    initImages();
    initArrows();
    initDots();
    initParams();

    function initImages() {        // adding images
        images.forEach((image, index) => {

            let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" 
            style="background-image:url(${images[index].url});" data-index="${index}"></div>`;

            sliderImages.innerHTML += imageDiv;
        });
    }

    function initArrows() {       // processing interaction with arrows
        document.querySelectorAll('.arrow').forEach(arrow => {
            arrow.addEventListener('click', function() {
                let currentNumber = +sliderImages.querySelector('.active').dataset.index;
                let nextNumber;
                if (arrow.classList.contains('left-arrow')) {
                    nextNumber = currentNumber === 0? images.length - 1 : currentNumber - 1;
                } else {
                    nextNumber = currentNumber === images.length - 1? 0 : currentNumber + 1;
                }

                moveSlider(nextNumber);
            });
        });
    }

    function initDots() {        // creating 'dots'
        images.forEach((image, index) => {
            let dot = `<div class='slider_dots-item n${index} ${index === 0? 'active' : ''}' data-index='${index}'></div>`;
            sliderDots.innerHTML += dot;
        });
        sliderDots.querySelectorAll('.slider_dots-item').forEach(dot => {
            dot.addEventListener('click', function() {
                moveSlider(this.dataset.index);
            })
        })
    }

    function initParams() {          // creating blocks for new parameters
        let cityDiv = `<div class='slider_images_city'>${images[0].city}</div>`;
        cityOutput.innerHTML = cityDiv;

        let cityPartDiv = `<div class='slider_images_city-part'>${images[0].cityPart}</div>`;
        cityPartOutput.innerHTML = cityPartDiv;

        let areaDiv = `<div class='slider_images_area'>${images[0].area}</div>`;
        areaOutput.innerHTML = areaDiv;

        let repairTimeDiv = `<div class='slider_images_reapair-time'>${images[0].repairTime}</div>`;
        repairTimeOutput.innerHTML = repairTimeDiv;
    }

    function changeParams(num) {        // changes text content of new blocks
        let sliderCity = cityOutput.querySelector('.slider_images_city');
        sliderCity.innerHTML = images[num].city;

        let sliderCityPart = cityPartOutput.querySelector('.slider_images_city-part');
        sliderCityPart.innerHTML = images[num].cityPart;

        let sliderArea = areaOutput.querySelector('.slider_images_area');
        sliderArea.innerHTML = images[num].area;

        let sliderRepairTime = repairTimeOutput.querySelector('.slider_images_reapair-time');
        sliderRepairTime.innerHTML = images[num].repairTime;
    }



    function moveSlider(num) {        // changes slider
        sliderImages.querySelector('.active').classList.remove('active');
        sliderImages.querySelector('.n' + num).classList.add('active');
        sliderDots.querySelector(".active").classList.remove("active");
        sliderDots.querySelector(".n" + num).classList.add("active");
        changeParams(num);
        

        if (num === 0) {
            btnAdmiral.classList.add('active');
            btnPatriotic.classList.remove('active');
            btnThieves.classList.remove('active');
        }

        if (num === 1) {
            btnAdmiral.classList.remove('active');
            btnPatriotic.classList.remove('active');
            btnThieves.classList.add('active');

        }

        if (num === 2) {
            btnThieves.classList.remove('active');
            btnAdmiral.classList.remove('active');
            btnPatriotic.classList.add('active');
        }
    }



    btnAdmiral.addEventListener('click', () => {
        moveSlider(0);
    });

    btnThieves.addEventListener('click', () => {
        moveSlider(1);
    });

    btnPatriotic.addEventListener('click', () => {
        moveSlider(2);
    })

}

document.addEventListener('DOMContentLoaded', initSlider);