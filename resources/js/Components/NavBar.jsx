import { Link } from "@inertiajs/inertia-react";
import React from "react";
import ApplicationLogo from "./ApplicationLogo";

function NavBar({ auth, className }) {
    let router = window.location.pathname;
    router = router.split("/")[1];
    const menus = [
        {
            icon: (
                <>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="5 12 3 12 12 3 21 12 19 12" />
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                </>
            ),
            title: "Home",
            href: "/",
        },
        {
            icon: (
                <>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx={7} cy={17} r={2} />
                    <circle cx={17} cy={17} r={2} />
                    <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                    <line x1={3} y1={9} x2={7} y2={9} />
                </>
            ),
            title: "Pick-up",
            href: "/pickups",
        },
        {
            icon: (
                <>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                    <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                </>
            ),
            title: "Withdrawals",
            href: "/withdrawals",
        },
        {
            icon: (
                <>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx={12} cy={7} r={4} />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </>
            ),
            title: "Profil",
            href: "/profil",
        },
    ];
    return (
        <>
            <aside
                className={`${className} sticky top-10 my-10 ml-5 max-h-[89vh] w-1/5 overflow-y-scroll rounded-3xl bg-white scrollbar`}
            >
                <div className="space-y-10 px-9 py-7">
                    <div className="space-y-3">
                        <figure>
                            <img
                                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                                alt="avatar"
                                className="h-16 w-16 rounded-full"
                            />
                        </figure>
                        <div className="leading-tight">
                            <h3 className="text-lg font-semibold text-gray-800">
                                {auth.user.name}
                            </h3>
                            <span className="text-sm text-slate-500">
                                Fullstack Web Developer
                            </span>
                        </div>
                    </div>
                    <div className="space-y-5">
                        {menus.map((m, index) => (
                            <div
                                className="group flex items-start space-x-2"
                                key={index}
                            >
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`${
                                            router === m.href.split("/")[1]
                                                ? "stroke-slate-700"
                                                : "stroke-slate-500"
                                        } transition-colors duration-300 group-hover:stroke-slate-800`}
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        {m.icon}
                                    </svg>
                                </span>
                                <Link
                                    href={m.href}
                                    className={`${
                                        router === m.href.split("/")[1]
                                            ? "text-slate-700"
                                            : "text-slate-500"
                                    } font-medium tracking-tight transition-colors duration-300 group-hover:text-slate-700`}
                                >
                                    {m.title}
                                </Link>
                            </div>
                        ))}
                        <div className="group flex items-start space-x-2">
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`stroke-slate-500 transition-colors duration-300 group-hover:stroke-slate-800`}
                                    width={24}
                                    height={24}
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
                                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                    <path d="M7 12h14l-3 -3m0 6l3 -3" />
                                </svg>
                            </span>
                            <Link
                                method="post"
                                as="button"
                                href={route("logout")}
                                className={`font-medium tracking-tight text-slate-500 transition-colors duration-300 group-hover:text-slate-700`}
                            >
                                Logout
                            </Link>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}
function ResponsiveNav({ auth, className }) {
    let router = window.location.pathname;
    router = router.split("/")[1];
    const menus = [
        {
            icon: (
                <>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="5 12 3 12 12 3 21 12 19 12" />
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                </>
            ),
            title: "Home",
            href: "/",
        },
        {
            icon: (
                <>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx={7} cy={17} r={2} />
                    <circle cx={17} cy={17} r={2} />
                    <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                    <line x1={3} y1={9} x2={7} y2={9} />
                </>
            ),
            title: "Pick up",
            href: "/pickups",
        },
        {
            icon: (
                <>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                    <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                </>
            ),
            title: "Withdrawals",
            href: "/withdrawals",
        },
        {
            icon: (
                <>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx={12} cy={7} r={4} />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </>
            ),
            title: "Profil",
            href: "/profile",
        },
    ];
    return (
        <>
            <div
                className={`${className} flex items-center justify-between bg-white px-5 py-4`}
            >
                <Link
                    href="/"
                    className="text-sm font-semibold tracking-tighter"
                >
                    <ApplicationLogo className={"h-9 w-9"} />
                </Link>
                <Link href={route("logout")} method="post">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={26}
                        height={26}
                        fill="currentColor"
                        className="fill-green-900"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
                        />
                        <path
                            fillRule="evenodd"
                            d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                        />
                    </svg>
                </Link>
            </div>
            <aside
                className={`${className} fixed bottom-0 flex w-full justify-center bg-white`}
            >
                <div className="relative w-full px-6 py-3">
                    <div className="flex justify-between gap-x-3">
                        {menus.map((m, index) => (
                            <Link
                                href={m.href}
                                className="group flex flex-col items-center"
                                key={index}
                            >
                                <span className="block">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`${
                                            router === m.href.split("/")[1]
                                                ? "stroke-slate-700"
                                                : "stroke-slate-500"
                                        } transition-colors duration-300 group-hover:stroke-slate-800`}
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        {m.icon}
                                    </svg>
                                </span>
                                <div
                                    className={`${
                                        router === m.href.split("/")[1]
                                            ? "font-semibold text-slate-700"
                                            : "font-medium text-slate-500"
                                    } text-xs tracking-tight transition-colors duration-300 group-hover:text-slate-700`}
                                >
                                    {m.title}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </aside>
        </>
    );
}

NavBar.Responsive = ResponsiveNav;

export default NavBar;
