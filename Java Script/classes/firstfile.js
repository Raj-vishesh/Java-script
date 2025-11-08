class Human {


    age = 12;       ///  these all are public 
    #height = 129;           // to mark PRIVATE   use # before variable name 
    wt = 70;

    constructor(newAge , newwt , newheight){
        this.age = newAge;  
        this.#height = newheight;
        this.wt = newwt;
        
    }


    walking(){ 
        console.log("The Person Is Walking");
    }

    studying(){
        console.log("The person is studying ");
    }

      get fetchHeight(){  
        return  this.#height      //  getter function to get private variable value
    }

    set setHeight(h){       // setter function to set private variable value
        this.#height = h;
    }

}

let a = new Human(15 , 80 , 130);        // creation of a object 

console.log(a.walking);       //  this will only go to the wlaking function 
a.walking();        // this will print the part in walking fucntion 
console.log(a.age);

console.log(fetchHeight);       //  this will give error as height is private     .... .   so to remove error we will declare this or use two functions get and set function in class 
