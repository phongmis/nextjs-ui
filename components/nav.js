import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavItem, NavLink } from "reactstrap";

const links = [
  { href: "https://github.com/phongmis", label: "Phong Nguyen" },
  { href: "https://github.com/phongmis/ui", label: "This Repo" },
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Navc = () => (
  <Nav style={{ "justify-content": "space-between" }}>
    {links.map((item) => {
      return (
        <NavItem>
          <NavLink href={item.href}>{item.label}</NavLink>
        </NavItem>
      );
    })}
  </Nav>
);

export default Navc;
