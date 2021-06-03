class Iron{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options = {
      'density':5,
      'friction': 1.5,
      'restitution':0.5
    };
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.rectangle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
            rect(0, 0, 45,60);

			pop()
	}

}