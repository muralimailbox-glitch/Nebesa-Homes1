import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Cookie, X } from "lucide-react";

const COOKIE_KEY = "nebesa_cookie_consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      // Small delay so it doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
        <Cookie className="w-8 h-8 text-[#FFB800] shrink-0 mt-0.5 md:mt-0" />
        <div className="flex-1">
          <p className="text-sm text-gray-700 leading-relaxed">
            We use cookies and analytics to improve your experience and understand how our site is used.
            By clicking "Accept", you consent to our use of cookies. See our{" "}
            <Link
              href="/privacy"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#FFB800] font-medium hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            for details.
          </p>
        </div>
        <div className="flex gap-2 shrink-0 w-full md:w-auto">
          <button
            onClick={decline}
            className="flex-1 md:flex-none px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="flex-1 md:flex-none px-5 py-2 text-sm font-bold text-[#3D4F5F] bg-[#FFB800] rounded-lg hover:bg-[#e5a600] transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
