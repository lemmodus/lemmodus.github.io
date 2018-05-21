function Projectile(x, y) {
    
    this.x = x;
    this.y = y;
    this.prad = 5;
    this.toDelete = false;
       
    this.show = function() {
        
        noStroke();
        fill(14, 230, 183);
        rectMode(CENTER);
        rect(this.x, this.y, this.prad*2, this.prad*2);
        
    }
    
    this.move = function() {
        
        this.y = this.y -7;
        
    }
    
    this.hits = function(invader) {
        
        var d = dist(this.x, this.y, invader.x, invader.y);
        if (d < this.prad + invader.irad) {
            
            return true;
            
        }
        
        else {
            
            return false;
            
        }
        
    }
    
    this.evaporate = function() {
        
        this.toDelete = true;
        
    }

}