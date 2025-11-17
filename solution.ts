
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

 console.log(formatValue('hello'));
 console.log(formatValue(5));
 console.log(formatValue(true));




