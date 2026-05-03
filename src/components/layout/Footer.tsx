import { Link } from 'react-router-dom';
import { ArrowUp, Linkedin, Facebook, Instagram } from 'lucide-react';
import Container from '@/components/ui/Container';
import Logo from '@/components/ui/Logo';
import { COMPANY, FOOTER_LINKS } from '@/config/site';

const socialLinks = [
  { platform: 'linkedin', url: COMPANY.social.linkedin, Icon: Linkedin },
  { platform: 'facebook', url: COMPANY.social.facebook, Icon: Facebook },
  { platform: 'instagram', url: COMPANY.social.instagram, Icon: Instagram },
].filter((s) => s.url);

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-300" aria-label="Site footer">
      <Container className="relative pb-8 pt-16">
        <a
          href="#top"
          className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-gray-600 text-gray-400 transition-colors hover:border-brand-bright hover:text-brand-bright"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
        </a>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div>
            <Link to="/" className="mb-3 inline-block">
              <Logo size="lg" variant="light" />
            </Link>
            <p className="mb-4 text-sm text-gray-400">{COMPANY.tagline}</p>
            <address className="not-italic">
              <p className="text-sm">
                {COMPANY.address.street}
                <br />
                {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}
              </p>
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="mt-2 block text-sm text-gray-400 transition-colors hover:text-brand-bright"
              >
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-sm text-gray-400 transition-colors hover:text-brand-bright"
              >
                {COMPANY.email}
              </a>
            </address>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Industries
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.industries.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Helpful Guides
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.guides.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-700 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} FollowThrough Works LLC. All rights reserved.
          </p>

          {socialLinks.length > 0 && (
            <div className="flex items-center gap-3">
              {socialLinks.map(({ platform, url, Icon }) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-600 text-gray-400 transition-colors hover:border-brand-bright hover:text-brand-bright"
                  aria-label={`Visit us on ${platform}`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          )}
        </div>
      </Container>
    </footer>
  );
}
