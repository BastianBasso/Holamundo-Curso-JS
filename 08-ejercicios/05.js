const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'free' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold' },
  ];
  
  function obtenerMayor(arr) {
    // Generar un array
    // pasar el array a el math.max([...])
    // filtrar el array viendo el mas grande
    // transformar el array a objeto accediendo a su unico dato
    let may_num = Math.max(...arr.map((u)=>u.edad));
    return arr.filter(u=> u.edad === may_num)[0];
  }
  
  const mayor = obtenerMayor(usuarios);
  
  console.log(mayor);