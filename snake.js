function Snake(){
    this.x =0;
    this.y =0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.total =0;
    this.tail = [];


    this.draw = function(){
        ctx.fillstyle = "FFFFFF";
        for(let i =0;i<this.tail.length - 1 ;i++)
        {
            ctx.fillRect(this.tail[i].x,this.tail[i].y,scale,scale);

        }

        ctx.fillRect(this.x,this.y,scale,scale);
    }

    this.update = function(){

    for(let i =0;i<this.tail.length - 1 ;i++)
    {
        this.tail[i] = this.tail[i+1];
    }
    
    this.tail[this.total - 1] = {x: this.x,y: this.y};

        this.x = this.xSpeed + (this.x);
        this.y = this.ySpeed + (this.y);

        if(this.x > canvas.width){
            alert("GAME OVER & SCORE = "+this.total)
        } 
        if(this.y > canvas.height){
            alert("GAME OVER & SCORE = "+this.total)
        } 
        if(this.x < 0){
            alert("GAME OVER & SCORE = "+this.total)
        } 
        if(this.y < 0){
            alert("GAME OVER & SCORE = "+this.total)
        } 
      

    }
    this.changeDirection = function(direction) {
        switch(direction) {
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = -scale *1;
                break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = scale *1;
                break; 
            case 'Left':
                this.xSpeed = -scale *1;
                this.ySpeed = 0;
                break;
            case 'Right':
                this.xSpeed = scale *1;
                this.ySpeed = 0;
                break;
        }

    }
    this.eat = function(fruit) {
        if(this.x === fruit.x && this.y === fruit.y){
            this.total++;
          
            return true;
        }
        return false;
    }
}