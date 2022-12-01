import React from "react";
import App from "@/Layouts/App";
import { Head, Link } from "@inertiajs/inertia-react";
import Heading from "@/Components/Heading";

export default function Dashboard() {
    return (
        <>
            <Heading header={`Home`} desc={`Lorem ipsum dolor sit amet.`} />
            <div className="mx-auto max-w-7xl">
                <div className="overflow-hidden bg-white sm:rounded-2xl">
                    <div className="bg-white p-6 leading-relaxed">
                        You are log in.{" "}
                        <Link href="#" className="text-blue-600 underline">
                            Pickup Now
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = (page) => <App title={`Dashboard`} children={page} />;
