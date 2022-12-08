import Header from "@/Components/Header";
import Pagination from "@/Components/Pagination";
import Admin from "@/Layouts/Admin";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Index({ users }) {
    return (
        <>
            <div className="container text-gray-900">
                <div className="mb-6 flex items-center justify-between">
                    <Header desc={"Daftar semua penjual."}>Data Penjual</Header>
                </div>
                {users.data.length > 0 ? (
                    <div className="overflow-hidden rounded-md border text-gray-900 shadow-sm">
                        <>
                            <div className="overflow-x-auto scrollbar-thin scrollbar-track-slate-50 scrollbar-thumb-slate-200">
                                <table className="w-full whitespace-nowrap p-6 text-left text-sm">
                                    <colgroup>
                                        <col className="w-14" />
                                        <col />
                                        <col />
                                        <col className="w-5" />
                                    </colgroup>
                                    <thead>
                                        <tr className="border-b bg-gray-50">
                                            <th className="p-3 text-center">
                                                #
                                            </th>
                                            <th className="p-3">Nama</th>
                                            <th className="p-3">Email</th>
                                            <th className="p-3">
                                                Nomor Telepon
                                            </th>
                                            <th className="p-3">Data Pickup</th>
                                            <th className="p-3">
                                                Data Withdrawals
                                            </th>
                                            <th className="p-3">Status</th>
                                            <th className="p-3">
                                                <span className="sr-only">
                                                    Edit
                                                </span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        {users.data.map((t, index) => (
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
                                                <td className="px-3 py-2">
                                                    <p>{t.email}</p>
                                                </td>
                                                <td className="space-x-1 px-3 py-2">
                                                    {t.user_detail === null
                                                        ? "-"
                                                        : t.user_detail
                                                              ?.phone_number}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {t.pickups?.length}
                                                </td>
                                                <td className="px-3 py-2">
                                                    <p>
                                                        {t.withdrawals?.length}
                                                    </p>
                                                </td>
                                                <td className="px-3 py-2">
                                                    <p className="inline rounded-full border-blue-600 bg-blue-600/20 py-0.5 px-1.5 text-xs font-medium capitalize tracking-tight text-slate-600">
                                                        {t.status}
                                                    </p>
                                                </td>
                                                <td className="p-3 text-right">
                                                    <Link
                                                        href={`penjual/${t.id}`}
                                                        className="font-semibold text-blue-600"
                                                    >
                                                        Detail
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </>
                        <Pagination data={users} />
                    </div>
                ) : (
                    <div className="rounded-lg border-2 border-dashed bg-gray-100">
                        <div className="px-3 py-16 text-center text-sm font-medium tracking-tight text-gray-600">
                            Tidak ada data.
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

Index.layout = (page) => <Admin children={page} title={"Data Penjual"} />;
