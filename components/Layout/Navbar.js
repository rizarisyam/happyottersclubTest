

import { FaTwitter, FaDiscord } from 'react-icons/fa'
import { ImInstagram } from 'react-icons/im'

import ButtonConnectWallet from '../UI/ButtonConnectWallet'

const Navbar = () => {
    return (
        <>



            <nav className="absolute top-0 left-0 w-full bg-gray-900 text-white flex justify-between items-center gap-16 h-20 max-h-20">
                <section className=' bg-orange-50 w-64 max-w-sm h-full'>

                </section>
                <section className='flex-1'>
                    <ul className="flex gap-8">
                        <li>About</li>
                        <li>Roadmap</li>
                        <li>Faq</li>
                    </ul>
                </section>
                <section className='flex items-center gap-2 mr-8'>
                    <ul className='flex gap-2'>
                        <li className='bg-orange-200 rounded-full px-2 py-2 text-black'>
                            <FaTwitter />
                        </li>
                        <li className='bg-orange-200 rounded-full px-2 py-2 text-black'>
                            <ImInstagram />
                        </li>
                        <li className='bg-orange-200 rounded-full px-2 py-2 text-black'>
                            <FaDiscord />
                        </li>
                    </ul>
                    <ButtonConnectWallet />
                </section>
            </nav>
        </>
    )
}

export default Navbar;