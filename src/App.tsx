import "./styles/global.css";

export function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4 bg-gray-900">
      <div className="p-2 bg-gray-800 rounded">
        <h1 className="text-gray-100 font-bold text-2xl">
          Components
        </h1>

        <div>
          <h2>Text</h2>
        </div>
      </div>
      <h1 className="font-bold text-2xl text-cyan-500">Hello Design</h1>

      <button className="bg-cyan-500 font-medium px-4 py-2 text-gray-900 rounded hover:bg-cyan-300">
        Enviar
      </button>
    </div>
  );
}
