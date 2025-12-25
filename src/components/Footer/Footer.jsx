const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">

        {/* About */}
        <div>
          <h3 className="text-white font-semibold mb-3">ABOUT</h3>
          <ul className="space-y-2 text-sm">
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Flipkart Stories</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-white font-semibold mb-3">HELP</h3>
          <ul className="space-y-2 text-sm">
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Policy */}
        <div>
          <h3 className="text-white font-semibold mb-3">POLICY</h3>
          <ul className="space-y-2 text-sm">
            <li>Return Policy</li>
            <li>Terms Of Use</li>
            <li>Security</li>
            <li>Privacy</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">SOCIAL</h3>
          <ul className="space-y-2 text-sm">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Flipkart Clone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
