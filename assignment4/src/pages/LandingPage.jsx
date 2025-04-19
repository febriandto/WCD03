
// LandingPage.jsx
export default function LandingPage() {
    return (
      <div className="">
        {/* Navbar */}
        <header className="flex justify-between items-center px-8 py-4 text-black absolute top-0 left-0 right-0 z-10">
          <span>@Ayush Barnwal</span>
          <nav className="space-x-6">
            <a href="#about" className="hover:underline">About</a>
            <a href="#work" className="hover:underline">Work</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </header>
  
        {/* Hero */}
        <section className="hero overflow-hidden whitespace-nowrap relative bg-[#dfe4eb] min-h-[80vh] flex flex-col items-center justify-center text-center">

          <img
            src="/src/assets/person.png"
            alt="Hero"
            className="absolute bottom-0"
          />

          {/* Emoji Button */}
          <div className="absolute text-white text-left hi top-1/2 right-0 w-[117px] h-[95.14px] hover:w-[350px] transition-all duration-300 ease-in-out transform -translate-y-1/2 bg-black px-3 py-1">
        <span className="text-[56px] mx-6">👋</span>
        <span className="text-[40px]">Hi I’m Ayush</span>
        </div>


          <div className="absolute flex inline-block space-x-10 animate-scroll bottom-20 text-[150.38px] text-[#F4F7FA] font-[500]">
            <span>
            Webflow Developer - UI/UX Designer - Web Designer •
            </span>
            <span>
            Webflow Developer - UI/UX Designer - Web Designer •
            </span>
            <span>
            Webflow Developer - UI/UX Designer - Web Designer •
            </span>
          </div>
        </section>


        <section id="about" className="bg-[#f2f5f9] container mx-auto px-4 py-8 mt-[10rem]">
            <div className="grid grid-cols-12">
                <div className="col-span-6 md:col-span-6">
                    <h2 className="text-2xl mb-4 text-[40px] font-[400]">About</h2>
                </div>
                <div className="col-span-6 md:col-span-6">
                <p className=" text-gray-700 leading-relaxed text-[27px] font-[400]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </p>
                </div>
            </div>
        </section>

        <section id="about" className="bg-[#f2f5f9] container mx-auto px-4 py-8 mt-[10rem]">
            <div className="grid grid-cols-12">
                <div className="col-span-6 md:col-span-6">
                    <h2 className="text-2xl mb-4 text-[40px] font-[400]">Recent Work</h2>
                </div>
                <div className="col-span-6 md:col-span-6">
                <p className=" text-gray-700 leading-relaxed text-[27px] font-[400]">

                    <div className="grid grid-cols-12">
                        <div className="col-span-10 md:col-span-10">
                            <h1 className="text-[60px]">Decodable.co</h1>
                            <p className="text-[18px]">Brand Design - Webflow Development - Web Design</p>
                        </div>
                        <div className="col-span-2 md:col-span-2">
                            <div className="group border-2 rounded-full border-black h-[85px] w-[85px] flex items-center justify-center hover:bg-black transition duration-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6 text-black group-hover:text-white transition duration-300"
                                >
                                    <path
                                    fillRule="evenodd"
                                    d="M5.25 4.5A.75.75 0 0 1 6 3.75h11.19a.75.75 0 0 1 .75.75v11.19a.75.75 0 0 1-1.5 0V6.81L5.53 18.72a.75.75 0 1 1-1.06-1.06L15.69 5.75H6a.75.75 0 0 1-.75-.75z"
                                    clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <hr className="my-5" />

                    <div className="grid grid-cols-12">
                        <div className="col-span-10 md:col-span-10">
                            <h1 className="text-[60px]">Gofirefly.io</h1>
                            <p className="text-[18px]">Brand Design - Webflow Development - Web Design</p>
                        </div>
                        <div className="col-span-2 md:col-span-2">
                            <div className="group border-2 rounded-full border-black h-[85px] w-[85px] flex items-center justify-center hover:bg-black transition duration-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6 text-black group-hover:text-white transition duration-300"
                                >
                                    <path
                                    fillRule="evenodd"
                                    d="M5.25 4.5A.75.75 0 0 1 6 3.75h11.19a.75.75 0 0 1 .75.75v11.19a.75.75 0 0 1-1.5 0V6.81L5.53 18.72a.75.75 0 1 1-1.06-1.06L15.69 5.75H6a.75.75 0 0 1-.75-.75z"
                                    clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <hr className="my-5" />

                    <div className="grid grid-cols-12">
                        <div className="col-span-10 md:col-span-10">
                            <h1 className="text-[60px]">Blinkops.com</h1>
                            <p className="text-[18px]">Brand Design - Webflow Development - Web Design</p>
                        </div>
                        <div className="col-span-2 md:col-span-2">

                            <div className="group border-2 rounded-full border-black h-[85px] w-[85px] flex items-center justify-center hover:bg-black transition duration-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6 text-black group-hover:text-white transition duration-300"
                                >
                                    <path
                                    fillRule="evenodd"
                                    d="M5.25 4.5A.75.75 0 0 1 6 3.75h11.19a.75.75 0 0 1 .75.75v11.19a.75.75 0 0 1-1.5 0V6.81L5.53 18.72a.75.75 0 1 1-1.06-1.06L15.69 5.75H6a.75.75 0 0 1-.75-.75z"
                                    clipRule="evenodd"
                                    />
                                </svg>
                            </div>

                        </div>
                    </div>
                    <hr className="my-5" />

                    <div className="grid grid-cols-12">
                        <div className="col-span-10 md:col-span-10">
                            <h1 className="text-[60px]">Withkanvas.com</h1>
                            <p className="text-[18px]">Brand Design - Webflow Development - Web Design</p>
                        </div>
                        <div className="col-span-2 md:col-span-2">

                        <div className="group border-2 rounded-full border-black h-[85px] w-[85px] flex items-center justify-center hover:bg-black transition duration-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6 text-black group-hover:text-white transition duration-300"
                            >
                                <path
                                fillRule="evenodd"
                                d="M5.25 4.5A.75.75 0 0 1 6 3.75h11.19a.75.75 0 0 1 .75.75v11.19a.75.75 0 0 1-1.5 0V6.81L5.53 18.72a.75.75 0 1 1-1.06-1.06L15.69 5.75H6a.75.75 0 0 1-.75-.75z"
                                clipRule="evenodd"
                                />
                            </svg>
                        </div>

                        </div>
                    </div>

                </p>
                </div>
            </div>
        </section>

        <section className="mt-[10rem]">
            <img className="w-[100%]" src="../src/assets/work row.png" alt="" />
            <img className="w-[100%]" src="../src/assets/work row 2.png" alt="" />
        </section>

        <section id="about" className="bg-[#f2f5f9] container mx-auto px-4 py-8 mt-[10rem]">
            <div className="grid grid-cols-12">
                <div className="col-span-6 md:col-span-6">
                    <h2 className="text-2xl mb-4 text-[40px] font-[400]">Testimonials</h2>
                </div>
                <div className="col-span-6 md:col-span-6">

                <p className=" text-gray-700 leading-relaxed text-[27px] font-[400]">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.” 

                    <div className="grid grid-cols-12 mt-[2rem]">
                        <div className="col-span-1">
                            <img src="../src/assets/joko.jpeg" className="w-[64px] h-[64px] rounded-full" alt="" />
                        </div>
                        <div className="col-span-4 ml-5">
                            <p className="text-[18px]">Ayush Raj</p>
                            <p className="text-[14px]">VP of Marketing @ Webflow</p>
                        </div>
                    </div>

                </p>
                <p className=" text-gray-700 leading-relaxed text-[27px] font-[400] mt-[5rem]">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.” 

                    <div className="grid grid-cols-12 mt-[2rem]">
                        <div className="col-span-1">
                            <img src="../src/assets/siti.jpeg" className="w-[64px] h-[64px] rounded-full" alt="" />
                        </div>
                        <div className="col-span-4 ml-5">
                            <p className="text-[18px]">Alex Cattoni</p>
                            <p className="text-[14px]">Founder @ CopyPossy</p>
                        </div>
                    </div>

                </p>

                </div>
            </div>
        </section>

        <section className="bg-[#0B0C0E] h-[440px] w-[100%] mt-[10rem] text-white relative">

            <div className="container mx-auto pt-[10rem]">

                <div className="grid grid-cols-12">
                    <div className="col-span-6 md:col-span-6">
                        <h2 className="text-2xl mb-4 text-[60px] font-[400]">
                            Have something in mind?
                        </h2>
                        <h2 className="text-2xl mb-4 text-[60px] font-[400]">
                            <div className="w-[80px] h-[80px] rounded-full inline-block bg-[url(../src/assets/person-bg.png)] bg-cover"></div> let’s build it together.
                        </h2>
                    </div>
                    <div className="col-span-6 md:col-span-6 flex justify-end items-center">
                        <p className=" text-gray-700 leading-relaxed text-[27px] font-[400]">
                            <button className="bg-[#F4F7FA] py-[24px] px-[48px] rounded-[170px] text-[18px]">Get In Touch</button>
                        </p>
                    </div>
                </div>

                <div className="flex justify-between items-center container mx-auto absolute px-8 py-4 text-white bottom-0 left-0 right-0 z-100 text-[18px]">
                    <span>Build with 💵 by Febri Andri Yanto </span>
                    <nav className="space-x-6">
                        <a href="#about" className="hover:underline">Linkedin</a>
                        <a href="#work" className="hover:underline">Twitter</a>
                        <a href="#contact" className="hover:underline">Instagram</a>
                        <a href="#webflow" className="hover:underline">Webflow</a>
                    </nav>
                </div>

            </div>



        </section>
    

      </div>
    );
  }
  