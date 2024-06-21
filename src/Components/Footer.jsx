import { FaLinkedin, FaGithub, FaInstagram, FaDiscord } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-transparent h-10 border-t-2 border-gray-500 border-opacity-10 w-full m-0 flex justify-between py-2">
            <div className='flex mx-10 text-2xl font-thin'>
                <span>Vivek Shaurya</span>
            </div>
            <div className='flex mx-10'>
                <ul className='flex gap-4 text-2xl font-thin text-gray-500'>
                    <li><FaLinkedin /> </li>
                    <li><FaGithub /></li>
                    <li><FaInstagram /></li>
                    <li><FaDiscord /></li>
                </ul>
            </div>

        </div>
    )
}

export default Footer;