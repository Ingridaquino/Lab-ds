import "./styles/global.css";

export function App() {
  return (
    <div className="App">
      <h1 className="font-bold text-4xl text-violet-700">Hello World</h1>

      <button
        className="bg-violet-800 
        font-semibold px-4 rounded
         text-white hover:bg-violet-700"
      >
        Enviar
      </button>
    </div>
  );
}
