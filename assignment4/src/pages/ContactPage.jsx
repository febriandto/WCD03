function ContactPage() {
    return (
      <div>
        <h1>Contact Us</h1>
        <p>Reach us at: email@example.com</p>
        <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4">
          <div className="space-y-2 text-center sm:text-left">
            <div className="space-y-0.5">
              <p className="text-lg font-semibold text-black">Erin Lindford</p>
              <p className="font-medium text-gray-500">Product Engineer</p>
            </div>
            <button className="border-red-200 bg-red-100 text-red-600 hover:border-transparent hover:bg-red-600 hover:text-white active:bg-red-700">
              Message
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default ContactPage;
  