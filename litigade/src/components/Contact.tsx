import React from 'react';

const Contact = () => {
  return (
    <section
      className="py-16 bg-cover bg-center"
      style={{ backgroundImage: `url('https://s3-alpha-sig.figma.com/img/18a7/9b44/58652c1e7196baddbd4dc252c21cac34?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pzisC1ESjzUBXHwz~sz8hvTnPk~ZMLnMATgrejpTuIoZeLlPpMfPWyf-YzGfDutIceXszRKHYDf-jYsDmT8aGC-QV7G1iwKRZ7s5Un1ZFHMa5PgEXQdAzyFEr6JEp~aaF42WCKIgw4U9cvEFAh1SGINpXZzWcZieytTpYAXTC0GbT3sLkxtx4-iTN0IXyOSh7Kw9r~ZW3oFE8tMawnfs1DLHTK4Q-0uWov3ppuGZMhKqWw5aowPooWp1HIfwpfcNiYOl5JZjdrDz-16IVwFdR2OcO60J3~I3pP8yWz2vrcigW92cu~c-~-ece5mHJTYD882CWWGWBJMEP3IS7WFmqA__')` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Contact Us</h2>
            <p className="mt-4 text-lg text-gray-500">Make an Appointment</p>
            <form className="mt-8 space-y-6">
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                <div>
                  <label htmlFor="name" className="sr-only">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="block w-full py-3 px-4 placeholder-gray-500 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="block w-full py-3 px-4 placeholder-gray-500 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="example@gmail.com"
                  />
                </div>
                <div>
                  <label htmlFor="department" className="sr-only">Department</label>
                  <select
                    id="department"
                    name="department"
                    required
                    className="block w-full py-3 px-4 placeholder-gray-500 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option>Please Select</option>
                    {/* Add more options here */}
                  </select>
                </div>
                <div>
                  <label htmlFor="time" className="sr-only">Time</label>
                  <select
                    id="time"
                    name="time"
                    required
                    className="block w-full py-3 px-4 placeholder-gray-500 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option>4:00 Available</option>
                    {/* Add more options here */}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="block w-full py-3 px-4 placeholder-gray-500 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-brown text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown"
                >
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
