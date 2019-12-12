; +function () {
    window.Slider = class Slider {
        constructor(dom, arr) {
            let ul = document.createElement('ul');
            ul.classList.add('slider');

            this.slides = []; // для хранения слайдов и их дальнейшего перебора
            this.current_slide = 0;

            for (let i = 0; i < arr.length; i++) {
                let li = document.createElement('li');
                let img = document.createElement('img');
                img.setAttribute('src', arr[i]);
                li.appendChild(img);
                ul.appendChild(li);
                this.slides.push(li);
            }

            dom.appendChild(ul);
        }

        run(){
            this.nextSlide();
            let self = this; // промежуточная перменная для передачи контекста this в функцию 
            setInterval(function(){
                self.nextSlide();
            }, 4000);
            /*
            setInterval((аргументы стрелочной функции)=>{
                this.nextSlide(); // тело стрелочной функции
            }, 4000);*/ 
        }

        nextSlide(){
            this.slides[this.current_slide].classList.remove('active');
            this.current_slide++;
            this.current_slide = this.current_slide < this.slides.length ? this.current_slide : 0;
            this.slides[this.current_slide].classList.add('active');
        }; //привяжем контекст навсегда

    }
}();