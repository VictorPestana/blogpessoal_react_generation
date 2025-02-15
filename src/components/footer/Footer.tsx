import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-black text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Blog Pessoal Victor Pestana | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
	<a href="https://www.linkedin.com/in/victor-pestana-a1aa15269/" target="_blank">
    	<LinkedinLogo size={48} weight='bold' />
    </a>
    <a href="https://www.instagram.com/prodbyakashy" target="_blank">
    	<InstagramLogo size={48} weight='bold' />
    </a>
    <a href="https://www.facebook.com" target="_blank">
    	<FacebookLogo size={48} weight='bold' />
	</a>
    </div>
</div>
            </div>
        </>
    )
}

export default Footer
