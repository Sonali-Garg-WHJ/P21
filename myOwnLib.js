function isTouching(obj1,obj2){
    if (obj2.x-obj1.x <= (obj1.width+obj2.width)/2 
    && obj1.x-obj2.x < (obj2.width+obj1.width)/2 
    && obj1.y-obj2.y<(obj1.height+obj2.height)/2 
    && obj2.y-obj1.y< (obj2.height+obj1.height)/2){
    
      return true;
      }
      else {
        return false;
      }
    }
    
    function BounceOff(obj1,obj2){
      if (obj2.x-obj1.x < (obj1.width+obj2.width)/2 
    && obj1.x-obj2.x < (obj2.width+obj1.width)/2 
    && obj1.y-obj2.y<(obj1.height+obj2.height)/2 
    && obj2.y-obj1.y< (obj2.height+obj1.height)/2){
      
      obj1.velocityX = obj1.velocityX*(-1);
      obj1.velocityY = obj1.velocityY*(-1);
      
    } 
    }
    