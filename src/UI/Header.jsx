import Navbar from '../Components/Navbar'


export default function Header({ showSidebar, setShowSidebar}) {
  return (
    <header >
     <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />     
    </header>
  )
}
