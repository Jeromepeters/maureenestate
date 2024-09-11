interface DropdownItem {
  name: string;
  href: string;
}
export interface MenuItem {
  name: string;
  href: string;
  dropdown?: DropdownItem[];
}

export const menuItems: MenuItem[] = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about",
    dropdown: [
      { name: "Valuation Jobs", href: "/valuation-jobs" },
      { name: "Our Branches", href: "/our-branch" },
    ],
  },
  {
    name: "Our Services",
    href: "/services",
    dropdown: [
      { name: "Valuation", href: "/valuation" },
      { name: "PROPERTY MANAGEMENT", href: "/property-management" },
      { name: "Real Estate Agency", href: "/real-estate-agency" },
      {
        name: "Feasibility & Viability Appraisal",
        href: "/feasibilty-viability-appraisal",
      },
    ],
  },
  { name: "Our Team", href: "/team" },
  {
    name: "Our Properties",
    href: "/listing",
    dropdown: [
      { name: "For Sale", href: "/for-sale" },
      { name: "To Let", href: "/to-let" },
      { name: "Bulletin", href: "/bulletin" },
    ],
  },
  { name: "Blog", href: "/blog" },
  {
    name: "Contact Us",
    href: "/contact",
  },
];
