import Link from "next/link";
import { Mail, MapPin, Phone, Smartphone } from "lucide-react";

import { primaryNavigation } from "@/data/navigation";
import { site } from "@/data/site";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      focusable="false"
      viewBox="0 0 24 24"
    >
      <path
        d="M15.12 8.04h2.13V4.61c-.37-.05-1.63-.16-3.1-.16-3.07 0-5.17 1.87-5.17 5.31v2.96H5.75v3.84h3.23v7h3.9v-7h3.22l.51-3.84h-3.73v-2.58c0-1.11.31-1.87 2.24-1.87Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "Email to be confirmed";
  const hasContactEmail = contactEmail !== "Email to be confirmed";

  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Link className="site-footer__wordmark focus-ring" href="/">
            {site.name}
          </Link>
          <p>Independent creative studio for identity, web, and digital experience.</p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer navigation">
          {primaryNavigation.map((item) => (
            <Link className="site-footer__link focus-ring" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-footer__meta">
          <p>Clear thinking. Restrained craft. Work made to endure.</p>
          <div className="site-footer__contact" aria-label="Contact information">
            <div className="site-footer__contact-item">
              <Mail aria-hidden="true" size={16} strokeWidth={1.8} />
              <div>
                <span>Email</span>
                {hasContactEmail ? (
                  <a className="site-footer__contact-link focus-ring" href={`mailto:${contactEmail}`}>
                    {contactEmail}
                  </a>
                ) : (
                  <p>{contactEmail}</p>
                )}
              </div>
            </div>

            <div className="site-footer__contact-item">
              <Phone aria-hidden="true" size={16} strokeWidth={1.8} />
              <div>
                <span>Phone</span>
                <a className="site-footer__contact-link focus-ring" href={site.contact.phoneHref}>
                  {site.contact.phone}
                </a>
              </div>
            </div>

            <div className="site-footer__contact-item">
              <Smartphone aria-hidden="true" size={16} strokeWidth={1.8} />
              <div>
                <span>Mobile</span>
                <a className="site-footer__contact-link focus-ring" href={site.contact.mobileHref}>
                  {site.contact.mobile}
                </a>
              </div>
            </div>

            <div className="site-footer__contact-item site-footer__contact-item--wide">
              <MapPin aria-hidden="true" size={16} strokeWidth={1.8} />
              <div>
                <span>Address</span>
                <address>{site.contact.address.formatted}</address>
              </div>
            </div>
          </div>

          <div className="site-footer__utility">
            <p>&copy; {year} {site.name}. All rights reserved.</p>
            <Link className="site-footer__link focus-ring" href="/privacy">
              Privacy
            </Link>
            <Link className="site-footer__link focus-ring" href="/terms">
              Terms
            </Link>
            <a
              aria-label={`${site.social.facebook.label} on ${site.social.facebook.platform}`}
              className="site-footer__social-icon focus-ring"
              href={site.social.facebook.href}
              rel="noreferrer"
              target="_blank"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
