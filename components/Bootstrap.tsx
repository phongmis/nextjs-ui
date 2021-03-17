import { Button, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

const current_ui = 'bootstrap'
const mynavlist = [
    { href: '/', label : 'Home'},
    { href: `/ui/${current_ui}/pages/p1`, label: 'Pages', child: [{ href: `/ui/${current_ui}/pages/p1`, label: 'Page 1'}, { href: `/ui/${current_ui}/pages/p2`, label: 'Page 2'}]},
    { href: `/ui/${current_ui}/button`, label: 'Button'},
    { href: `/ui/${current_ui}/web-form`, label: 'Web Form'}
]

export default function Bootstrap() {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen)

    return <>
        <Container className="bg-primary">
            <Nav>
              {mynavlist.map( item => {
                if( item.child) {
                 var childcount = item.child.length - 1;
                 return <Dropdown isOpen={dropdownOpen} toggle={toggle} onMouseEnter={ () => setDropdownOpen(true )} onMouseLeave={() => setDropdownOpen(false)}>
                      <DropdownToggle nav caret className="text-light">
                        {item.label}
                      </DropdownToggle>
                      <DropdownMenu>
                        {item.child.map( (itemchild, i ) => {
                            if( i !== childcount)
                            return <><DropdownItem><NavLink href={item.href}>{itemchild.label}</NavLink></DropdownItem><DropdownItem divider /></>
                            return <DropdownItem><NavLink href={item.href}>{itemchild.label}</NavLink></DropdownItem>
                        })}
                      </DropdownMenu>
                  </Dropdown>
                } else {
                  return <NavItem>
                <NavLink href={item.href} className="text-light">{item.label}</NavLink>
              </NavItem>
                }
              
            })}
          </Nav>
        </Container>     
      </>
}