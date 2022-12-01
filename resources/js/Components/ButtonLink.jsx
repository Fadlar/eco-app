import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function ButtonLink({ children, href, className }) {
    return (
        <Link
            href={href}
            className={
                `inline-flex items-center rounded-md border border-transparent bg-gray-900 px-4 py-2 text-xs font-semibold tracking-widest text-white transition duration-150 ease-in-out active:bg-gray-900` +
                className
            }
        >
            <div>{children}</div>
        </Link>
    );
}
