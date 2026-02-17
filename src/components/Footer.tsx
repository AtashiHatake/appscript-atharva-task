import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-12">
      {/* Newsletter + Contact */}
      <div className="bg-footer text-footer-foreground px-6 lg:px-12 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-bold tracking-wider mb-2">BE THE FIRST TO KNOW</h3>
            <p className="text-xs text-footer-foreground/70 mb-4">
              Sign up for updates from mettā muse.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className="bg-transparent border border-footer-foreground/40 px-4 py-2 text-xs flex-1 max-w-xs placeholder:text-footer-foreground/40 focus:outline-none focus:border-footer-foreground"
                aria-label="Email for newsletter"
              />
              <button className="border border-footer-foreground/40 px-6 py-2 text-xs tracking-wider hover:bg-footer-foreground/10 transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>
          <div className="md:text-right">
            <h3 className="text-sm font-bold tracking-wider mb-2">CONTACT US</h3>
            <p className="text-xs text-footer-foreground/70">+44 221 133 5360</p>
            <p className="text-xs text-footer-foreground/70">customercare@mettamuse.com</p>
            <h3 className="text-sm font-bold tracking-wider mt-6 mb-2">CURRENCY</h3>
            <p className="text-xs text-footer-foreground/70 flex items-center gap-1 md:justify-end">
              🇺🇸 · USD
            </p>
            <p className="text-[10px] text-footer-foreground/50 mt-1">
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom links */}
      <div className="bg-footer text-footer-foreground border-t border-footer-foreground/20 px-6 lg:px-12 py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-sm font-bold tracking-wider mb-3">mettā muse</h4>
            <ul className="space-y-2 text-xs text-footer-foreground/70">
              <li><a href="#" className="hover:text-footer-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-footer-foreground transition-colors">Stories</a></li>
              <li><a href="#" className="hover:text-footer-foreground transition-colors">Artisans</a></li>
              <li><a href="#" className="hover:text-footer-foreground transition-colors">Boutiques</a></li>
              <li><a href="#" className="hover:text-footer-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-footer-foreground transition-colors">EU Compliances Docs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold tracking-wider mb-3">QUICK LINKS</h4>
            <ul className="space-y-2 text-xs text-footer-foreground/70">
              <li><a href="#" className="hover:text-footer-foreground transition-colors">Orders & Shipping</a></li>
              <li><a href="#" className="hover:text-footer-foreground transition-colors">Join/Login as a Seller</a></li>
              <li><a href="#" className="hover:text-footer-foreground transition-colors">Payment & Pricing</a></li>
              <li><a href="#" className="hover:text-footer-foreground transition-colors">Return & Refunds</a></li>
              <li><a href="#" className="hover:text-footer-foreground transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-footer-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-footer-foreground transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold tracking-wider mb-3">FOLLOW US</h4>
            <div className="flex gap-3 mb-6">
              <a href="#" aria-label="Instagram" className="text-footer-foreground/70 hover:text-footer-foreground">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-footer-foreground/70 hover:text-footer-foreground">
                <Linkedin size={18} />
              </a>
            </div>
            <h4 className="text-sm font-bold tracking-wider mb-3">mettā muse ACCEPTS</h4>
            <div className="flex gap-2 flex-wrap">
              {["GPay", "Mastercard", "PayPal", "Amex", "Apple Pay", "OPay"].map((p) => (
                <span
                  key={p}
                  className="bg-footer-foreground/10 text-footer-foreground text-[9px] px-2 py-1 tracking-wider"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
        <p className="text-center text-[10px] text-footer-foreground/40 mt-8">
          Copyright © 2023 mettā muse. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
