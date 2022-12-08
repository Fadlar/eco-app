import Header from "@/Components/Header";
import Admin from "@/Layouts/Admin";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Show({ wd }) {
    return (
        <>
            <div className="container text-gray-900">
                <div className="mb-6 flex items-center justify-between">
                    <Header desc={"Detail pengajuan penarikan poin."}>
                        Detail Penarikan Poin
                    </Header>
                </div>
                <div className="overflow-hidden bg-white sm:rounded-lg">
                    <div>
                        <dl>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Data Penjual
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {wd.user.name} - {wd.user.email} -{" "}
                                    {wd.user.user_detail === null
                                        ? ""
                                        : wd.user.user_detail.phone_number}
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Nama Bank
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {wd.nama_bank}
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Nomor Rekening
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {wd.no_rekening}
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Jumlah Uang
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {currencyFormat(wd.jumlah_uang)}
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Jumlah Poin
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {wd.jumlah_poin} Poin
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Status
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <span className="inline animate-pulse rounded-full border-blue-600 bg-blue-600/20 py-1 px-3 text-xs font-medium tracking-tight text-slate-600">
                                        {wd.status === "waiting"
                                            ? "Menunggu Konfirmasi"
                                            : wd.status === "cancel"
                                            ? "Penarikan Ditolak"
                                            : wd.status === "done"
                                            ? "Penarikan Diterima"
                                            : ""}
                                    </span>
                                </dd>
                            </div>
                            {wd.status === "waiting" ? (
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500"></dt>
                                    <dd className="mt-1 space-x-2 text-right text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                        <>
                                            <Link
                                                href={`/withdraws/${wd.id}/done`}
                                                className="inline-flex items-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-xs font-semibold tracking-widest text-white transition duration-150 ease-in-out"
                                            >
                                                Konfirmasi
                                            </Link>
                                            <Link
                                                href={`/withdraws/${wd.id}/cancel`}
                                                className="inline-flex items-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-xs font-semibold tracking-widest text-white transition duration-150 ease-in-out"
                                            >
                                                Tolak
                                            </Link>
                                        </>
                                    </dd>
                                </div>
                            ) : (
                                ""
                            )}
                        </dl>
                    </div>
                </div>
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

Show.layout = (page) => <Admin children={page} title="Detail Penarikan Poin" />;
