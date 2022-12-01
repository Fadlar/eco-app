import Sidebar from "@/Components/Sidebar";
import React from "react";
import { Head, usePage } from "@inertiajs/inertia-react";
import { Toaster } from "react-hot-toast";

export default function Admin(props) {
    const { auth } = usePage().props;
    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            <Toaster
                position="top-right"
                reverseOrder={false}
                toastOptions={{
                    className: "border border-indigo-600/30 bg-indigo-50",
                    style: { background: "#eef2ff" },
                }}
            />
            <div className="relative overflow-hidden">
                <div className="relative flex min-h-screen">
                    <Sidebar />
                    <Sidebar.Responsive />
                    <div className="w-full bg-gray-100 text-gray-100 lg:w-10/12">
                        <main className="p-5">
                            <div>{props.children}</div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}
