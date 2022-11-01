import Header from "@/Components/Header";
import Pagination from "@/Components/Pagination";
import Admin from "@/Layouts/Admin";
import { Link, usePage } from "@inertiajs/inertia-react";
import React from "react";

export default function Index(props) {
    const { types } = usePage().props;
    return (
        <>
            <div className="text-gray-100">
                <Header>
                    Tipe Sampah
                    <Link
                        href="/trash-type/create"
                        className="px-3 py-2 text-sm bg-slate-900 shadow-sm shadow-slate-700 rounded hover:bg-slate-700/100 transition duration-300"
                    >
                        Tambah
                    </Link>
                </Header>
                <div className="overflow-x-auto">
                    <table className="w-full p-6 text-sm text-left whitespace-nowrap">
                        <colgroup>
                            <col className="w-5" />
                            <col className="w-52" />
                            <col />
                            <col className="w-5" />
                        </colgroup>
                        <thead>
                            <tr className="bg-gray-700">
                                <th className="p-3">#</th>
                                <th className="p-3">Icon</th>
                                <th className="p-3">Nama</th>
                                <th className="p-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-900">
                            {types.data.map((t, index) => (
                                <tr
                                    key={t.id}
                                    className="border-b last:border-0 border-gray-700"
                                >
                                    <td className="px-3 py-2">
                                        <p>{index + 1}</p>
                                    </td>
                                    <td className="px-3 py-2">
                                        <p>Dwight Adams</p>
                                    </td>
                                    <td className="px-3 py-2">
                                        <p>{t.name}</p>
                                    </td>
                                    <td className="p-3 text-right space-x-1">
                                        <a
                                            href="#"
                                            className="px-2 text-xs py-0.5 font-semibold rounded-md bg-slate-500/30 transition duration-300 hover:bg-slate-500 text-gray-50"
                                        >
                                            <span>Edit</span>
                                        </a>
                                        <a
                                            href="#"
                                            className="px-2 text-xs py-0.5 font-semibold rounded-md bg-slate-500/30 transition duration-300 hover:bg-slate-500 text-gray-50"
                                        >
                                            <span>Hapus</span>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Pagination links={types.links} />
            </div>
        </>
    );
}

Index.layout = (page) => <Admin children={page} />;
