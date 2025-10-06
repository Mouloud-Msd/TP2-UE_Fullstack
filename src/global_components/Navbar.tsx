import { Link} from 'react-router-dom'
export default function Navbar() {
    const navigationList = [ 
        {name : 'Home' , href : '/'},
        {name : 'Events' , href : '/events'},
        {name : 'Artists' , href : '/artists'},
        {name : 'About' , href : '/about'},

    ]
    return (
    <div className="navbar bg-[#ffffff] shadow-sm ">
        <div className="navbar-start">
        <Link to={"/"} className="btn btn-ghost text-xl font-bold">LoGo</Link>
         </div>   
        <div className="navbar-center  hidden lg:flex">
          <ul className=" menu-horizontal px-1">
            { navigationList.map((item)=>(
                <li className='text-xl btn btn-ghost' key={item.name}> <Link to={item.href} >{item.name}  </Link> </li>
            ) ) }
          </ul>
        </div>
        <div className="navbar-end">
        <input type="checkbox" value="synthwave" className="toggle theme-controller " />
  </div>
      </div>
    )
    
}
