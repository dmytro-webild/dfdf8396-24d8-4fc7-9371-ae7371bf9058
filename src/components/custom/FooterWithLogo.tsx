import { useButtonClick } from "@/hooks/useButtonClick";
import Button from "@/components/ui/Button";

type FooterLink = {
  label: string;
  href?: string;
  onClick?: () => void;
};

type FooterColumn = {
  title: string;
  items: FooterLink[];
};

const FooterLinkItem = ({ label, href, onClick }: FooterLink) => {
  const handleClick = useButtonClick(href, onClick);

  return (
    <button
      onClick={handleClick}
      className="text-base hover:opacity-75 transition-opacity cursor-pointer"
    >
      {label}
    </button>
  );
};

export default function FooterWithLogo({
  columns,
  leftText,
  rightText,
  logo = "https://storage.googleapis.com/webild/users/user_3LCsrhmWf7q31NAHyCgwx4Bnz2d/uploaded-1793031682544-4xk1r3zp.png",
  ctaButton = { text: "Start Your Build", href: "#contact" },
}: {
  columns: FooterColumn[];
  leftText: string;
  rightText: string;
  logo?: string;
  ctaButton?: { text: string; href: string };
}) {
  const handleLogoClick = useButtonClick("#");

  return (
    <footer
      data-section="footer"
      aria-label="Site footer"
      className="w-full pt-20 pb-10 bg-background text-foreground"
    >
      <div className="w-content-width mx-auto pt-10 border-t border-foreground/15">
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-10 mb-10 border-b border-foreground/15">
          {logo && (
            <a href="#" onClick={handleLogoClick} className="inline-block focus:outline-none">
              <img src={logo} alt="Roderick Builders Logo" className="h-10 w-auto object-contain" />
            </a>
          )}
          {ctaButton && (
            <Button text={ctaButton.text} href={ctaButton.href} variant="primary" animate={false} />
          )}
        </div>

        <div className="w-full flex flex-wrap justify-between gap-y-10 mb-10">
          {columns.map((column) => (
            <div key={column.title} className="w-1/2 md:w-auto flex flex-col items-start gap-3">
              <h3 className="text-sm opacity-50 truncate">{column.title}</h3>
              {column.items.map((item) => (
                <FooterLinkItem key={item.label} label={item.label} href={item.href} onClick={item.onClick} />
              ))}
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-foreground/20" />

        <div className="w-full flex items-center justify-between pt-5">
          <span className="text-sm opacity-50">{leftText}</span>
          <span className="text-sm opacity-50">{rightText}</span>
        </div>
      </div>
    </footer>
  );
}
