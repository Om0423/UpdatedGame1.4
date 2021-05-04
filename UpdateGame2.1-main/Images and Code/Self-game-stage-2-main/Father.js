class Father {
    constructor(x,y){
        var options = {
            isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
        }
        this.image = loadImage("images/father.jpg");
        this.father = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.father)
    }

    display(){
        var pos = this.father.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
    }
}