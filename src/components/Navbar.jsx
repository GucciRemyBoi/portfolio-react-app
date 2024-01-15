import React, {useState} from "react";
import {FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";
import Logo from "../assets/NewLogo.png";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#050817] text-gray-300">
            <div>
                <img src={Logo} alt="Logo Image" style={{width: "80px"}} />
            </div>

            {/* menu */}
                <ul className="hidden md:flex">
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>

            {/* Hamburger */}
            <div onClick={handleClick}className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>


            {/* Mobile Menu */}
            <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#050817] flex flex-col justify-center items-center"}>
                <li className="py-6 text-4xl">Home</li>
                <li className="py-6 text-4xl">About</li>
                <li className="py-6 text-4xl">Skills</li>
                <li className="py-6 text-4xl">Projects</li>
                <li className="py-6 text-4xl">Contact</li>  
            </ul>


            {/* Social Icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072B2]">
              <a className="flex justify-between items-center w-full text-gray-300" 
              href="/">
                LinkedIn <FaLinkedin size={30} />
              </a>  
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#151A1F]">
              <a className="flex justify-between items-center w-full text-gray-300" 
              href="/">
                Github <FaGithub size={30} />
              </a>  
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#01457B]">
              <a className="flex justify-between items-center w-full text-gray-300" 
              href="/">
                Email <HiOutlineMail size={30} />
                </a>  
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3F3F37]">
              <a className="flex justify-between items-center w-full text-gray-300" 
              href="/">
                Resume <BsFillPersonLinesFill size={30} />
              </a>  
            </li>
        </ul>
            </div>
        </div>
    )
}

export default Navbar