class Stone {
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options = {
      'density':5,
      'friction': 1.0,
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
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("yellow");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
            rect(0, 0, 30, 40);

			pop()
	}

}