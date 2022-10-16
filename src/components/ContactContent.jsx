import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

const ContactContent = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_jdick3i", "template_k3kh8xa", form.current, "GVzpZ1Lxz2GovyGJq")
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        e.target.reset();
    };

    return (
        <div className="contact" id="contact">
            <div className="contact-container" data-aos="fade-up">
                <h1 className="reservations-container-title" data-aos="fade-up">
                    HAI SA LUAM LEGATURA!
                </h1>
                <form ref={form} onSubmit={sendEmail} data-aos="fade-up">
                    <div className="contact-form-top">
                        <div className="contact-form-item">
                            <p className="reservations-container-content-item-label" htmlFor="Name">
                                Nume
                            </p>
                            <div className="contact-form-input">
                                <input type="text" name="first_name" id="Name" required />
                            </div>
                        </div>
                        <div className="contact-form-item">
                            <p
                                className="reservations-container-content-item-label"
                                htmlFor="Prenume"
                            >
                                Prenume
                            </p>
                            <div className="contact-form-input">
                                <input type="text" name="last_name" id="Name" required />
                            </div>
                        </div>
                        <div className="contact-form-item">
                            <p
                                className="reservations-container-content-item-label"
                                htmlFor="Email"
                            >
                                Email
                            </p>
                            <div className="contact-form-input">
                                <input type="email" name="email" id="Email" required />
                            </div>
                        </div>
                        <div className="contact-form-item">
                            <p
                                className="reservations-container-content-item-label"
                                htmlFor="Phone"
                            >
                                Telefon
                            </p>
                            <div className="contact-form-input">
                                <input type="text" name="phone" id="Phone" required />
                            </div>
                        </div>
                    </div>
                    <div className="contact-form-item">
                        <p className="reservations-container-content-item-label" htmlFor="Message">
                            Mesaj
                        </p>
                        <div className="contact-form-input">
                            <textarea
                                name="message"
                                id="Message"
                                rows={6}
                                maxLength={3000}
                                required
                            />
                        </div>
                    </div>
                    <div className="contact-form-item contact-form-item-cta">
                        <button className="content-cta" type="submit">
                            TRIMITE
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactContent;
