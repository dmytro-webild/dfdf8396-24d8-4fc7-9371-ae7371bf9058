import { Outlet } from 'react-router-dom';

import { StyleProvider } from '@/components/ui/StyleProvider';
import SiteBackgroundSlot from '@/components/ui/SiteBackgroundSlot';
import NavbarFullscreenStatic from "@/components/ui/NavbarFullscreenStatic";
import FooterBasic from "@/components/sections/footer/FooterBasic";

export default function Layout() {
  return (
    <StyleProvider buttonVariant="default" siteBackground="none" heroBackground="none">
      <SiteBackgroundSlot />
      <NavbarFullscreenStatic
        logo="https://storage.googleapis.com/webild/users/user_3LCsrhmWf7q31NAHyCgwx4Bnz2d/uploaded-1793031682544-4xk1r3zp.png"
        navItems={[
          { name: "Projects", href: "#properties" },
          { name: "About Us", href: "#about" },
          { name: "Services", href: "#about" },
          { name: "Contact", href: "#contact" },
        ]}
        ctaButton={{ text: "Start Your Build", href: "#contact" }}
      />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FooterBasic
        columns={[
          {
            title: "Projects",
            items: [
              { label: "Custom Estates", href: "#properties" },
              { label: "Modern Architecture", href: "#properties" },
              { label: "Luxury Renovations", href: "#properties" },
              { label: "Waterfront Residence", href: "#properties" },
            ],
          },
          {
            title: "Services",
            items: [
              { label: "Custom Home Building", href: "#about" },
              { label: "Design-Build Collaboration", href: "#about" },
              { label: "Architectural Construction", href: "#about" },
              { label: "Estate Management", href: "#about" },
            ],
          },
          {
            title: "Philosophy",
            items: [
              { label: "Sketch to Reality", href: "#about" },
              { label: "Architectural Precision", href: "#about" },
              { label: "Legacy Quality", href: "#about" },
              { label: "Uncompromised Craft", href: "#about" },
            ],
          },
          {
            title: "Company",
            items: [
              { label: "About Roderick Builders", href: "#about" },
              { label: "Our Portfolio", href: "#properties" },
              { label: "Contact Us", href: "#contact" },
            ],
          },
        ]}
        leftText="© 2026 Roderick Builders. Legacy Beyond Luxury."
        rightText="Master Custom Home Builders"
      />
    </StyleProvider>
  );
}