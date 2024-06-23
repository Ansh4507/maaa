import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import paper from '../assets/paper.png';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
        };

        emailjs
            .send('service_3gi0fgi', 'template_ra4db4u', templateParams, 'OzuX31-jL3Y037Efj')
            .then(
                () => {
                    alert('Message sent successfully!');
                    setFormData({ name: '', email: '', message: '' });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('Failed to send message.');
                }
            );
    };

    return (
        <section id="contact">
            <div className="relative w-full h-screen flex flex-col items-center justify-center">
                <motion.h1
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className="text-center text-4xl mb-8"
                >
                    Let&apos;s Connect
                </motion.h1>
                <motion.img
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: -100, opacity: 0 }}
                    transition={{ duration: 1, delay: 1.0 }}
                    src={paper}
                    className="absolute inset-0 w-full h-full object-cover hidden md:flex"
                />
                <motion.div
                    whileInView={{ y: 0, opacity: 1 }}
                    initial={{ y: 100, opacity: 0 }}
                    transition={{ duration: 1, delay: 1.0 }}
                    className="relative w-full max-w-md p-6 bg-gray-950 bg-opacity-90 rounded-lg shadow-lg z-10"
                >
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 bg-transparent">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md bg-transparent"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 bg-transparent">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md bg-transparent"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 bg-transparent">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md bg-transparent"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-customBlue text-white font-semibold rounded-md hover:bg-customDarkBlue transition duration-200"
                        >
                            Submit
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
