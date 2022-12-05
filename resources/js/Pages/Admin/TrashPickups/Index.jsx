import Header from "@/Components/Header";
import Pagination from "@/Components/Pagination";
import Admin from "@/Layouts/Admin";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Index({ pickups }) {
    return (
        <>
            <div className="container text-gray-900">
                <div className="mb-6 flex items-center justify-between">
                    <Header desc={"Daftar semua pickup sampah."}>
                        Pickup Sampah
                    </Header>
                </div>
                {pickups.data.length > 0 ? (
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
                                            <th className="p-3">Penjual</th>
                                            <th className="p-3">Berat</th>
                                            <th className="p-3">
                                                Jenis Sampah
                                            </th>
                                            <th className="p-3">
                                                Jadwal Diangkut
                                            </th>
                                            <th className="p-3">Alamat</th>
                                            <th className="p-3">Status</th>
                                            <th className="p-3">
                                                <span className="sr-only">
                                                    Edit
                                                </span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        {pickups.data.map((t, index) => (
                                            <tr
                                                key={t.id}
                                                className="border-b last:border-0"
                                            >
                                                <td className="px-3 py-2 text-center">
                                                    <p>{index + 1}</p>
                                                </td>
                                                <td className="px-3 py-2">
                                                    <p>{t.user.name}</p>
                                                </td>
                                                <td className="px-3 py-2">
                                                    <p>{t.weight} Kg</p>
                                                </td>
                                                <td className="space-x-1 px-3 py-2">
                                                    {t?.trash_type.map(
                                                        (tt, key) => (
                                                            <span
                                                                key={key}
                                                                className="inline rounded-full border-blue-600 bg-blue-600/20 py-0.5 px-1.5 text-xs font-medium tracking-tight text-slate-600"
                                                            >
                                                                {tt?.name}
                                                            </span>
                                                        )
                                                    )}
                                                </td>
                                                <td className="px-3 py-2">
                                                    <p>
                                                        {t.schedule_start} -{" "}
                                                        {t.schedule_end}
                                                    </p>
                                                </td>
                                                <td className="px-3 py-2">
                                                    <p>{t.address}</p>
                                                </td>
                                                <td className="px-3 py-2">
                                                    <p className="inline rounded-md bg-blue-600 px-1.5 py-0.5 text-xs font-semibold capitalize tracking-tight text-white">
                                                        {t.status}
                                                    </p>
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
                        <Pagination data={pickups} />
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

Index.layout = (page) => <Admin children={page} title={"Trash Pickups"} />;
