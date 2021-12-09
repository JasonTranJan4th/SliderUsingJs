document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const sliderMain = document.querySelector(".slider-main");
    const sliderItems = document.querySelectorAll(".slider-item");
    const nextBtn = document.querySelector(".slider-next");
    const nextPrev = document.querySelector(".slider-prev");
    const dotItems = document.querySelectorAll(".slider-dot-item");
    const sliderItemWidth = sliderItems[0].offsetWidth; // lấy độ rộng của phần tử đầu tiên (vì các ptu đều có độ roong = nhau nên chỉ cần lấy 1 ptu đầu)
    const sliderLength = sliderItems.length;
    console.log(sliderLength);
    let positionX = 0;
    let index = 0;


    nextBtn.addEventListener("click", () => {
        handleChangeSlide(1);
    });

    nextPrev.addEventListener("click", () => {
        handleChangeSlide(-1);
    });

    [...dotItems].forEach((item) => item.addEventListener("click", (event) => {
        [...dotItems].forEach((ele) => ele.classList.remove("active"));
        event.target.classList.add("active");
        const slideIndex = parseInt(event.target.dataset.index); // lấy dc giá trị của data-index khi dc click
        index = slideIndex;
        positionX = -1 * index * sliderItemWidth;
        sliderMain.style = `transform:translateX(${positionX}px)`;
    }))

    const handleChangeSlide = (direction) => {
        if(direction === 1) {
            if(index >= sliderLength -1 ){
                index = sliderLength - 1;
                return
            };
            positionX = positionX - sliderItemWidth;
            sliderMain.style = `transform:translateX(${positionX}px)`;
            index++;
        }
        else if(direction === -1) {
            if(index <= 0) {
                index = 0;
                return;
            }
            positionX = positionX + sliderItemWidth;
            sliderMain.style = `transform:translateX(${positionX}px)`;
            index--;
        }
        [...dotItems].forEach((ele) => ele.classList.remove("active"));
        dotItems[index].classList.add("active");
    }

},false)