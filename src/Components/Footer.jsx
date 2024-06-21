import { FaLinkedin, FaGithub, FaInstagram, FaDiscord } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-transparent h-10 border-t-2 border-gray-500 border-opacity-10 w-full m-0 flex justify-between py-2">
            <div className='flex mx-10 md:text-2xl font-thin text-md'>
                <span className='text-wrap'>Vivek Shaurya</span>
            </div>
            <div className='flex mx-10'>
                <ul className='flex gap-4 md:text-2xl  text-md font-thin text-gray-500'>
                    <a href='https://www.linkedin.com/in/vivek-shaurya/' target='_blank'><li><FaLinkedin /> </li></a>
                    <a href='https://github.com/MRPERFECT0603' target='_blank'><li><FaGithub /></li></a>
                    <a href='https://www.instagram.com/valour__sagacious/' target='_blank'><li><FaInstagram /></li></a>
                    <a href='https://discordapp.com/users/mrperfect06#4663' target='_blank'><li><FaDiscord /></li></a>
                </ul>
            </div>

        </div>
    )
}

export default Footer;