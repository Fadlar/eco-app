import React from "react";

export default function Heading({ header, desc, children }) {
    return (
        <>
            {header && (
                <header className="flex items-center justify-between">
                    <div className="mb-6 space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">
                            {header}
                        </h2>
                        <p className="text-sm font-light text-slate-600">
                            {desc}
                        </p>
                    </div>
                    {children}
                </header>
            )}
        </>
    );
}
