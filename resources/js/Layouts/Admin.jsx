import Sidebar from "@/Components/Sidebar";
import React, { useState } from "react";
import { Popover } from "@headlessui/react";
import { usePage } from "@inertiajs/inertia-react";
import Notfound from "@/Components/404";

function MyPopover() {
    return (
        <Popover className="relative">
            <Popover.Button
                className={`flex items-center space-x-2 cursor-pointer ring-0 outline-none`}
            >
                <img
                    src="https://source.unsplash.com/100x100/?portrait"
                    alt=""
                    className="w-9 h-9 rounded-full bg-gray-500"
                />
                <div className="hidden lg:block">
                    <h2 className="text-base font-semibold">Leroy Jenkins</h2>
                    <span className="flex items-center space-x-1">
                        <span className="text-xs text-gray-400">Admin</span>
                    </span>
                </div>
            </Popover.Button>

            <Popover.Panel className="absolute z-50 top-full right-0 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm font-semibold bg-slate-900 ring-0 highlight-white/5 text-slate-300 mt-5 rounded">
                <div className="grid grid-cols-1">
                    <a
                        className="py-1 px-2 flex items-center cursor-pointer hover:bg-slate-600 transition duration-300"
                        href="/analytics"
                    >
                        Analytics
                    </a>
                    <a
                        className="py-1 px-2 flex items-center cursor-pointer hover:bg-slate-600 transition duration-300"
                        href="/engagement"
                    >
                        Engagement
                    </a>
                    <a
                        className="py-1 px-2 flex items-center cursor-pointer hover:bg-slate-600 transition duration-300"
                        href="/security"
                    >
                        Security
                    </a>
                    <a
                        className="py-1 px-2 flex items-center cursor-pointer hover:bg-slate-600 transition duration-300"
                        href="/integrations"
                    >
                        Integrations
                    </a>
                </div>

                <img src="/solutions.jpg" alt="" />
            </Popover.Panel>
        </Popover>
    );
}

export default function Admin(props) {
    const { auth } = usePage().props;
    const [isShow, setIsShow] = useState(false);
    const show = () => {
        setIsShow(!isShow);
    };
    return (
        <>
            {auth.user.level === "admin" ? (
                <div className="relative overflow-hidden">
                    <div className="flex min-h-screen relative">
                        <Sidebar show={isShow}>
                            <div className="text-white p-2 inline lg:hidden">
                                <div className="cursor-pointer" onClick={show}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 stroke-slate-200"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                    </svg>
                                </div>
                            </div>
                        </Sidebar>
                        <div
                            className={`bg-slate-800 ${
                                isShow ? "w-full" : "lg:w-10/12 w-full"
                            } text-gray-100`}
                        >
                            <header className="bg-slate-900 p-4 flex justify-between items-center sticky top-0">
                                <div
                                    className="text-2xl font-semibold leading-tight cursor-pointer"
                                    onClick={show}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 stroke-slate-100"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <line x1={4} y1={6} x2={20} y2={6} />
                                        <line x1={4} y1={12} x2={20} y2={12} />
                                        <line x1={4} y1={18} x2={20} y2={18} />
                                    </svg>
                                </div>
                                <MyPopover />
                            </header>
                            <main className="p-5">
                                <div>{props.children}</div>
                            </main>
                        </div>
                    </div>
                </div>
            ) : (
                <Notfound />
            )}
        </>
    );
}
