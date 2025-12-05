import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";

export default function Footer() {
  const navigationList = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Artists", href: "/artists" },
    { name: "About", href: "/about" },
  ];
  return (
    <footer className="bg-gray-900 text-gray-300 relative bottom-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold mb-4">TP2_UE_FS</h3>
            <p className="text-sm leading-relaxed">
              Nous créons des événements et aidons les artistes locaux à se
              faire connaître..
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="hover:text-pink-400 transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Mouloud-Msd/TP2-UE_Fullstack"
                className="hover:text-gray-400 transition-colors duration-200"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Liens</h3>
            <ul className="space-y-2">
              {navigationList.map((item, index) => (
                <li>
                  <a
                    href={item.href}
                    key={index}
                    className="text-sm hover:text-white hover:pl-2 transition-all duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white hover:pl-2 transition-all duration-200"
                >
                  A venir
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white hover:pl-2 transition-all duration-200"
                >
                  Artists a la une
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm">
                  123 Rue Example, 75001 Paris, France
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0" />
                <a
                  href="tel:+33123456789"
                  className="text-sm hover:text-white transition-colors"
                >
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0" />
                <a
                  href="mailto:contact@exemple.fr"
                  className="text-sm hover:text-white transition-colors"
                >
                  contact@univ-rouen.fr
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2025 TP_UE_FS. Tous droits réservés:)
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Mentions légales
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
