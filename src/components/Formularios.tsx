import useForm from "../hooks/useForm";

const Formularios = () => {
  const { onChange, formulario, email, password } = useForm({
    email: "test@test.com",
    password: "123456",
  });

  return (
    <>
      <h3>Formularios</h3>
      <input
        type="email"
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={({ target }) => onChange(target.value, "email")}
      />
      <input
        type="text"
        className="form-control mt-2 mb-2"
        placeholder="Password"
        value={password}
        onChange={({ target }) => onChange(target.value, "password")}
      />
      <code>
        <pre>{JSON.stringify(formulario, null, 2)}</pre>
      </code>
    </>
  );
};

export default Formularios;
