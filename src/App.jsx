import CrossIcon from "./components/CrossIcon";

const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')]  
    bg-no-repeat bg-contain min-h-screen bg-gray-300">
      <header className="container mx-auto pt-8 px-4">
        <div className="flex justify-between">
          <h1 className="font-semibold uppercase text-3xl text-white tracking-[0.3em]">Todo</h1>
          <button>luna</button>
        </div>

        <form className="flex gap-4 bg-white rounded-md overflow-hidden
         py-4 px-4 items-center mt-8">
          <span className="rounded-full border-2 inline-block h-5 w-5
          border-2 " ></span>
          <input type="text"
           placeholder="Create a new todo ..."
           className="w-full text-gray-400 outline-none" />
        </form>
      </header>


      <main className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-md px-4" >
        <article className="flex gap-4 py-4 border-b-[1.5px] ">
          <button className="flex-none rounded-full border-2 inline-block h-5 w-5
          border-2 "></button>
          <p className="text-gray-600 grow">Curso de React ñeque</p>
          <button className="flex-none">
            <CrossIcon/>
          </button>
        </article>

        <article>
          <button>circulo</button>
          <p>Curso de React ñeque</p>
          <button><CrossIcon/></button>
        </article>

        <article>
          <button>circulo</button>
          <p>Curso de React ñeque</p>
          <button><CrossIcon/></button>
        </article>

        <article>
          <button>circulo</button>
          <p>Curso de React ñeque</p>
          <button><CrossIcon/></button>
        </article>

        <section>
          <span>5 item left</span>
          <button>Clear Completed</button>
        </section>

        </div>
      </main>

      <section className="px-4 container mx-auto">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </section>

      <p className="text-center">Drag and drop to reorden list</p>
    </div>
  )
};

export default App

 //npm install -D tailwindcss postcss autoprefixer
 //npx tailwindcss init -p


// npm install -D prettier prettier-plugin-tailwindcss // esto es para centrar automatiamente cuando se guarda