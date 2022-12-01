import React from "react";

export default function Header({ children, className, desc }) {
    return (
        <h2 className={`${className} text-xl font-semibold leading-loose`}>
            {children}
            <span className="block text-sm font-normal text-slate-600">
                {desc}
            </span>
        </h2>
    );
}
