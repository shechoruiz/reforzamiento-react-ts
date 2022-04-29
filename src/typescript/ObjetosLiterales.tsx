interface Persona {
  nombreCompleto: string,
  edad: number,
  direccion: Direccion,
  // direccion: {
  //   pais: string,
  //   casaNo: number,
  // }
}

// Dado que dentro de persona, hay otro objeto 👆 se busca que haya una nueva interfaz esclusiva para ese objeto 👇
/*
  Cómo se puede apreciar se ve raro que se declare una interfaz que hace un llamado de otra, pero es buena práctica definir la
  interfaz principal y luego definir las siguientes, dependiendo de las necesidades del objeto principal
*/

interface Direccion {
  pais: string,
  casaNo: number
}

const ObjetosLiterales = () => {
  const persona: Persona = {
      nombreCompleto: 'Sergio',
      edad: 31,
      direccion: {
          pais: 'Colombia',
          casaNo: 401,
      }
  }

  // persona.nombrecompleto = 'Andrés'

  return (
    <>
			<h1>Objetos literales</h1>
			<code><pre>{JSON.stringify(persona, null, 2)}</pre></code>
    </>
  )
}

export default ObjetosLiterales