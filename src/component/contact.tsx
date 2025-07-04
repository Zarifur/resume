import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#222222] text-white flex flex-col md:flex-row p-8 gap-8">
      {/* Left Panel - Contact Info */}
      <div className="flex flex-col gap-6 md:w-1/3">
        <h1 className="text-4xl font-bold mb-4">Contact</h1>

        {/* Contact Cards */}
        <div className="bg-[#1e1e1e] p-6 rounded flex items-center gap-4">
          <LocationOnIcon className="text-cyan-400" fontSize="large" />
          <span className="text-lg">Dhaka</span>
        </div>
        <div className="bg-[#1e1e1e] p-6 rounded flex items-center gap-4">
          <PhoneIcon className="text-cyan-400" fontSize="large" />
          <span className="text-lg">+880 197539 3838</span>
        </div>
        <div className="bg-[#1e1e1e] p-6 rounded flex items-center gap-4">
          <EmailIcon className="text-cyan-400" fontSize="large" />
          <span className="text-lg">zarifsanad@gmail.com</span>
        </div>
        <div className="bg-[#1e1e1e] p-6 rounded flex items-center gap-4">
          <CheckCircleIcon className="text-cyan-400" fontSize="large" />
          <span className="text-lg">Freelance Available</span>
        </div>
      </div>

      {/* Right Panel - Map & Form */}
      <div className="flex-1 flex flex-col gap-8">
        {/* Google Map Embed */}
        <div className="w-full h-64 md:h-48 rounded overflow-hidden">
          <iframe
            width="600"
            height="450"
            style={{ border: 0 }} // ✅ use an object!
            loading="lazy"
            allowFullScreen // ✅ camelCase
            referrerPolicy="no-referrer-when-downgrade" // ✅ camelCase
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.6767051051027!2d90.3855576!3d23.8769581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c41236d2a3f3%3A0xb875079410f38d0d!2sHOUSE%20%23%2072%20Rd%20No%2015%2C%20Dhaka%201230!5e0!3m2!1sen!2sbd!4vYOUR_EMBED_ID"
          />
        </div>

        {/* Contact Form */}
        <div className="bg-[#1e1e1e] p-8 rounded">
          <h2 className="text-3xl font-bold pb-6">
            How Can I <span className="text-cyan-400">Help You?</span>
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-[#121212] p-4 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400 col-span-1"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-[#121212] p-4 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400 col-span-1"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="bg-[#121212] p-4 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400 col-span-1 md:col-span-2"
              required
            />
            <textarea
              placeholder="Message"
              //@ts-ignore
              rows="5"
              className="bg-[#121212] p-4 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400 col-span-1 md:col-span-2"
              required
            ></textarea>

            {/* reCAPTCHA placeholder */}
            <div className="bg-[#121212] p-4 rounded border border-gray-600 col-span-1 md:col-span-2 flex items-center gap-4">
              <input type="checkbox" className="w-5 h-5" />
              <span>I'm not a robot</span>
              <div className="ml-auto text-gray-500 text-xs">reCAPTCHA</div>
            </div>

            <button
              type="submit"
              className="col-span-1 md:col-span-2 p-4 bg-transparent border border-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition font-bold"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
