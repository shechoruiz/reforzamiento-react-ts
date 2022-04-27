const TiposBasicos = () => {
	const nombre: string = "Sergio";
  const edad: number = 31
	const estaActivo: boolean = true
	const poderes: string[] = ['Velocidad', 'Volar', 'Respirar en el agua']
	const array: string[] = []

	// array.push(1)
	array.push('Que se dice?')
	// array.push(false)

  return (
    <>
      <h3>Tipos básicos</h3>
      {nombre}, {edad}, {{estaActivo} ? 'activo ' : 'inactivo '}
			{poderes.join(', ')}
		</>
  );
};

export default TiposBasicos;
