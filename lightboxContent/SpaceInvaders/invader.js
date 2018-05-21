function Invader(x, y) {
    
    this.x = x;
    this.y = y;
    this.irad = 18;
    this.imove = 2;
    this.ishift = 30;
    this.toDelete = false;
    
    this.move = function() {
        
        this.x = this.x + this.imove;
        
    }
    
    this.shift = function() {
        
        this.y = this.y + this.ishift;
        this.imove = this.imove * -1;
        
    }
    
    this.explode = function() {
        
        fill(252, 61, 8);
        ellipse(this.x, this.y, (this.irad+8)*2, (this.irad+4)*2);
        this.toDelete = true;
        
    }
    
    this.show = function() {
        
        fill(245, 90, 12);
        ellipse(this.x, this.y, this.irad*2, this.irad*2);
        
    }

}