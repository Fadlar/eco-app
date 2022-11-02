import Header from "@/Components/Header";
import Pagination from "@/Components/Pagination";
import Admin from "@/Layouts/Admin";
import { Link, usePage } from "@inertiajs/inertia-react";
import React from "react";

export default function Index(props) {
    const addUrl = "/trash-type/create";
    const { types } = usePage().props;
    return (
        <>
            <div className="container text-gray-900">
                <Header>
                    Trash Type
                    <Link
                        href={addUrl}
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm text-white shadow-sm shadow-slate-700 transition duration-300 hover:bg-indigo-700/100"
                    >
                        Add Trash Type
                    </Link>
                </Header>
                {types.data.length > 0 ? (
                    <div className="overflow-hidden rounded-md border text-gray-900 shadow-sm">
                        <>
                            <div className="overflow-x-auto scrollbar-thin scrollbar-track-slate-50 scrollbar-thumb-slate-200">
                                <table className="w-full whitespace-nowrap p-6 text-left text-sm">
                                    <colgroup>
                                        <col className="w-5" />
                                        <col className="w-52" />
                                        <col />
                                        <col className="w-5" />
                                    </colgroup>
                                    <thead>
                                        <tr className="border-b bg-gray-50">
                                            <th className="p-3">#</th>
                                            <th className="p-3">Icon</th>
                                            <th className="p-3">Name</th>
                                            <th className="p-3">
                                                <span className="sr-only">
                                                    Edit
                                                </span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        {types.data.map((t, index) => (
                                            <tr
                                                key={t.id}
                                                className="border-b last:border-0"
                                            >
                                                <td className="px-3 py-2 text-center">
                                                    <p>{index + 1}</p>
                                                </td>
                                                <td className="px-3 py-2">
                                                    <p>Dwight Adams</p>
                                                </td>
                                                <td className="px-3 py-2">
                                                    <p>{t.name}</p>
                                                </td>
                                                <td className="space-x-1 p-3 text-right">
                                                    <a
                                                        href="#"
                                                        className="px-2 py-0.5 text-sm font-semibold text-indigo-600"
                                                    >
                                                        <span>Edit</span>
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </>
                        <Pagination data={types} />
                    </div>
                ) : (
                    <div className="rounded-lg border-2 border-dashed bg-gray-100">
                        <div className="px-3 py-16 text-center text-sm font-medium tracking-tight text-gray-600">
                            Click{" "}
                            <Link
                                href={addUrl}
                                className="font-semibold text-indigo-600 hover:underline"
                            >
                                here
                            </Link>{" "}
                            for new data.
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

Index.layout = (page) => <Admin children={page} />;
