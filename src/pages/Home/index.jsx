import { Navigate } from 'react-router-dom'
import { useLocalStorage } from 'react-use'

export function Home() {
  const [auth] = useLocalStorage('auth', {})

  if (auth?.user?.id) {
    return <Navigate to="/dashboard" repalce={true} />
  }

  return (
    <div className="">
      <div className='min-h-screen bg-red-700 text-white p-4 flex flex-col items-center space-y'>
        <header className="container flex justify-center max-w-5xl p-4">
          <img src="../imgs/logo-fundo-vinho.svg" className="w-40" />
        </header>

        <div className="container max-w-5xl flex-1 flex flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-6">

          <div className="md:flex-1 flex justify-center">
            <img src="../imgs/photo.png" className="w-full max-w-md" />
          </div>

          <div className="md:flex-1 flex flex-col space-y-6">
            <h1 className="text-3xl text-center md:text-left font-bold">
              Dê o seu palpite na Copa do Mundo do Catar 2022!
            </h1>

            <a
              href="/signup"
              className="text-center text-red-700 bg-white text-xl px-8 py-4 rounded-xl"
            >
              Criar minha conta
            </a>

            <a
              href="/login"
              className="text-center text-white border border-white text-xl px-8 py-4 rounded-xl"
            >
              Fazer Login
            </a>
          </div>
        </div>

      </div>
      <footer className="bg-white px-4 py-5">
        <div className='flex justify-center space-x-8'>
          <a href='https://github.com/AndersonCoitinho' target="_blank">
            <img src="../imgs/icons/github.png" className="w-12" /></a>
          <a href='https://www.linkedin.com/in/anderson-coitinho-851136196/' target="_blank">
            <img src="../imgs/icons/linkedin2.png" className="w-12" /></a>
          <a href='https://www.instagram.com/anderson_coitinho19/' target="_blank">
            <img src="../imgs/icons/instagram2.png" className="w-12" /></a>
        </div><hr className=''/>
        <div className='text-black text-center py-2'>
          Desenvolvido por Anderson Coitinho
        </div>
      </footer>


    </div>
  );
}
