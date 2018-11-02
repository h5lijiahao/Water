var float={
    elFloat:document.querySelector('div.top a'),  //漂浮元素
    btn:document.querySelector('div.top button'),  //关闭按钮
    timer:null,
    x:0,y:0,  //起始坐标
    xSpeed:1,ySpeed:1,  //移动速度
    init() {
        this.start();
        this.stop();
        this.close();
    },
    start () {
        this.timer=setInterval(() => {
            var w=document.body.clientWidth-287;
            var h=document.body.clientHeight-132;
            if(this.x>w||this.x<0) this.xSpeed=-this.xSpeed;
            if(this.y>h||this.y<0) this.ySpeed=-this.ySpeed;
            this.x+=this.xSpeed;
            this.y+=this.ySpeed;
            this.elFloat.style.left=this.x+'px';
            this.elFloat.style.top=this.y+'px';},100);
    },
    stop() {
        this.elFloat.addEventListener("mouseenter",() => {
            clearInterval(this.timer);this.timer=null;
        });
        this.elFloat.addEventListener("mouseleave",
            this.start.bind(this)
        );
    },
    close() {
        this.btn.addEventListener("click",() => {
            this.elFloat.style.display='none';
            this.timer=null;
        });
    }
}.init();
