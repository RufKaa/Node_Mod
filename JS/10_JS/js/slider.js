;+function(){
    window.Slider = function Slider(dom, arr){
        let ul = document.createElement('ul');
        ul.classList.add('slider');
        
        let slides = []; // для хранения слайдов и их дальнейшего перебора
        let current_slide = 0;

        for (let i = 0; i < arr.length; i++){
            let li = document.createElement('li');
            let img = document.createElement('img');
            img.setAttribute('src', arr[i]);
            li.appendChild(img);
            ul.appendChild(li);
            slides.push(li);
        }
        
        dom.appendChild(ul);

        this.run = function(){
            this.nextSlide();
            setInterval(this.nextSlide, 4000);
        }

        this.nextSlide = function(){
            slides[current_slide].classList.remove('active');
            current_slide++;
            current_slide = current_slide < slides.length ? current_slide : 0;
            slides[current_slide].classList.add('active');
        }.bind(this); //привяжем контекст навсегда

    }
}();