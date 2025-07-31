import { FaFacebookF, FaTwitter, FaSkype, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-blue-100 text-gray-700 px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <div className="mb-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              alt="Logo"
              className="w-10 h-10"
            />
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum dignissimos iusto autem in provident.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Products</h3>
          <ul className="space-y-1 text-sm">
            <li>Overview</li>
            <li>Features</li>
            <li className="flex items-center">
              Solutions
              <span className="ml-2 bg-gray-200 text-xs px-2 py-0.5 rounded">New</span>
            </li>
            <li>Pricing</li>
            <li>Releases</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-sm">
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Newsroom</li>
            <li>Media kit</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Legal</h3>
          <ul className="space-y-1 text-sm">
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
            <li>Licenses</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>

      <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2023 copyright. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <FaFacebookF />
          <FaTwitter />
          <FaSkype />
          <FaLinkedinIn />
        </div>
      </div>
    </footer>
  );
}
export default Footer