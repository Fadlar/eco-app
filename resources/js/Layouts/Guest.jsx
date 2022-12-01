import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Logo from "@/Components/Logo";

export default function Guest({ children, title }) {
    return (
        <>
            <main className="flex min-h-screen flex-col bg-slate-100 md:flex-row">
                <div className="w-1/3" />
                <div className="relative flex w-full items-center justify-center border-slate-300 md:border-l lg:w-2/5">
                    <div className="flex w-full items-center justify-center md:min-h-screen md:p-10">
                        <div className="w-full">
                            <div className="border-primary-700 bg-slate-1000 shadow-primary-900/30 relative flex justify-center border-slate-300  md:flex-none md:justify-start">
                                <a
                                    className="mb-3 flex shrink-0 items-center pt-6 focus:outline-none md:-ml-[5.25rem] md:mb-0 md:pt-0 lg:mb-6"
                                    href="/"
                                >
                                    <div className="rounded-full bg-green-700 p-5 md:-mb-[6.1rem]">
                                        <Logo
                                            className={`h-8 w-8 lg:h-10 lg:w-10`}
                                        />
                                    </div>
                                </a>
                            </div>
                            {children}
                        </div>
                    </div>
                </div>
            </main>

            <Head title={title ?? "ECO APP"} />
        </>
    );
}
