import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Pagination({ data }) {
    function isActive(active) {
        if (active) {
            return "z-10 border-indigo-500 bg-indigo-50 text-indigo-600";
        } else {
            return "border-gray-300 text-gray-500";
        }
    }
    return (
        data.links.length > 3 && (
            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                <div className="flex flex-1 justify-end sm:hidden">
                    <a
                        href="#"
                        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        Previous
                    </a>
                    <a
                        href="#"
                        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        Next
                    </a>
                </div>
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700">
                            Showing{" "}
                            <span className="font-medium">
                                {data.current_page}
                            </span>{" "}
                            to{" "}
                            <span className="font-medium">
                                {data.last_page}
                            </span>{" "}
                            of <span className="font-medium">{data.total}</span>{" "}
                            results
                        </p>
                    </div>
                    <div>
                        <nav
                            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                            aria-label="Pagination"
                        >
                            {data.links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url === null ? "#" : link.url}
                                    className={`${isActive(link.active)} ${
                                        link.label === "next"
                                            ? "rounded-r-md px-2"
                                            : link.label === "prev"
                                            ? "rounded-l-md px-2"
                                            : "rounded-none px-4"
                                    } ${
                                        link.url === null
                                            ? "cursor-not-allowed bg-gray-300/50"
                                            : "cursor-pointer bg-white hover:bg-gray-50"
                                    } relative inline-flex items-center border py-2 text-sm font-medium focus:z-20`}
                                >
                                    {link.label === "next" ? (
                                        <svg
                                            className="h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : link.label === "prev" ? (
                                        <svg
                                            className="h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        link.label
                                    )}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
            // <div className="flex justify-end space-x-1 text-gray-100 mt-3">
            //     {links.map((link, key) =>
            //         link.url === null ? (
            //             <div
            //                 key={key}
            //                 title="previous"
            //                 type="button"
            //                 className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-700 cursor-not-allowed border-gray-800"
            //                 dangerouslySetInnerHTML={{ __html: link.label }}
            //             />
            //         ) : (
            //             <Link
            //                 key={key}
            //                 href={link.url}
            //                 title={link.label}
            //                 type="button"
            //                 className={`${isActive(
            //                     link.active
            //                 )} inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-900 border-gray-800`}
            //                 dangerouslySetInnerHTML={{ __html: link.label }}
            //             />
            //         )
            //     )}
            //     {/* <button
            //         type="button"
            //         title="Page 1"
            //         className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md bg-gray-900"
            //     >
            //         1
            //         </button> */}
            // </div>
        )
    );
}
