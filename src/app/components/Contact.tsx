import React from 'react'

const Contact = () => {
  return (
    <>
        <div className="bg-[#0C0C0C] h-[300px] mt-[150px] flex flex-col items-center justify-center text-white">
            <h1 className="text-3xl font-bold mb-4">
                Contact me
            </h1>
            <p className="text-lg mb-4">
                Feel free to reach out to me via email or phone.
            </p>
            <div className="flex flex-row items-center space-x-4">
                <div className="bg-white text-red-500 rounded-full h-12 w-12 flex items-center justify-center">
                    <a href="mailto:phestsuwapgat.contact@gmail.com" className="text-red-500">F</a>
                </div>
                <div className="bg-white text-red-500 rounded-full h-12 w-12 flex items-center justify-center">
                    <a href="tel:+6661090446" className="text-red-500">I</a>
                </div>

                <div className="bg-white text-red-500 rounded-full h-12 w-12 flex items-center justify-center">
                    <a href="tel:+1234567890" className="text-red-500">L</a>
                </div>
            </div>
        </div>


    </>
  )
}

export default Contact;