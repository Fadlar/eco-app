import App from "@/Layouts/App";
import { Tab } from "@headlessui/react";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Index({ auth, done, withdrawals }) {
    return (
        <>
            <div className="mt-2">
                <div className="mb-10 flex gap-x-4">
                    <div className="w-[35%]">
                        <img
                            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                            alt="avatar"
                            className="rounded-full"
                        />
                    </div>
                    <div className="w-[65%] pt-1">
                        <h2 className="text-2xl font-semibold tracking-tighter text-gray-700">
                            {auth.user.name}
                        </h2>
                        <h4 className="mb-0.5 text-lg font-medium text-gray-600">
                            {auth.user.user_detail === null
                                ? "0"
                                : auth.user.user_detail.points === null
                                ? "0"
                                : auth.user.user_detail.points}{" "}
                            Poin
                        </h4>
                        <div className="mt-3 flex space-x-2">
                            <Link
                                href={"/withdrawals/create"}
                                className="w-full rounded-xl border border-green-700/50 bg-white py-2 text-center text-xs font-semibold text-gray-700"
                            >
                                Withdraw
                            </Link>
                        </div>
                    </div>
                </div>
                <Tab.Group>
                    <Tab.List className="flex gap-x-3 overflow-x-auto">
                        <Tab className="whitespace-nowrap rounded-full border border-green-700/50 py-1.5 px-5 text-center text-sm focus:outline-none ui-selected:bg-green-700 ui-selected:font-semibold ui-selected:text-green-50 ui-not-selected:bg-green-700/20 ui-not-selected:font-medium ui-not-selected:text-green-900">
                            Witdrawals
                        </Tab>
                        <Tab className="whitespace-nowrap rounded-full border border-green-700/50 py-1.5 px-5 text-center text-sm focus:outline-none ui-selected:bg-green-700 ui-selected:font-semibold ui-selected:text-green-50 ui-not-selected:bg-green-700/20 ui-not-selected:font-medium ui-not-selected:text-green-900">
                            Rewards History
                        </Tab>
                    </Tab.List>
                    <Tab.Panels className="mt-5">
                        <Tab.Panel>
                            {withdrawals.data.length > 0 ? (
                                <div className="space-y-2">
                                    {withdrawals.data.map((wd) => (
                                        <div
                                            key={wd.id}
                                            className="rounded-lg bg-white"
                                        >
                                            <div className="flex items-center justify-between px-4 py-3">
                                                <div className="py-3">
                                                    <span className="block text-sm tracking-tight text-gray-900">
                                                        {wd.status ===
                                                        "waiting" ? (
                                                            <>{wd.created_at}</>
                                                        ) : (
                                                            <>{wd.created_at}</>
                                                        )}
                                                    </span>
                                                    <span className="block text-sm font-light tracking-tighter text-gray-500">
                                                        {wd.status === "waiting"
                                                            ? "Menunggu Konfirmasi"
                                                            : wd.status ===
                                                              "cancel"
                                                            ? "Penarikan Ditolak"
                                                            : wd.status ===
                                                              "done"
                                                            ? "Melakukan Penarikan"
                                                            : ""}
                                                    </span>
                                                    <span className="text-sm font-medium text-gray-700">
                                                        {wd.nama_bank} (
                                                        {wd.no_rekening})
                                                    </span>
                                                </div>
                                                <div className="text-right">
                                                    <span className="block text-sm text-gray-800">
                                                        {wd.jumlah_uang}
                                                    </span>
                                                    <span className="block text-sm text-gray-800">
                                                        {wd.jumlah_poin} Poin
                                                    </span>
                                                </div>
                                            </div>
                                            {wd.status === "waiting" ? (
                                                <div className="flex justify-end border-t border-gray-50 px-4 py-3">
                                                    <Link
                                                        method="delete"
                                                        as="button"
                                                        href={`/withdrawals/${wd.id}`}
                                                        className="inline-flex rounded-full bg-rose-500 px-4 py-1 text-white"
                                                    >
                                                        Hapus
                                                    </Link>
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="rounded-xl bg-white p-5 text-center text-gray-700">
                                    Tidak ada data
                                </div>
                            )}
                        </Tab.Panel>
                        <Tab.Panel>
                            {done.data.length > 0 ? (
                                <div className="rounded-lg bg-white px-4 py-3">
                                    <div className="space-y-2">
                                        {done.data.map((d) => (
                                            <div
                                                key={d.id}
                                                className="flex items-center justify-between border-b last:border-b-0"
                                            >
                                                <div className="py-3">
                                                    <span className="block text-sm tracking-tight text-gray-900">
                                                        {d.updated_at}
                                                    </span>
                                                    <span className="block text-sm font-light tracking-tighter text-gray-500">
                                                        Sampah Dikumpulkan
                                                    </span>
                                                </div>
                                                <div className="text-sm text-gray-800">
                                                    {d.weight} Kg
                                                </div>
                                                <div className="text-sm text-gray-800">
                                                    {d.point} Poin
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="rounded-xl bg-white p-5 text-center text-gray-700">
                                    Tidak ada data
                                </div>
                            )}
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </>
    );
}

Index.layout = (page) => <App children={page} title="Withdrawals" />;
