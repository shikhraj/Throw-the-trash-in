class Paper {
  constructor(x, y, radius) {
      var options  ={
          isStatic:false
          
        }

    this.body = Bodies.circle(x, y, radius, options);
    this.radius = 2 * radius;

    
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill("red");
    ellipse(pos.x , pos.y, this.radius);

  }
};
