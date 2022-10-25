import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Head, Link } from "@inertiajs/inertia-react";

export default function Guest({ children, title }) {
    return (
        <>
            <Head title={title ?? "ECO APP"} />
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
                <div>
                    <Link href="/">
                        <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                    </Link>
                </div>

                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    {children}
                </div>
            </div>
        </>
    );
}
