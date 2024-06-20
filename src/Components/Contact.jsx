import emailjs from 'emailjs-com';
import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
            'YOUR_SERVICE_ID', // Replace with your EmailJS Service ID
            'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
            formData,
            'YOUR_USER_ID' // Replace with your EmailJS User ID
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
            })
            .catch((err) => {
                console.log('FAILED...', err);
                alert('Failed to send message, please try again later.');
            });

        // Clear the form after submission
        setFormData({
            email: '',
            message: ''
        });
    };

    return (
        <div className="h-auto p-4">
            <h1 className="mb-10 text-center text-4xl font-bold my-20 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                Contact Me
            </h1>
            <div className="flex flex-wrap justify-around items-center">
                <form onSubmit={handleSubmit} className="max-w-md p-6 bg-white rounded-lg shadow-md w-full md:w-1/2">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows="6"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-bold rounded-md transition transform hover:scale-105"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
