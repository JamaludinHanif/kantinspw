/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import menu from '/menu.svg';
import logo from '/logo-smk.png';
import keranjang from '/keranjang-belanja.svg';
import night from '/night-mode.png';
import light from '/day-mode.png';

export default function Navbar() {

    const navigasi = useNavigate()

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
      };

    const [isOpen2, setIsOpen2] = useState(false);

    const [isOpen3, setIsOpen3] = useState(false);

    const toggleNavbar3 = () => {
        setIsOpen3(!isOpen3)
    }

    const selectTheme = (value) => {
        localStorage.setItem('theme', value)
        document.querySelector('html').classList.add(localStorage.getItem('theme'))
        if (value == "dark") {
            document.querySelector('html').classList.remove('light')
        } else {
            document.querySelector('html').classList.remove('dark')
        }
    }

    return (
        <>
            

                <nav className="sticky top-0 z-30 bg-primary dark:bg-gelap lg:bg-white px-4 py-4 lg:px-5 lg:py-5">
                    <div className="flex items-center justify-between">
                    {/* logo */}
                    <div className="flex flex-shrink-0 items-center lg:hidden">
                        <a href="https://www.instagram.com/smkpertiwikng/">
                            <img src={logo} className="h-14 w-auto" alt="buat logo"/>
                        </a>
                    </div>
                    <div className="font-bold text-2xl hidden lg:block dark:text-white">
                        Smk <span className="text-primary">Pertiwi</span> Kuningan
                    </div>
                    {/* end logo */}
                    <div className="hidden lg:flex lg:flex-row lg:justify-between">
                        <img src={keranjang} alt="" width={30} height={30} className='mr-4'/>
                        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                        <a onClick={() => navigasi('/')} className="text-dark hover:bg-primary hover:text-white dark:text-white rounded-md px-3 py-2 text-xl font-medium">Home</a>
                        <a href="https://www.instagram.com/smkpertiwikng/" className="text-dark hover:bg-primary dark:text-white hover:text-white rounded-md px-3 py-2 text-xl font-medium">Sosial Media</a>
                        <a onClick={() => navigasi('/producs')} className="text-dark hover:bg-primary dark:text-white hover:text-white rounded-md px-3 py-2 text-xl font-medium">List Produk</a>
                        <a onClick={() => navigasi('/about')} className="text-dark hover:bg-primary dark:text-white hover:text-white rounded-md px-3 py-2 text-xl font-medium">About</a>
                    </div>
                       
                        <div className="flex flex-row ">
                            
                        <div className="mr-14 flex flex-row">
                                <div className="">
                                    <img onClick={() => selectTheme('dark')} src={night} alt="" width={25} height={25} className='mr-4'/>
                                </div>
                                <div className="">
                                    <img onClick={() => selectTheme('light')} src={light} alt="" width={25} height={25} className='mr-4'/>
                                </div>
                        </div>
                            <div className="lg:hidden" onClick={() => navigasi('/cart')}>
                                <img src={keranjang} alt="" width={25} height={25} className='mr-4'/>
                            </div>
                            <div id="hamburger-menu" className="lg:hidden" onClick={toggleNavbar}>
                                <img src={menu} alt="" width={25} height={25} />
                            </div>
                        </div>
                    </div>
                    {/* end dekdtop mode */}
                    {/* Mobile menu */}
                    {isOpen && (
                        <>
                        <div id="mobile-menu" className="mt-5 bg-slate-300 ">        
                        <a onClick={() => navigasi('/')} className="text-dark hover:bg-primary hover:text-white block px-3 py-2 text-base font-medium">Home</a>
                        <a href="https://www.instagram.com/smkpertiwikng/" className="text-dark hover:bg-primary hover:text-white block px-3 py-2 text-base font-medium">Sosial Media</a>
                        <a onClick={() => navigasi('/producs')} className="text-dark hover:bg-primary hover:text-white block px-3 py-2 text-base font-medium">List Produk</a>
                        <a onClick={() => navigasi('/about')} className="text-dark hover:bg-primary hover:text-white block px-3 py-2 text-base font-medium">About</a>
                        </div>
                        
                        </>
                    )}
                    
                </nav>


        </>
    )
}