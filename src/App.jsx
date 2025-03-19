function App() {
  return(
    <div className="bg-amber-100 w-screen h-screen flex flex-col items-center justify-center ">
      <div className="card w-50 bg-amber-50 p-0.5">
        <div className="image flex flex-wrap overflow-hidden">
          <img className="rounded-2xl hover:scale-110 duration-700" src="/src/image.jpeg" alt="kashiimage" />
        </div>
        <div className="description flex flex-col justify-between items-start">
          <p className="font-bold">Kashi Mand</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, laudantium.</p>
        </div>
      </div>
    </div>
    
  )
}

export default App
