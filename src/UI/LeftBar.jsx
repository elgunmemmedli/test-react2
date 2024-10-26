import NavBarLeft from '../Components/LeftBarComponents/NavBarLeft'

export default function LeftBar({showSidebar}) {
  return (
<div className={`bg-gray-800 w-[200px] h-[100vh] p-5 ${showSidebar && 'hidden'}`}>
<NavBarLeft/>
</div>
  )
}
