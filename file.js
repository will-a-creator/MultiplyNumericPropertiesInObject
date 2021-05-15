function multiplyNumeric(obj){

    for (let prop in obj){
        if(typeof obj[prop] == "number"){
            obj[prop] = obj[prop] * 2;
        }
    }


}


// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  
  // after the call
  menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };
