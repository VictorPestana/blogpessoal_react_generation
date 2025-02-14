import { Link } from "react-router-dom";

function Navbar() {
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
            Postagens | Temas | Cadastrar Tema | Perfil |<Link to="/login">Sair</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
