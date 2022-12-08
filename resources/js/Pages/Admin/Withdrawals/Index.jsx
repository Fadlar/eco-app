import Header from "@/Components/Header";
import Pagination from "@/Components/Pagination";
import Admin from "@/Layouts/Admin";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Index({ withdrawals }) {
    return (
        <>
            <div className="container text-gray-900">
                <div className="mb-6 flex items-center justify-between">
                    <Header desc={"Daftar pengajuan penarikan poin."}>
                        Penarikan Poin
                    </Header>
                </div>
                {withdrawals.data.length > 0 ? (
                    <div className="overflow-hidden rounded-md border text-gray-900 shadow-sm">
                        <>
                            <div className="overflow-x-auto scrollbar-thin scrollbar-track-slate-50 scrollbar-thumb-slate-200">
                                <table className="w-full whitespace-nowrap p-6 text-left text-sm">
                                    <colgroup>
                                        <col className="w-14" />
                                        <col />
                                        <col />
                                        <col />
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
                                            <th className="p-3">Pembayaran</th>
                                            <th className="p-3">Jumlah Uang</th>
                                            <th className="p-3">Jumlah Poin</th>
                                            <th className="p-3">Status</th>
                                            <th className="p-3">
                                                <span className="sr-only">
                                                    Edit
                                                </span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        {withdrawals.data.map((wd, index) => (
                                            <tr
                                                key={wd.id}
                                                className="border-b last:border-0"
                                            >
                                                <td className="px-3 py-2 text-center">
                                                    <p>{index + 1}</p>
                                                </td>
                                                <td className="px-3 py-2">
                                                    <p>{wd.user.name}</p>
                                                </td>
                                                <td className="px-3 py-2">
                                                    <p className="font-medium">
                                                        {wd.nama_bank}
                                                    </p>
                                                    <p>{wd.no_rekening}</p>
                                                </td>
                                                <td className="px-3 py-2">
                                                    <p>
                                                        {currencyFormat(
                                                            wd.jumlah_uang
                                                        )}
                                                    </p>
                                                </td>
                                                <td className="px-3 py-2">
                                                    <p>{wd.jumlah_poin} Poin</p>
                                                </td>
                                                <td className="px-3 py-2">
                                                    <p className="inline rounded-full border-blue-600 bg-blue-600/20 py-1 px-3 text-xs font-medium tracking-tight text-slate-600">
                                                        {wd.status === "waiting"
                                                            ? "Menunggu Konfirmasi"
                                                            : wd.status ===
                                                              "cancel"
                                                            ? "Penarikan Ditolak"
                                                            : wd.status ===
                                                              "done"
                                                            ? "Melakukan Penarikan"
                                                            : ""}
                                                    </p>
                                                </td>
                                                <td className="p-3 text-right">
                                                    <Link
                                                        href={`/withdraws/${wd.id}`}
                                                        className="px-2 py-0.5 text-sm font-semibold text-blue-600"
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
                        <Pagination data={withdrawals} />
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

function currencyFormat(num) {
    const one = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(num);

    return one.replace(",", ".");
}

Index.layout = (page) => <Admin children={page} title="Penarikan Poin" />;
