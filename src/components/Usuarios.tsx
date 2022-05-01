import { useEffect, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, User } from "../interfaces/reqRes";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState<User[]>([]);
  useEffect(() => {
    // Llamado al API
    reqResApi
      .get<ReqResListado>("/users")
      .then((resp) => {
        console.log(resp.data.data[0].last_name);
      })
      .catch(console.error);
  }, []);

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
        <tbody></tbody>
      </table>
    </>
  );
};

export default Usuarios;
