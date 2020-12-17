

function Touching(bodyA,bodyB){
    if (bodyA.x-bodyB.x<=bodyB.width/2+bodyA.width/2){
        return true;
    }

    else{
        return false;
    }
}











