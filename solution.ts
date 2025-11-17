// problem1
const formatValue=<T> (value:T)=>{
     if (typeof(value)==="string"){

    return value.toUpperCase();

   }

    
   else if (typeof(value)==="number"){

    return value*10;

   }
   else if (typeof(value)==="boolean"){

    if (value===true){
        return false
    }
    else return true
  

   }


}


// problem2
 const getLength=<T>(value:string|T[])=>{
    if (typeof(value)==="string"){
        return value.length;
    }
    else if (Array.isArray(value)){
        return value.length;
    }

}

// problem3
class Person {
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    getDetails(){
        return 'Name: ${this.name}, Age: ${this.age}'
    }
}
 
// problem4
    type Book={

            title:string,
        rating:number
    
    }
      
const filterByRating=(items:Book[]):Book[]=>{
 const filtered = items.filter(item=>item.rating>=4);
 return filtered;
  
}
