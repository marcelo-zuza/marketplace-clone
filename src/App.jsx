import NavBar from "./components/NavBar"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {

  return (
    <div>
      <h2 className="bg-black text-white text-center text-2xl border-r border-black">Developed by <span className="font-bold">MARCELO ZUZA</span> | <a href="https://www.linkedin.com/in/marcelo-zuza/" className="hover:text-blue-700">Linkedin</a> | <a href="https://github.com/marcelo-zuza/marketplace-clone" className="hover:text-blue-700">GitHub</a></h2>
      <h1 className="bg-red-600 text-white text-3xl p-8 text-center">WARNING - This is not an official page, just an exercise</h1>
      <NavBar />
      <Main />
      <Footer />
    </div>
  )
}

export default App
