import { Button, Container, Dropdown, Nav, NavItem, NavLink } from "react-bootstrap";
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
              {mynavlist.map( (item, key) => {
                if( item.child) {
                 var child_count = item.child.length - 1;
                 return <Dropdown key={key} isOpen={dropdownOpen} toggle={toggle} onMouseEnter={ () => setDropdownOpen(true )} onMouseLeave={() => setDropdownOpen(false)}>

                     <Dropdown.Toggle variant="success" id="dropdown-basic">
                         {item.label}
                     </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {item.child.map( (item_child, i ) => {
                            if( i !== child_count)
                            return <><Dropdown.Item><NavLink href={item.href}>{item_child.label}</NavLink></Dropdown.Item><Dropdown.Item divider /></>
                            return <Dropdown.Item key={i}><NavLink href={item.href}>{item_child.label}</NavLink></Dropdown.Item>
                        })}
                      </Dropdown.Menu>
                  </Dropdown>
                } else {
                  return <NavItem key={key}>
                <NavLink href={item.href} className="text-light">{item.label}</NavLink>
              </NavItem>
                }
              
            })}
          </Nav>
        </Container>     
      </>
}