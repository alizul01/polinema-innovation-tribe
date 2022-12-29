import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {DarkModeSwitch} from "react-toggle-dark-mode";
import {Navbar, Dropdown, Avatar} from "flowbite-react";
function Navigate() {
    const [isDarkMode, setDarkMode] = useState(false);
    return (
        <>
            <Navbar
                fluid={false}
                rounded={true}
                className={"bg-transparent"}
            >
                <Navbar.Brand href="#">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Pointribe
    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img="https://via.placeholder.com/350x150" rounded={true}/>}
                    >
                        <Dropdown.Header>
        <span className="block text-sm">
          Ali Zulfikar
        </span>
                            <span className="block truncate text-sm font-medium">
          name@example.com
        </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Profile
                        </Dropdown.Item>
                        <Dropdown.Item>
                            My Idea
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            Log out
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link>
                        <NavLink to={"/"}>Home</NavLink>
                    </Navbar.Link>
                    <Navbar.Link>
                        <NavLink to={"/idea"}>Idea</NavLink>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Navigate;