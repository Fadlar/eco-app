import React from "react";

export default function Header({ children }) {
    return (
        <h2 className="mb-4 flex items-center justify-between text-2xl font-semibold leading-tight">
            {children}
        </h2>
    );
}
