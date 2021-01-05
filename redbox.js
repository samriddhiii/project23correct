class redbox {
     constructor(xpos, ypos, width, height)
     {
     this.body = Bodies.rectangle(xpos,ypos,width,height);
     World.add(world,this.body);
     
     this.width= width;
     this.height= height;
     }

    display()
    {
     push()
     rectMode(CENTER)
     fill("red")
     var position= this.body.position;
     rect(position.x,position.y,this.width,this.height)
     pop()
    }
}