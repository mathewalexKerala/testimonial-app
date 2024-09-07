import React from 'react';
import './Header.css'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import {TestimonialLogo} from './TestimonialLogo'

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
const Header = () => {
    const items = [
        {
          key: "new",
          label: "New file",
        },
        {
          key: "copy",
          label: "Copy link",
        },
        {
          key: "edit",
          label: "Edit file",
        },
        {
          key: "delete",
          label: "Delete file",
        }
      ];
      const handleError = (error:any)=>{
        console.log(error)
      }
    return (
        <Navbar className='w-full'>
        <NavbarBrand>
          <TestimonialLogo />
          <h1 >Testimonial</h1>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex " justify="center">
          <NavbarItem>
       <p>Customers</p>
          </NavbarItem>
          <NavbarItem isActive={true}>
            <Link>
              Features
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground">
              Integrations
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground">
              Price
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
         
          <NavbarItem>
            <Button  color="primary" >
              Login
            </Button>
          </NavbarItem>
          <NavbarItem>
         
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      
    );
}

export default Header;
