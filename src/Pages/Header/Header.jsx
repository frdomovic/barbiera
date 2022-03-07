import logo from '../../Assets/Images/logo.png'
import hrv from '../../Assets/Images/hrv.png'

const Header = () => {
  return (
    <nav className='p-2 flex justify-between md:justify-around items-center bg-black bg-opacity-40'>
      <a
        href='https://olivers-barbiria.hr/'
        className='h-24 md:h-36 mt-5 md:mt-0 flex flex-initial'
      >
        <img src={logo} alt='neonlogo' />
      </a>

      <button
        className='w-32 h-10 p-4 flex justify-center items-center 
        rounded-lg bg-[#315430] bg-opacity-60
        text-white text-bold text-lg
        hover:text-yellow-500 hover-text-bold
        hover:bg-transparent hover:border 
        hover:border-yellow-500 hover:border-solid'
      >
        <span className='font-bold'>HR</span>
        <img src={hrv} alt='flaglogo' className='h-4 ml-2' />
      </button>
    </nav>
  )
}
export default Header
