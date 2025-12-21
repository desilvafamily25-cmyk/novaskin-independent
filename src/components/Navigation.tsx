import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Search } from "lucide-react";
import { useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Skin Cancer Checks", path: "/skin-checks" },
    { name: "Dermatology", path: "/dermatology" },
    { name: "Skin Care", path: "/skin-care" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const searchItems = [
    { name: "Home", path: "/", keywords: ["home", "welcome", "main"] },
    { name: "Skin Cancer Checks", path: "/skin-checks", keywords: ["skin cancer", "mole", "melanoma", "check", "screening", "dermoscopy"] },
    { name: "Dermatology", path: "/dermatology", keywords: ["dermatology", "skin conditions", "eczema", "psoriasis", "acne", "rash"] },
    { name: "Skin Care", path: "/skin-care", keywords: ["skincare", "ingredients", "retinoid", "moisturizer", "sunscreen", "acid", "vitamin c", "niacinamide"] },
    { name: "About Dr. Premila", path: "/about", keywords: ["about", "doctor", "dermatologist", "qualifications", "experience"] },
    { name: "Contact & Booking", path: "/contact", keywords: ["contact", "book", "appointment", "phone", "email", "location"] },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-bold text-charcoal">NovaSkin</span>
            <span className="text-xs text-muted-foreground">
              Skin Cancer & Dermatology
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-sage-dark ${
                  isActive(link.path) ? "text-sage-dark" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Search & CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="hover:bg-sage-light"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="cta" asChild>
              <Link to="/contact">Book Now</Link>
            </Button>
          </div>

          {/* Search Dialog */}
          <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
            <CommandInput placeholder="Search pages, topics, ingredients..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Pages">
                {searchItems.map((item) => (
                  <CommandItem
                    key={item.path}
                    onSelect={() => {
                      navigate(item.path);
                      setSearchOpen(false);
                    }}
                    className="cursor-pointer"
                  >
                    <Search className="mr-2 h-4 w-4" />
                    {item.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </CommandDialog>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {/* Mobile Search */}
              <button
                onClick={() => {
                  setSearchOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <Search className="h-4 w-4" />
                Search...
              </button>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-sage-dark ${
                    isActive(link.path) ? "text-sage-dark" : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="cta" asChild className="w-full">
                <Link to="/contact">Book Now</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
