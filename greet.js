function greet(neighbour){
    if (typeof(neighbour) ==='string' && neighbour !== "") {
      return `Hello, ${neighbour}`;
    } else {
      return "enter valid name"
    }
    
  }
  greet('Bob')