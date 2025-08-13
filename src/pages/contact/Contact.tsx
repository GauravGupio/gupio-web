import React from "react";
import Contactbanner from "../../assets/images/contact_banners_image.png";
import Pattern2 from "../../assets/images/pattern_2.png";
import { ContactBoxes } from "@/components/ContactBoxes";

export const Contact: React.FC = () => {
    return (
        <div className="bg-[#00021a]">
            {/* Banner Section */}
            <div
                className="h-[30vh] w-full bg-cover bg-center max-[1282px]:bg-fill max-[1282px]:bg-no-repeat transition-all duration-300"
                style={{ backgroundImage: `url(${Contactbanner})` }}
            >
                <div className="w-[80rem] max-[1282px]:w-full h-full mx-auto max-[1282px]:pl-20 max-[768px]:pl-10 transition-all duration-300">
                    <p className="text-[#ffbf00] flex items-center text-[75px] max-[1282px]:text-[60px] max-[768px]:text-[40px] font-extralight h-full transition-all duration-300">
                        Contact
                    </p>
                </div>
            </div>

            {/* Pattern Background Section */}
            <div
                className="w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${Pattern2})` }}
            >
                <div className="w-[60rem] max-[961px]:w-full px-4 mx-auto flex flex-col items-center py-[9rem] text-center gap-5">
                    <h2 className="text-[#ffbf00] text-[45px] max-[961px]:text-[35px] max-[768px]:text-[28px] font-bold">
                        Contact Us
                    </h2>

                    <p className="text-white/70 text-[20px] max-[961px]:text-[18px] max-[768px]:text-[16px]">
                        Just one step is all it takes to connect with us for parking
                        solutions and vehicle care services. Have questions or need
                        assistance? We’re always here to help.
                    </p>

                    {/* Contact Boxes */}
                    <div className="py-10 w-full grid grid-cols-1 md:grid-cols-2 gap-6 justify-around items-center">
                        <ContactBoxes />
                    </div>

                    {/* Google Map */}
                    <div className="py-5 w-full flex flex-wrap items-center justify-center">
                        <div className="w-full max-w-[1000px] max-[961px]:max-w-full">
                            <div className="map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.983736797314!2d77.65097519999999!3d12.908766700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158d555e8b5b%3A0x3683fbd973ef401a!2sGupio!5e0!3m2!1sen!2sin!4v1750920756243!5m2!1sen!2sin"
                                    className="w-full h-[380px] border-0"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
