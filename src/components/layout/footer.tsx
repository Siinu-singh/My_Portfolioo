import Link from 'next/link';
// Removed icons as they are in the header now

const Footer = () => {

  // Simplify footer, remove navigation and social links as they are in the header
  // const socialLinks = [ ... ];
  // const footerNav = [ ... ];

  return (
    // Updated styling: Darker background, less padding, simpler text
    <footer className="py-6 bg-card text-muted-foreground">
      <div className="container mx-auto px-4 text-center">
        {/* Copyright only */}
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Suraj Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
