import React from "react";

export default function Header({ children }) {
    return (
        <h2 className="flex justify-between items-center mb-4 text-2xl font-semibold leading-tight">
            {children}
        </h2>
    );
}
