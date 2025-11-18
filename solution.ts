
const formatValue = (value: string|number|boolean):string|number|boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } 
  else{
    return !value;
  }
};


const getLength = <T>(value: string | T[]):number => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
};


class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}


type Books= {
  title: string;
  rating: number;
};

const filterByRating = (items: Books[]): Books[] => {
  const filtered = items.filter((item) => item.rating >= 4);
  return filtered;
};



type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: User[]) => {
  let activeUser = [];
  for (let user of users) {
    if (user.isActive === true) {
      activeUser.push(user);
    }
  }
  return activeUser;
};


interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (value: Book) => {
  return console.log(
    `Title: ${value.title}, Author: ${value.author}, Published: ${
      value.publishedYear
    }, Available: ${value.isAvailable ? "Yes" : "No"}`
  );
};



const getUniqueValues = <T extends string | number>(
  arr1: T[],
  arr2: T[]
): T[] => {
  let arr: T[] = [];
  let newarr: T[] = [];
  let index = 0;
  let exist: boolean;

  for (let i = 0; i < arr1.length; i++) {
    newarr[index] = arr1[i];
    index++;
  }

  let lastIndex = arr1.length;
  for (let j = 0; j < arr2.length; j++) {
    newarr[lastIndex] = arr2[j];
    lastIndex++;
  }

  index = 0;

  for (let j = 0; j < newarr.length; j++) {
    exist = false;

    for (let k = 0; k < index; k++) {
      if (arr[k] === newarr[j]) {
        exist = true;
        break;
      }
    }

    if (!exist) {
      arr[index] = newarr[j];
      index++;
    }
  }

  return arr;
};




type Product ={
    name:string;
    price:number;
    quantity:number;
    discount?:number;
}

const calculateTotalPrice=(product:Product[]):number=>{
 const totalPrice = product.map(p=>{
    const discounted = p.discount ?? 0;
    return p.price * p.quantity * (1 - discounted / 100);
    
 })

 const sum = totalPrice.reduce((acc,currValue)=>{
    return acc+currValue;

 },0)
 return sum;
 
}

