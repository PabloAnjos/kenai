export function Avatar({ imgAvatar, nomeUsuario }) {
    return (
        <>
            <div className='w-[136px] h-[161px] xl:w-[241px] xl:h-[260px] xl:flex xl:flex-col xl:justify-center xl:items-center'>
                    <img src={imgAvatar} alt="Imagem Avatar" className="cursor-pointer" />
                    <h1 className='mt-4 font-normal text-lg xl:text-2xl'>{nomeUsuario}</h1>
            </div>
        </>
    )
}