function Fruit(){
    this.x ;
    this.y ;
   
    var i = 0;
    this.pickLocation = function() {
        this.x = (Math.floor(Math.random() * rows - 1 ) + 1) * scale;
        this.y = (Math.floor(Math.random() * columns - 1 ) + 1) * scale;
        i++;
        
    }
    this.draw = function(){
        ctx.fillstyle = "FFFFFF";
        ctx.fillRect(this.x,this.y,scale,scale)
    }
}