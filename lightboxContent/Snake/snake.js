function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];

    this.direction = function(x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }

    this.eat = function(pos) {
        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
            this.total++;
            return true;
        }
        else {
            return false;
        }
    }

    this.death = function() {
        for (var i = 0; i < this.tail.length; i++) {
            var pos = this.tail[i];
            var d = dist(this.x, this.y, pos.x, pos.y);
            if (d < 1) {
                console.log('game over');
                this.total = 0;
                this.tail = [];
            }
        }
    }

    this.update = function() {
        if (this.total === this.tail.length) {
            for (var i = 0; i < this.tail.length-1; i++) {
            this.tail[i] = this.tail[i+1];
            }
        }
        this.tail[this.total-1] = createVector(this.x, this.y);

        this.x = this.x + this.xspeed*gridscale;
        this.y = this.y + this.yspeed*gridscale;

        this.x = constrain(this.x, 0, width-gridscale);
        this.y = constrain(this.y, 0, height-gridscale);

    }

    this.show = function() {
        var color = constrain(this.tail.length*10, 0, 255);
        fill(color, color, color);
        for (var i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, gridscale, gridscale);
            }
        rect(this.x, this.y, gridscale, gridscale);
    }
}
