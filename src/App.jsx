import imgManAvatar from './assets/images/man-avatar.png';
import imgVisitante from './assets/images/visitante.png'
import { Avatar } from "./components/Avatar/Avatar";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { NewProfile } from './pages/NewProfile';
import { useState } from 'react';



function App() {

      //Mostrando janela de criar novo perfil ao clicar no buttan "adicionar perfil"
      const [createProfile, setCreateProfile] = useState(false);

      const createNewProfile = () => {
            setCreateProfile(prevProfile => !prevProfile)
      }

  return (
    <>
        <main className='bg-[#121214] w-screen h-screen'>
              <header className='w-screen h-16 flex justify-center items-center xl:justify-start pt-6 pr-16 pl-16'>
                      <h1 className='bg-gradient-to-r from-[#FFA634] to-[#FF267A] inline-block text-transparent bg-clip-text text-2xl font-normal xl:text-4xl'>Kenai</h1> 
              </header>

              <div className='w-screen text-white flex justify-center items-center flex-col mt-10 xl:mt-32'>
                   <div className='w-[312px] h-[68px] flex flex-col gap-4 text-center xl:w-[817px] xl:h-[165px]'>
                        <h1 className='text-xl font-normal text-center xl:text-5xl xl:font-light'>Bem-vindo de volta ao Kenai</h1>
                        <h2 className='font-light text-lg xl:text-4xl'>Quem está usando?</h2>
                   </div>

                    <div className='w-[136px] h-[575px] flex flex-col text-center gap-12 mt-10 xl:flex-row xl:w-[823px] xl:h-[260px] xl:justify-center'>
                            <Avatar
                            imgAvatar={imgManAvatar}
                            nomeUsuario={"Pablo Anjos"}
                            />
                            <Avatar
                            imgAvatar={imgVisitante}
                            nomeUsuario={"Visitante"}
                            />
                    </div>

                    <div className='flex justify-center -mt-5 xl:mt-20'>
                          <button className='bg-[#181818] text-white font-semibold w-[312px] h-[54px] xl:w-[229px] xl:h-[59px] xl:text-lg hover:bg-[#202020] transition' onClick={createNewProfile}>Adicionar perfil</button> 
                    </div>
              </div>

            {/* Container New Profile */}
              <div className='w-screen flex justify-center absolute top-[10%] xl:top-[20%]'>
                  {createProfile && <NewProfile />} {/* Faz com que a janela aparecer ao clicar no botton "Adicionar perfil" */}
              </div>
        </main>
    </>
  )
}

export default App
