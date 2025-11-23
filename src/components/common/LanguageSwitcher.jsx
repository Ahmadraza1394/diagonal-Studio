import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Professional LanguageSwitcher Component
 *
 * Elegant dropdown language switcher with smooth animations
 * Supports Spanish and English with visual feedback
 * Saves language preference to localStorage
 */

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nLanguage", lang);
    setIsOpen(false);
  };

  const languages = [
    {
      code: "es",
      name: "Español",
      nativeName: "ES",
      flag: "🇲🇽",
      fullName: "Spanish",
    },
    {
      code: "en",
      name: "English",
      nativeName: "EN",
      flag: "🇺🇸",
      fullName: "English",
    },
  ];

  const currentLang = languages.find((l) => l.code === i18n.language);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Professional Language Switcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 px-3 py-2 rounded font-monument text-xs uppercase tracking-wider transition-all duration-300 border border-transparent hover:bg-pantone-2935/10 hover:border-pantone-2935/20"
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <svg
          className="w-4 h-4 transition-colors duration-300 group-hover:text-pantone-2935"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
        <span className="font-semibold group-hover:text-pantone-2935 transition-colors duration-300">
          {currentLang?.nativeName}
        </span>
        <svg
          className={`w-3 h-3 transition-all duration-300 ${
            isOpen ? "rotate-180 text-pantone-2935" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Animated Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 mt-3 w-56 bg-white rounded-lg shadow-2xl border border-gray-100 z-[100] overflow-hidden"
          >
            {/* Dropdown Header */}
            <div className="px-4 py-3 bg-gradient-to-r from-pantone-719/10 to-pantone-2935/10 border-b border-gray-100">
              <p className="text-xs font-monument uppercase tracking-wider text-pantone-black/70">
                Select Language
              </p>
            </div>

            {/* Language Options */}
            <div className="py-1">
              {languages.map((language, index) => (
                <motion.button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`w-full px-4 py-3 text-left font-abc-monument transition-all duration-200 flex items-center gap-3 group ${
                    i18n.language === language.code
                      ? "bg-pantone-2935 text-white"
                      : "text-pantone-black hover:bg-pantone-2935/5"
                  }`}
                >
                  {/* Flag - Using SVG circles for better display */}
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-base ${
                      i18n.language === language.code
                        ? "bg-white/20"
                        : "bg-pantone-719/10"
                    }`}
                  >
                    {language.flag}
                  </div>

                  {/* Language Info */}
                  <div className="flex-1">
                    <div
                      className={`text-sm font-semibold ${
                        i18n.language === language.code
                          ? "text-white"
                          : "text-pantone-black"
                      }`}
                    >
                      {language.name}
                    </div>
                    <div
                      className={`text-xs ${
                        i18n.language === language.code
                          ? "text-white/80"
                          : "text-pantone-black/50"
                      }`}
                    >
                      {language.fullName}
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {i18n.language === language.code && (
                    <motion.svg
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
