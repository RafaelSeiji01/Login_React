function App() {
  return (
  
    <div className='bg-gray-300 h-screen w-full flex items-center justify-center'>
      
      <div className='max-w-md w-full overflow-hidden shadow-md md:max-w-2xl bg-blue-300 p-12 md:rounded-2xl'>
          <div> 
            <header className="flex flex-col gap-3  md">
              <h1 className='text-center text-4xl md:text-5xl text-white font-medium'>Seja bem vindo</h1> 
              <p className="text-1xl md:text-3xl text-center text-white font-medium">Entre com usuario e senha</p>

            </header>

            <div className="p-2 flex flex-col gap-4 ">

              <div className=" bg-white border-2 border-white p-2 focus-within:border-pink-400 transition-colors duration-300 ">
                <input 
                type="text"
                id="username"
                name="username"
                placeholder="usuario"
                className="bg-transparent w-full outline-none"
                />
              </div>

              <div className=" bg-white border-2 border-white p-2 focus-within:border-pink-400 transition-colors duration-300 ">
                <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="*****" 
                className="bg-transparent w-full outline-none"
                />
              </div>

              <input 
              type="submit" 
              value="Login"
              className=" mt-4 p-2 bg-pink-400 text-white cursor-pointer rounded-md shadow-md hover:bg-pink-500 transition-colors"
               />

            </div>

          </div>
      </div>

    </div>
  )
}

export default App