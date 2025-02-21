import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

function Navbar() {
  const navigate = useNavigate();

  const { handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("O Usuário foi deslogado com sucesso!");
    navigate("/");
  }

  return (
    <>
      <div
        className="w-full flex justify-center py-4
            			   bg-black text-white"
      >
        <div className="container flex justify-between text-lg">
          <Link to="/" className="text-2x1 font-bold">
            {" "}
            Blog Pessoal - Victor Pestana
          </Link>
          <div className="font-mono italic flex gap-4">
          <Link to='/postagens' className='hover:underline'>Postagens</Link>|{" "}
            <Link to="/temas" className="hover:underline">
              Temas
            </Link>{" "}
            |{" "}
            <Link to="/cadastrartema" className="hover:underline">
              Cadastrar Tema
            </Link>
              <Link to='/perfil' className='hover:underline'>Perfil</Link>
            <Link to="" onClick={logout} className="hover:underline">
              {" "}
              Sair{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
