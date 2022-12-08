import { Link, usePage } from "@inertiajs/inertia-react";
import React, { useState } from "react";

function MyPopover(props) {
    const { auth } = usePage().props;
    return (
        <div className="flex items-center space-x-2 outline-none ring-0">
            <img
                // src="https://source.unsplash.com/100x100/?portrait"
                alt=""
                className="h-9 w-9 rounded-full bg-gray-500"
            />
            <div className="block">
                <h2 className="text-sm font-medium text-white">
                    {auth.user.name}
                </h2>
                <a href="#" className="flex items-center space-x-1">
                    <span className="text-xs text-gray-400 hover:underline">
                        Tampilkan Profil
                    </span>
                </a>
            </div>
        </div>
    );
}

const navLinks = [
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 stroke-gray-400 group-hover:stroke-white"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1" />
                <path
                    d="M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1"
                    transform="rotate(120 12 13)"
                />
                <path
                    d="M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1"
                    transform="rotate(240 12 13)"
                />
            </svg>
        ),
        name: "Pickup Sampah",
        url: "/trash-pickups",
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 stroke-gray-400 group-hover:stroke-white"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1={4} y1={7} x2={20} y2={7} />
                <line x1={10} y1={11} x2={10} y2={17} />
                <line x1={14} y1={11} x2={14} y2={17} />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
        ),
        name: "Jenis Sampah",
        url: "/trash-type",
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 stroke-gray-400 group-hover:stroke-white"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
            </svg>
        ),
        name: "Withdrawals",
        url: "/withdraws",
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 stroke-gray-400 group-hover:stroke-white"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx={12} cy={7} r={4} />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
        ),
        name: "Data Penjual",
        url: "/penjual",
    },
];

function Menus() {
    let router = window.location.pathname;
    router = router.split("/")[1];
    return (
        <div className="divide-y divide-gray-700">
            <ul className="space-y-1 pt-2 pb-4 text-sm">
                {navLinks.map((link, index) => (
                    <li
                        className={`${
                            router === link.url.split("/")[1]
                                ? "rounded-md bg-gray-900 text-white"
                                : "hover:rounded-md hover:bg-gray-900 hover:text-white"
                        } group transition duration-300`}
                        key={index}
                    >
                        <Link
                            href={link.url}
                            className="flex items-center space-x-3 rounded-md p-2"
                        >
                            {link.icon}
                            <span>{link.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className="space-y-1 pt-4 pb-2 text-sm">
                <li className="group transition duration-300 hover:rounded-md hover:bg-gray-900 hover:text-white">
                    <Link
                        href={route("logout")}
                        method="post"
                        as="button"
                        className="flex items-center space-x-3 rounded-md p-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 stroke-gray-400 group-hover:stroke-white"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M13 12v.01" />
                            <path d="M3 21h18" />
                            <path d="M5 21v-16a2 2 0 0 1 2 -2h7.5m2.5 10.5v7.5" />
                            <path d="M14 7h7m-3 -3l3 3l-3 3" />
                        </svg>

                        <span>Keluar</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

function Sidebar() {
    return (
        <div className="relative hidden w-1/6 lg:block">
            <div className="fixed min-h-screen w-1/6 space-y-2 bg-gray-800 p-3 tracking-normal text-gray-300">
                <MyPopover />
                {Menus()}
            </div>
        </div>
    );
}

function SidebarResponsive() {
    const [show, setShow] = useState(true);
    const toglleShow = () => {
        setShow(!show);
    };
    return (
        <div className="block lg:hidden">
            <div
                className={`fixed bottom-5 left-4 ${show ? "z-20" : "z-10"}`}
                onClick={toglleShow}
            >
                <div className="mx-auto cursor-pointer rounded-full bg-gray-800 p-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6  w-6 stroke-white"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1={4} y1={6} x2={20} y2={6} />
                        <line x1={4} y1={12} x2={20} y2={12} />
                        <line x1={4} y1={18} x2={20} y2={18} />
                    </svg>
                </div>
            </div>
            <div
                className={`${
                    show
                        ? "-translate-x-96"
                        : "translate-x-0 bg-black/10 backdrop-blur-sm"
                } fixed z-10 flex w-full transition-transform duration-300 lg:w-1/6`}
            >
                <div className="min-h-screen w-56 space-y-2 border-r border-slate-700 bg-gray-800 p-3 tracking-normal text-gray-300 transition-all duration-300 lg:w-full">
                    <MyPopover />
                    {Menus()}
                </div>
                <div className="flex items-end p-2 text-white lg:hidden">
                    <div
                        className="ml-2 mb-2 cursor-pointer rounded-full bg-gray-800 p-1.5"
                        onClick={toglleShow}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 stroke-white"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

Sidebar.Responsive = SidebarResponsive;

export default Sidebar;
