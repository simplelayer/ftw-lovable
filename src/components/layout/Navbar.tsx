import { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';
import {
  NAV_ITEMS,
  CTA_PRIMARY,
  isGroupedChildren,
  trackCTAClick,
  type NavItem,
  type NavChildItem,
  type NavGroupedChild,
} from '@/config/site';
import Container from '@/components/ui/Container';
import Logo from '@/components/ui/Logo';

function DesktopDropdown({ item, isActive }: { item: NavItem; isActive: boolean }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const pathname = location.pathname;

  function handleEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  }

  function handleLeave() {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpen((v) => !v);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  }

  return (
    <li className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
          isActive ? 'text-brand-primary' : 'text-brand-text hover:text-brand-primary'
        }`}
        onKeyDown={handleKeyDown}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      <div
        className={`absolute left-1/2 top-full z-50 -translate-x-1/2 rounded-lg border border-gray-100 bg-white shadow-lg transition-all duration-200 ${
          item.children && isGroupedChildren(item.children) ? 'w-max py-3' : 'min-w-[240px] py-2'
        } ${open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'}`}
        role="menu"
      >
        {item.children && isGroupedChildren(item.children) ? (
          <div className="flex gap-0 divide-x divide-gray-100">
            {(item.children as NavGroupedChild[]).map((group) => (
              <div key={group.group} className="min-w-[220px] px-2">
                <span className="block px-3 pb-1.5 pt-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {group.group}
                </span>
                {group.items.map((child) => (
                  <Link
                    key={child.href}
                    to={child.href}
                    className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                      pathname === child.href
                        ? 'bg-brand-light text-brand-primary font-medium'
                        : 'text-brand-text hover:bg-brand-light hover:text-brand-primary'
                    }`}
                    role="menuitem"
                    onClick={() => setOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        ) : (
          (item.children as NavChildItem[] | undefined)?.map((child) => (
            <Link
              key={child.href}
              to={child.href}
              className={`block px-4 py-2.5 text-sm transition-colors ${
                pathname === child.href
                  ? 'bg-brand-light text-brand-primary font-medium'
                  : 'text-brand-text hover:bg-brand-light hover:text-brand-primary'
              }`}
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              {child.label}
            </Link>
          ))
        )}
      </div>
    </li>
  );
}

function MobileAccordion({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <li>
      <button
        className={`flex w-full items-center justify-between px-4 py-3 text-base font-medium ${
          pathname.startsWith(item.href) ? 'text-brand-primary' : 'text-brand-text'
        }`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {item.label}
        <ChevronRight
          className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
          aria-hidden="true"
        />
      </button>
      <ul
        className={`overflow-hidden transition-all duration-200 ${
          open ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {item.children && isGroupedChildren(item.children)
          ? (item.children as NavGroupedChild[]).map((group, groupIdx) => (
              <li key={group.group}>
                {groupIdx > 0 && <div className="mx-6 my-1 border-t border-gray-100" />}
                <span className="block pb-1 pl-6 pr-4 pt-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {group.group}
                </span>
                <ul>
                  {group.items.map((child) => (
                    <li key={child.href}>
                      <Link
                        to={child.href}
                        className={`block py-2 pl-10 pr-4 text-sm ${
                          pathname === child.href
                            ? 'text-brand-primary font-medium'
                            : 'text-brand-muted hover:text-brand-primary'
                        }`}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))
          : (item.children as NavChildItem[] | undefined)?.map((child) => (
              <li key={child.href}>
                <Link
                  to={child.href}
                  className={`block py-2.5 pl-8 pr-4 text-sm ${
                    pathname === child.href
                      ? 'text-brand-primary font-medium'
                      : 'text-brand-muted hover:text-brand-primary'
                  }`}
                >
                  {child.label}
                </Link>
              </li>
            ))}
      </ul>
    </li>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    closeMobile();
  }, [pathname, closeMobile]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  function handleCTAClick() {
    trackCTAClick(CTA_PRIMARY.label, pathname);
  }

  return (
    <>
      <nav
        className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur-sm"
        aria-label="Main navigation"
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
            <Link to="/" className="flex items-center">
              <Logo size="md" />
            </Link>

            <ul className="hidden items-center gap-1 lg:flex" role="menubar">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

                if (item.children) {
                  return <DesktopDropdown key={item.href} item={item} isActive={isActive} />;
                }

                return (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-brand-primary'
                          : 'text-brand-text hover:text-brand-primary'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-3">
              <Link
                to={CTA_PRIMARY.href}
                onClick={handleCTAClick}
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-accent px-5 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-brand-bright hover:shadow-md"
              >
                {CTA_PRIMARY.label}
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>

              <button
                className="flex h-11 w-11 items-center justify-center rounded-lg text-brand-text transition-colors hover:bg-brand-light lg:hidden"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </Container>
      </nav>

      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 lg:hidden ${
          mobileOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        onClick={closeMobile}
        aria-hidden="true"
      />

      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-[300px] max-w-[85vw] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-4 py-4">
          <Logo size="sm" />
          <button
            onClick={closeMobile}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-brand-text hover:bg-brand-light"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <ul className="flex-1 overflow-y-auto py-2">
          {NAV_ITEMS.map((item) => {
            if (item.children) {
              return <MobileAccordion key={item.href} item={item} />;
            }

            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`block px-4 py-3 text-base font-medium ${
                    pathname === item.href ? 'text-brand-primary' : 'text-brand-text hover:text-brand-primary'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="border-t border-gray-100 p-4">
          <Link
            to={CTA_PRIMARY.href}
            onClick={() => {
              handleCTAClick();
              closeMobile();
            }}
            className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-brand-accent py-3 text-sm font-medium text-white transition-colors hover:bg-brand-bright"
          >
            {CTA_PRIMARY.label}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </>
  );
}
