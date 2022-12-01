import React from "react";
import NavBar from "@/Components/NavBar";
import { Head, Link, usePage } from "@inertiajs/inertia-react";

function App({ children, title }) {
    const { auth } = usePage().props;
    return (
        <>
            <Head title={title && title} />

            <div className="min-h-screen bg-gray-50 lg:flex">
                <NavBar className="hidden lg:block" auth={auth} />
                <NavBar.Responsive className="block lg:hidden" auth={auth} />
                <main className="w-full py-5 px-6 lg:w-4/5 lg:py-12 lg:px-8">
                    {children}
                </main>
            </div>
        </>
    );
}

function AppTwo({ children, title }) {
    const { auth } = usePage().props;
    return (
        <>
            <Head title={title && title} />

            <div className="min-h-screen bg-gray-50">
                <Link
                    href={route("pickups.index")}
                    className={`flex items-center justify-between bg-white px-5 py-4`}
                >
                    <div className="flex items-center gap-x-1 text-sm font-semibold tracking-tighter">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-gray-500"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="#597e8d"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1={5} y1={12} x2={19} y2={12} />
                            <line x1={5} y1={12} x2={11} y2={18} />
                            <line x1={5} y1={12} x2={11} y2={6} />
                        </svg>
                        <span className="text-gray-700">{title}</span>
                    </div>
                </Link>
                <main className="w-full py-5 px-6 lg:w-4/5 lg:py-12 lg:px-8">
                    {children}
                </main>
            </div>
        </>
    );
}

App.Two = AppTwo;

export default App;
