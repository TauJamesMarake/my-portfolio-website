import React from 'react';
import { Mail, Phone, LocateFixed } from 'lucide-react';

function Contact() {
    const contactMethods = [
        {
            icon: Mail,
            title: 'EMAIL',
            info: 'jtaumarake@gmail.com',
            link: 'mailto:jtaumarake@gmail.com'
        },
        {
            icon: Phone,
            title: 'PHONE',
            info: '+27 (78)-676-6686',
            link: 'tel:+27786766686'
        },
        {
            icon: LocateFixed,
            title: 'LOCATION',
            info: 'Johannesburg, Gauteng'
        }
    ];

    const handleContact = (method) => {
        if (method.title === "EMAIL") {
            window.location.href = `${method.link}`;
        }
        else if (method.title === "PHONE") {
            window.location.href = `${method.link}`;
        }
    }

    return (
        <div className="page">
            <div className="contact-content">
                {/* PAGE HEADER */}
                <h1>CONTACT</h1>
                <p className="contact-subtitle">Feel free to contact me!</p>

                {/* CONTACT METHODS GRID */}
                <div className="contact-methods">
                    {contactMethods.map((method, index) => {
                        const Icon = method.icon;
                        return (
                            <div key={index} className="contact-method" onClick={() => handleContact(method)}>
                                {/* <a href={method.link} target="_blank" rel="noopener noreferrer"> */}
                                <div className="contact-method-icon">
                                    <Icon size={30} />
                                </div>

                                {/* CONTACT INFO */}
                                <h3>{method.title}</h3>
                                <p>{method.info}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="thanks-message">
                    Thank You!
                </div>
            </div>
        </div>
    );
}

export default Contact;