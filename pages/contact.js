import Layout from "../components/Layout/Layout";
import Slider from "../components/Slider/Slider";
import ContactForm from "./ContactUs/ContactForm";
import SocialIcons from "./ContactUs/SocialIcons";

const seo = {
  title: "Arya Sports Academy – Our Philosophy",
  description: "Discover the philosophy behind Arya Sports Academy.",
};

function Contact() {
  return (
    <Layout seo={seo}>
      {/* Hero Section */}
      <section className="bg-black">
        <Slider image={""} title={"Contact Us"} />
      </section>

      {/* FOURTH PART CONTACT US */}

      <section className="bg-black">
        <div className="lg:px-10 xl:px-10 md:px-5 mx-auto px-2 py-10 lg:py-20 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-10 md:gap-0 xl:gap-10">
            {/* Left Column */}
            <div className="space-y-6">
              <h2 className="text-transparent  transition-all duration-200 transform bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2 font-akira">
                Get in Touch
              </h2>
              <h3 className="lg:p-0 md:p-0 mt-0 lg:mt-6 md:mt-10 text-md lg:text-xl  font-light tracking-wider leading-relaxed lg:text-justify text-justify md:text-justify px-2 text-white">
                Help Scout is designed with your customers in mind. Provide
                email and live chat with a personal touch, and deliver help
                content right where your customers need it, all in one place,
                all for one low price.
              </h3>
              <div className="lg:p-0 md:p-0 px-2">
                <a
                  href="javascript:;"
                  className="flex items-center mb-6"
                  aria-label="Call us at 470-601-1911"
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="#f3832d"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h5 className="text-white text-base font-normal leading-6 ml-5">
                    470-601-1911
                  </h5>
                </a>

                <a
                  href="https://veilmail.io/irish-geoff"
                  className="flex items-center mb-6"
                  aria-label="Email us at https://veilmail.io/irish-geoff"
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="#f3832d"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <h5 className="text-white text-base font-normal leading-6 ml-5">
                    https://veilmail.io/irish-geoff
                  </h5>
                </a>

                <a
                  href="javascript:;"
                  className="flex items-center"
                  aria-label="Our address 654 Sycamore Avenue, Meadowville, WA 76543"
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="#f3832d"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25 12.9169C25 17.716 21.1939 21.5832 18.2774 23.4582C16.2393 24.8676 14.7636 26.4339 14.1821 27.3853C13.4629 28.5325 12.5234 29.4197 12.5234 29.4197C12.5234 29.4197 11.5839 28.5325 10.8647 27.3853C10.2832 26.4339 8.80756 24.8676 6.76947 23.4582C3.85298 21.5832 0.0460205 17.716 0.0460205 12.9169C0.0460205 8.11782 3.85298 4.25058 6.76947 2.37562C8.80756 0.966257 10.2832 -0.59908 10.8647 -1.55044C11.5839 -2.5021 12.5234 -3.38927 12.5234 -3.38927C12.5234 -3.38927 13.4629 -2.5021 14.1821 -1.55044C14.7636 -0.59908 16.2393 0.966257 18.2774 2.37562C21.1939 4.25058 25 8.11782 25 12.9169Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <h5 className="text-white text-base font-normal leading-6 ml-5">
                    654 Sycamore Avenue, Meadowville, WA 76543
                  </h5>
                </a>
              </div>

              <hr />
              <p className="lg:p-0 md:p-0 px-2 text-white text-lg">Follow us</p>
              <SocialIcons />
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <div className="bg-gray-50">
        {/* Office Section */}
        
      </div>

      <section className="bg-black py-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-8 items-center">
            {/* Left Side */}
            <div className="flex-1">
              <p className="text-[#F3832D] italic text-lg">Our Office</p>
              <h1 className="text-4xl font-bold text-white font-akira">
                Our Office <span className="text-[#F3832D]">Located </span>All
                Over the World
              </h1>
              <p className="text-white mt-4">
                Fill out the form below to contact us for any inquiries or
                questions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6 justify-center">
                {/* First Card */}
                <div className="w-full bg-gradient-to-l from-white to-pink-100 text-slate-600 border border-red-300 flex flex-col p-4 gap-4 rounded-lg shadow-md">
                  <div className="text-lg font-bold capitalize rounded-md text-center">
                    Arya Gurukul Ambernath
                  </div>
                  <div>
                    <a
                      href="javascript:;"
                      className="flex items-center mb-6"
                      aria-label="Call us at 470-601-1911"
                    >
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="#F3832D"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        470-601-1911
                      </h5>
                    </a>

                    <a
                      href="https://veilmail.io/irish-geoff"
                      className="flex items-center mb-6"
                      aria-label="Email us at https://veilmail.io/irish-geoff"
                    >
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="#F3832D"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        https://veilmail.io/irish-geoff
                      </h5>
                    </a>

                    <a
                      href="javascript:;"
                      className="flex items-center"
                      aria-label="Our address 654 Sycamore Avenue, Meadowville, WA 76543"
                    >
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="#F3832D"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M25 12.9169C25 17.716 21.1939 21.5832 18.2774 23.4582C16.2393 24.8676 14.7636 26.4339 14.1821 27.3853C13.4629 28.5325 12.5234 29.4197 12.5234 29.4197C12.5234 29.4197 11.5839 28.5325 10.8647 27.3853C10.2832 26.4339 8.80756 24.8676 6.76947 23.4582C3.85298 21.5832 0.0460205 17.716 0.0460205 12.9169C0.0460205 8.11782 3.85298 4.25058 6.76947 2.37562C8.80756 0.966257 10.2832 -0.59908 10.8647 -1.55044C11.5839 -2.5021 12.5234 -3.38927 12.5234 -3.38927C12.5234 -3.38927 13.4629 -2.5021 14.1821 -1.55044C14.7636 -0.59908 16.2393 0.966257 18.2774 2.37562C21.1939 4.25058 25 8.11782 25 12.9169Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        654 Sycamore Avenue, Meadowville, WA 76543
                      </h5>
                    </a>
                  </div>
                </div>

                {/* Second Card */}
                <div className="w-full bg-gradient-to-l from-white to-red-100 text-slate-600 border border-slate-300 flex flex-col p-4 gap-4 rounded-lg shadow-md">
                  <div className="text-lg text-center font-bold capitalize rounded-md">
                    Arya Gurukul Nandivali
                  </div>
                  <div>
                    <a
                      href="javascript:;"
                      className="flex items-center mb-6"
                      aria-label="Call us at 470-601-1911"
                    >
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="#F3832D"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        470-601-1911
                      </h5>
                    </a>

                    <a
                      href="https://veilmail.io/irish-geoff"
                      className="flex items-center mb-6"
                      aria-label="Email us at https://veilmail.io/irish-geoff"
                    >
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="#F3832D"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        https://veilmail.io/irish-geoff
                      </h5>
                    </a>

                    <a
                      href="javascript:;"
                      className="flex items-center"
                      aria-label="Our address 654 Sycamore Avenue, Meadowville, WA 76543"
                    >
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="#F3832D"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M25 12.9169C25 17.716 21.1939 21.5832 18.2774 23.4582C16.2393 24.8676 14.7636 26.4339 14.1821 27.3853C13.4629 28.5325 12.5234 29.4197 12.5234 29.4197C12.5234 29.4197 11.5839 28.5325 10.8647 27.3853C10.2832 26.4339 8.80756 24.8676 6.76947 23.4582C3.85298 21.5832 0.0460205 17.716 0.0460205 12.9169C0.0460205 8.11782 3.85298 4.25058 6.76947 2.37562C8.80756 0.966257 10.2832 -0.59908 10.8647 -1.55044C11.5839 -2.5021 12.5234 -3.38927 12.5234 -3.38927C12.5234 -3.38927 13.4629 -2.5021 14.1821 -1.55044C14.7636 -0.59908 16.2393 0.966257 18.2774 2.37562C21.1939 4.25058 25 8.11782 25 12.9169Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        654 Sycamore Avenue, Meadowville, WA 76543
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex-1 w-full lg:w-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1467.5695923131868!2d77.27517438576327!3d28.44305438802911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b6bb40efcf5%3A0x9468611c4f0ad0ac!2sArya%20Gurukul%2C%20Shree%20Vishwakarma%20Mandir!5e0!3m2!1sen!2sin!4v1695813385870!5m2!1sen!2sin"
                width="100%"
                height="450"
                allowfullscreen
                loading="lazy"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </section>
    </Layout>
  );
}

export default Contact;
