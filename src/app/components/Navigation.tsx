import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, Moon, ChevronRight } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: 'TRANG CHỦ', href: '/' },
    {
      label: 'TỔNG QUAN',
      href: '#',
      hasDropdown: true,
      children: [
        { label: 'Giới thiệu CLB', href: '/introduce' },
        { label: 'Ban chủ nhiệm CLB', href: '#' },
        { label: 'Thành viên CLB', href: '#' },
      ],
    },
    { label: 'THÔNG BÁO', href: '#', hasDropdown: true },
    { label: 'VĂN BẢN', href: '#' },
    { label: 'TÀI LIỆU', href: '#', hasDropdown: true },
    { label: 'MÔ HÌNH +', href: '#', hasDropdown: true },
    { label: 'LIÊN HỆ', href: '#' },
  ];

  const isRoute = (href: string) => href.startsWith('/');
  const isActive = (href: string) => isRoute(href) && location.pathname === href;

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-600 hover:text-[#1bb143]"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-center gap-6 lg:col-start-2">
            {menuItems.map((item, index) => {
              const linkClasses = `text-sm font-semibold hover:text-[#1bb143] transition-colors flex items-center gap-1 ${
                isActive(item.href) ? 'text-[#00aa00]' : 'text-gray-700'
              }`;

              return (
                <div key={index} className="relative group pt-2">
                  {isRoute(item.href) ? (
                    <Link to={item.href} className={linkClasses}>
                      {item.label}
                      {item.hasDropdown && (
                        <ChevronRight className="w-3 h-3 rotate-90" />
                      )}
                    </Link>
                  ) : (
                    <a href={item.href} className={linkClasses}>
                      {item.label}
                      {item.hasDropdown && (
                        <ChevronRight className="w-3 h-3 rotate-90" />
                      )}
                    </a>
                  )}
                  {item.children && (
                    <div className="absolute left-0 top-full hidden min-w-[220px] rounded-md border border-gray-100 bg-white py-2 shadow-lg group-hover:block group-focus-within:block">
                      {item.children.map((child) => (
                        <div key={child.label}>
                          {isRoute(child.href) ? (
                            <Link
                              to={child.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:text-[#1bb143] hover:bg-gray-50"
                            >
                              {child.label}
                            </Link>
                          ) : (
                            <a
                              href={child.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:text-[#1bb143] hover:bg-gray-50"
                            >
                              {child.label}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Search and Dark Mode */}
          <div className="flex items-center gap-3 lg:justify-end lg:col-start-3">
            <button className="text-gray-600 hover:text-[#1bb143] transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-gray-600 hover:text-[#1bb143] transition-colors">
              <Moon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            {menuItems.map((item, index) => {
              const linkClasses = `block py-2 text-sm font-semibold hover:text-[#1bb143] transition-colors ${
                isActive(item.href) ? 'text-[#00aa00]' : 'text-gray-700'
              }`;

              return (
                <div key={index}>
                  {isRoute(item.href) ? (
                    <Link
                      to={item.href}
                      className={linkClasses}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a href={item.href} className={linkClasses}>
                      {item.label}
                    </a>
                  )}
                  {item.children && (
                    <div className="pl-4 pb-2">
                      {item.children.map((child) => (
                        <div key={child.label}>
                          {isRoute(child.href) ? (
                            <Link
                              to={child.href}
                              className="block py-1 text-sm text-gray-600 hover:text-[#1bb143] transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ) : (
                            <a
                              href={child.href}
                              className="block py-1 text-sm text-gray-600 hover:text-[#1bb143] transition-colors"
                            >
                              {child.label}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
