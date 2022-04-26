import logo from "./logo.png";
import Assessment from "../Assessment";


function App() {
  return (
    <div className="bg-slate-800 pt-16 w-screen h-screen flex items-center flex-col">
      <div className="flex-col flex items-center mb-8">
        <img src={logo} width="200" className="mb-4" alt="Logo from Spindle" />
        <h3 className="text-white text-2xl font-semibold">
          Frontend Assessment
        </h3>
        <span className="text-opacity-70 text-lg text-white">Support Code</span>
      </div>
      <div className="bg-white border-4 border-dashed border-gray-200 rounded-lg">
        <Assessment width={800} height={300} />

      </div>
    </div>
  );
}

export default App;
