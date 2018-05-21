function Ship() {

    this.x = width/2;
    this.smove = 0;
    
    this.show = function() {
        
        fill(180, 175, 140);
        rectMode(CENTER);
        rect(this.x, height-20, 20, 40);
        
    }
    
    this.move = function() {
        
        this.x += this.smove*5;
        
    }
    
    this.setDirection = function(direction) {
        
        this.smove = direction;
        
    }
}