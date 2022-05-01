import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, User } from "../interfaces/reqRes";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState<User[]>([]);
  const paginaRef = useRef(1);

  useEffect(() => {
    // Llamado al API
    return () => {
      cargarUsuarios();
    };
  }, []);

  const cargarUsuarios = async () => {
    // reqResApi
    //   .get<ReqResListado>("/users")
    //   .then((resp) => {
    //     setUsuarios(resp.data.data);
    //   })
    //   .catch(console.error);
    const resp = await reqResApi.get<ReqResListado>("/users", {
      params: { page: paginaRef.current },
    });
    if (resp.data.data.length > 0) {
      setUsuarios(resp.data.data);
      paginaRef.current++;
    } else {
      alert("No hay mas registros");
    }
  };

  // const renderItem = (usuario: User) => {
  const renderItem = ({ id, avatar, first_name, last_name, email }: User) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img
            src={avatar}
            alt={first_name}
            style={{ width: 35, borderRadius: 100 }}
          />
        </td>
        <td>{`${first_name} ${last_name}`}</td>
        <td>{email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios: </h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{usuarios.map((usuario) => renderItem(usuario))}</tbody>
      </table>
      <button className="btn btn-primary" onClick={cargarUsuarios}>
        Siguientes
      </button>
    </>
  );
};

export default Usuarios;
