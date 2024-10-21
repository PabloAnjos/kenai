import { useState } from 'react'
import imgClose from '../assets/images/close.svg'


export function NewProfile() {
    //Fechando janela de Novo usuario ao clicar no X
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible); 
      };

    return (
        <>
        {isVisible && ( 
            <div className='bg-[#202020] text-white w-[317px] h-[600px] border-solid border-[#474747] border-2 rounded-md flex flex-col items-center pr-5 pl-5 xl:w-[800px]' >
                    <div className='w-[317px] mt-5 mr-10 flex justify-end xl:w-[800px]'>
                            <img src={imgClose} alt="Icon Close" className='w-7 cursor-pointer' onClick={toggleVisibility}/>
                    </div>

                    <h1 className='text-4xl font-semibold mt-20'>Adicionar perfil</h1>
                    <h2 className='mt-2'>Adicione um novo perfil Kenai.</h2>
                    <input type="text" placeholder='Nome' className='w-[250px] h-12 bg-transparent mt-10 font-semibold pl-5 border-[#474747] border-2 rounded-md xl:w-[600px]' />

                    <button className='bg-white w-[250px] h-12 text-black font-semibold mt-20 rounded-md xl:w-[600px]'>Salvar</button>
                    <button className='bg-transparent w-[250px] h-12 text-white font-semibold mt-5 xl:w-[600px]' onClick={toggleVisibility}>Cancelar</button>
            </div>
            )}
        </>
    )
}