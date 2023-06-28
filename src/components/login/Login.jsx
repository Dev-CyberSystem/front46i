import { useState, useContext } from "react";
import { UsuariosContext } from "../../context/userContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { usuarios } = useContext(UsuariosContext);

    const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const user =  usuarios.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
          localStorage.setItem("user", JSON.stringify(user))
          window.location.href = "/"

      } else {
        console.log("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      <hr />
    </>
  );
};

export default Login;
