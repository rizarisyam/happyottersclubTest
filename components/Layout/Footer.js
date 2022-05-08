import { FaTwitter, FaDiscord } from 'react-icons/fa'
import { ImInstagram } from 'react-icons/im'

const Footer = () => {
    return (
        <>
            <footer className="bg-black flex flex-col justify-center items-center gap-8 pt-4">
                <img src="/images/HOC_Logos_white.png" />
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
                <ul className='flex gap-4'>
                    <li>
                        <a className='text-white uppercase'>about</a>
                    </li>
                    <li>
                        <a className='text-white uppercase'>roadmap</a>
                    </li>
                    <li>
                        <a className='text-white uppercase'>faq</a>
                    </li>
                </ul>

                <div className='border-t py-4 w-full flex justify-center items-center h-full'>
                    <h1 className='text-white uppercase'>copyright &copy; 2021-2022</h1>
                </div>
            </footer>
        </>
    )
}

export default Footer;