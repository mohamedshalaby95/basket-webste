"use client"
import { useState } from "react";
import { Button } from "@/[locale]/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("Header");

const navigation = [
  { name: t("home"), href: "#home" },
  { name: t("about"), href: "#about" },
  { name: t("services"), href: "#services" },
  { name: t("blogs"), href: "#blogs" },
  { name: t("pricing"), href: "#pricing" },
  { name: t("faqs"), href: "#faqs" },
];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Image
              src="/logo2.png"
              alt="StoreBuilder Logo"
              width={100}
              height={100}
              className="mr-2"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <Button variant="outline">Log In</Button> */}
            <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              {t("startFreeTrial")}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                {/* <Button variant="outline" className="w-full">
                  Log In
                </Button> */}
                <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  {t("startFreeTrial")}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;