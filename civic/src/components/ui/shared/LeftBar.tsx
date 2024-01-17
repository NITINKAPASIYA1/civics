import { leftbarlinks } from '@/constants'
import { INavLink } from '../../../types/index'
import {  NavLink,Link } from 'react-router-dom'


const leftbar = () => {
  return (
    <div className='flex flex-col w-[400px] h-full border-r font-lexend'>

        <Link to="/">
        <div className='flex  mt-3'>
                    <img  src='../../assets/logo.png' alt='logo' className="h-[45px] mt-2 ml-2"></img>
                    <h2 className='text-2xl mt-4 font-semi'>Civic</h2>
        </div>
        </Link>

        <div className='w-[368px] h-[68px] bg-slate-100 rounded-full mx-[16px] my-[30px] relative flex'>
        <svg  className="translate-x-3 mt-2.5" width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="47" height="47" rx="23.5" fill="#309535"/>
        <path d="M16.94 31.5L22.396 15.66H24.541L29.997 31.5H28.314L23.133 16.562H23.771L18.623 31.5H16.94ZM19.371 27.661V26.143H27.555V27.661H19.371Z" fill="white"/>
        <rect x="34.8671" y="34.867" width="10.5" height="10.5" rx="5.25" fill="#1DD75B"/>
        <rect x="34.8671" y="34.867" width="10.5" height="10.5" rx="5.25" stroke="white" stroke-width="1.5"/>
        </svg>
        <p className='font-Semibold text-[18px] px-5 py-5'>User Name</p>

        </div>

        <ul className='w-[368px] mx-[16px] flex flex-col space-y-6 font-light pl-2 text-[#565D6D]'>

            {
              leftbarlinks.map( (Link:INavLink) => {
                return (
                  <li className='pl-2'> 
                    <NavLink key={Link.label} to={Link.route} className="flex gap-2">
                      <img src={Link.imgURL}></img>
                      {Link.label}
                    </NavLink>

                  </li>
                )
              })
            }
        </ul>


        <div className='flex mt-[340px] ml-[20px]'>
          <img src='../../assets/logout.svg'></img>
          <a href='/login-in' className='mt-[9px]'>Logout</a>
        </div>

        
    </div>
  )
}

export default leftbar