import ButtonLink from "@/Components/ButtonLink";
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
                <div className="mb-6 flex items-center justify-between">
                    <Header desc={"Daftar semua jenis sampah."}>
                        Jenis Sampah
                    </Header>
                    <ButtonLink href={addUrl}>Add Trash Type</ButtonLink>
                </div>
                {types.data.length > 0 ? (
                    <div className="overflow-hidden rounded-md border text-gray-900 shadow-sm">
                        <>
                            <div className="overflow-x-auto scrollbar-thin scrollbar-track-slate-50 scrollbar-thumb-slate-200">
                                <table className="w-full whitespace-nowrap p-6 text-left text-sm">
                                    <colgroup>
                                        <col className="w-14" />
                                        <col />
                                        <col className="w-5" />
                                    </colgroup>
                                    <thead>
                                        <tr className="border-b bg-gray-50">
                                            <th className="p-3 text-center">
                                                #
                                            </th>
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
                                                    <p>{t.name}</p>
                                                </td>
                                                <td className="p-3 text-right">
                                                    <Link
                                                        href={`/trash-type/${t.id}/edit`}
                                                        className="px-2 py-0.5 text-sm font-semibold text-indigo-600"
                                                    >
                                                        <span>Edit</span>
                                                    </Link>
                                                    <Link
                                                        href={route(
                                                            "trash-type.destroy",
                                                            t.id
                                                        )}
                                                        method={`delete`}
                                                        className="px-2 py-0.5 text-sm font-semibold text-rose-600"
                                                    >
                                                        Delete
                                                    </Link>
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

Index.layout = (page) => <Admin children={page} title={"Trash Type"} />;
