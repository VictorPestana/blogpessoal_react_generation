function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-black text-white'>
            
                <div className="container flex justify-between text-lg">
                    Blog Pessoal - Victor Pestana

                    <div className='font-mono italic flex gap-4'>
                        Postagens | 
                        Temas | 
                        Cadastrar Tema | 
                        Perfil | 
                        Sair 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
