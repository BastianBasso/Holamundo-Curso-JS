const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'free' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold' },
  ];
  

  //miArray.filter((arr)=> (typeof arr) === 'string')
  function getPaidUsers(usrs) { 
    //...
    return usrs.filter((usrs)=>  usrs.plan !== 'free');
  }
  
  console.log(getPaidUsers(usuarios))