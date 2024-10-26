export default function BarIcon({ showSidebar, setShowSidebar }) {

  const handleClick = () => {
    console.log('dcdcd');

    setShowSidebar(!showSidebar);
  }
  return (
    <div>
      <button onClick={handleClick}>
        <svg className="w-6 h-6 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
        </svg>
      </button>
    </div>
  )
}
