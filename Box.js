class Box{
    constructor(x, y, width, height){
        var options = {
            restitution: 0.8, 
            friction: 0.3,
            density: 1.0
          }
          this.body = Bodies.rectangle(x, y, width, height, options);
          this.width = width;
          this.height = height;
          World.add(myWorld, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
       // angleMode(RADIANS); //radians (PI is 180 degrees) is used in Matter.js, degrees is used in p5.play
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
    }
}