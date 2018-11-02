var slider={
    box:document.querySelector('div.slider'),
    img:document.querySelector('div.slider img'),
    points:document.querySelectorAll('div.slider li'),
    right:document.querySelector('div.slider a.fr'),
    left:document.querySelector('div.slider a.fl'),
    currentImg:0,  //当前图片下标
    timer:null,
    init() {
        this.autoSlide()
        this.stop()
        this.next()
        this.prev()
        this.handSlide();
    },
    move() {
        if(this.currentImg==5) this.currentImg=0;
        if(this.currentImg==-1) this.currentImg=4;
        this.img.src=`images/slider/${this.currentImg}.jpg`;
        for(var i=0;i<this.points.length;i++){
            this.points[i].className="";
        }
        this.points[this.currentImg].className="on";
    },
    next() {
        this.right.addEventListener('click',()=> {
            this.currentImg++;
            this.move();
        });
    },
    prev() {
        this.left.addEventListener('click',()=> {
            this.currentImg--;
            this.move();
        });
    },
    autoSlide() {
        this.timer=setInterval(()=>{
            this.currentImg++;
            this.move()
        },5000);
    },
    stop() {
        this.box.addEventListener('mouseenter',()=>{
            clearInterval(this.timer);
            this.timer=null;
            this.left.style.display='block';
            this.right.style.display='block';
        });
        this.box.addEventListener('mouseleave',()=>{
            this.autoSlide();
            this.left.style.display='none';
            this.right.style.display='none';
        });
    },
    handSlide() {
        var ul=document.querySelector('div.slider ul');
        /*ul.addEventListener('click',(e)=>{
                var target=e.target;
                if(target.nodeName=='LI'){
                    this.move();
                    this.currentImg=target.innerHLML-1;
                    console.log(target.innerHTML,this.currentImg);
                } 
            },true);*/
                
            for(var i=0;i<this.points.length;i++){
                this.currentImg=i;
                this.points[i].onclick=()=>{
                    this.move()
                    console.log(this.currentImg,i);
                };
            }  
            
    
    }
}.init();