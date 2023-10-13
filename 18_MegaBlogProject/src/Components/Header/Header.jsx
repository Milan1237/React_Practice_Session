import React from "react";
import Container from "../Container/Container";
import { Logo, Container, LogoutBtn } from '../index'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/authStore";
import { Link } from "react-router-dom";

export default function Header() {

    const authStatus = useSelector((state) => state.auth.login);
    const navigate = useNavigate();

    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
        {
            name: 'Login',
            slug: '/login',
            active: !authStatus
        },

        {
            name: 'signUp',
            slug: '/signUp',
            active: !authStatus
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },

    ]

    return (
        <header className=" py-3 shadow bg-gray-50 ">
            <Container>
                <nav className=" flex">
                    <div className='mr-4'>
                        <Link to='/'>
                            <Logo width='70px' />

                        </Link>
                    </div>

                    <ul className="flex ml-auto">
                        {
                            navItems.map((item) => (
                                item.active ? (<li key={item.name}>
                                    <button 
                                    className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                                    onClick={() => navigate(item.slug)}>{item.name}</button>
                                </li>) : null
                            ))
                        }

                        {
                            authStatus &&
                            <li><LogoutBtn />
                            </li>
                        }


                    </ul>

                </nav>
            </Container>
        </header>
    )
}