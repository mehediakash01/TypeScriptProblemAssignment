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

