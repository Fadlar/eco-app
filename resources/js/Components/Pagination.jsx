import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Pagination({ links }) {
    function isActive(active) {
        if (active) {
            return "text-violet-400 border-violet-400";
        } else {
            return "border-gray-800";
        }
    }
    return (
        links.length > 3 && (
            <div className="flex justify-end space-x-1 text-gray-100 mt-3">
                {links.map((link, key) =>
                    link.url === null ? (
                        <div
                            key={key}
                            title="previous"
                            type="button"
                            className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-700 cursor-not-allowed border-gray-800"
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ) : (
                        <Link
                            key={key}
                            href={link.url}
                            title={link.label}
                            type="button"
                            className={`${isActive(
                                link.active
                            )} inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-900 border-gray-800`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    )
                )}
                {/* <button
                    type="button"
                    title="Page 1"
                    className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md bg-gray-900"
                >
                    1
                    </button> */}
            </div>
        )
    );
}
