import App from "@/Layouts/App";
import { Tab } from "@headlessui/react";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Index({ auth, waiting, rejected, pickup, done }) {
    const addUrl = route("pickups.create");
    return (
        <>
            <div className="mt-2">
                <div className="mb-10 flex gap-x-4">
                    <div className="w-[35%]">
                        <img
                            src={
                                auth.user.user_detail === null
                                    ? "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                                    : "/storage/" + auth.user.user_detail.avatar
                            }
                            className="rounded-full"
                            alt="avatar"
                        />
                    </div>
                    <div className="w-[65%] pt-1">
                        <h2 className="text-2xl font-semibold tracking-tighter text-gray-700">
                            {auth.user.name}
                        </h2>
                        <h4 className="mb-0.5 text-sm text-gray-600">
                            {auth.user.email}
                        </h4>
                        <h4 className="text-xs text-gray-600">
                            +62 8963 015 7114
                        </h4>
                        <div className="mt-3 flex space-x-2">
                            <Link
                                method="post"
                                href={route("logout")}
                                as="button"
                                className="w-full rounded-xl border border-green-700/50 bg-white py-2 text-center text-xs font-semibold tracking-tight text-gray-700"
                            >
                                Logout
                            </Link>
                            <Link
                                href="/edit/profile"
                                className="w-full rounded-xl border border-green-700/50 bg-green-700 py-2 text-center text-xs font-semibold tracking-tight text-white"
                            >
                                Edit Profil
                            </Link>
                        </div>
                    </div>
                </div>
                <Tab.Group>
                    <Tab.List className="flex gap-x-3 overflow-x-auto scrollbar-thin">
                        <Tab className="whitespace-nowrap rounded-full border border-green-700/50 py-1.5 px-5 text-center text-sm focus:outline-none ui-selected:bg-green-700 ui-selected:font-semibold ui-selected:text-green-50 ui-not-selected:bg-green-700/20 ui-not-selected:font-medium ui-not-selected:text-green-900">
                            History
                        </Tab>
                        <Tab className="whitespace-nowrap rounded-full border border-green-700/50 py-1.5 px-5 text-center text-sm focus:outline-none ui-selected:bg-green-700 ui-selected:font-semibold ui-selected:text-green-50 ui-not-selected:bg-green-700/20 ui-not-selected:font-medium ui-not-selected:text-green-900">
                            Menunggu Konfirmasi
                        </Tab>
                        <Tab className="whitespace-nowrap rounded-full border border-green-700/50 py-1.5 px-5 text-center text-sm focus:outline-none ui-selected:bg-green-700 ui-selected:font-semibold ui-selected:text-green-50 ui-not-selected:bg-green-700/20 ui-not-selected:font-medium ui-not-selected:text-green-900">
                            Menunggu Penjemputan
                        </Tab>
                        <Tab className="whitespace-nowrap rounded-full border border-green-700/50 py-1.5 px-5 text-center text-sm focus:outline-none ui-selected:bg-green-700 ui-selected:font-semibold ui-selected:text-green-50 ui-not-selected:bg-green-700/20 ui-not-selected:font-medium ui-not-selected:text-green-900">
                            Penjemputan Ditolak
                        </Tab>
                    </Tab.List>
                    <Tab.Panels className="mt-5">
                        <Tab.Panel className={"space-y-2.5"}>
                            {done.data.length > 0 ? (
                                <>
                                    {done.data.map((d) => (
                                        <div
                                            key={d.id}
                                            className="flex w-full items-center justify-between rounded-xl border border-green-700/80 bg-green-700/30 p-3"
                                        >
                                            <div>
                                                <div className="font-medium text-gray-700">
                                                    {d.created_at}
                                                </div>
                                                <div className="text-gray-800">
                                                    Sampah Dikumpulkan
                                                </div>
                                            </div>
                                            <Link
                                                className="float-right"
                                                href={route(
                                                    "profile.show",
                                                    d.id
                                                )}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="stroke-gray-600"
                                                    width={34}
                                                    height={34}
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path
                                                        stroke="none"
                                                        d="M0 0h24v24H0z"
                                                        fill="none"
                                                    />
                                                    <polyline points="9 6 15 12 9 18" />
                                                </svg>
                                            </Link>
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <div className="rounded-xl bg-white p-5 text-center text-gray-700">
                                    Tidak ada data
                                </div>
                            )}
                        </Tab.Panel>
                        <Tab.Panel className={"space-y-2.5"}>
                            {waiting.data.length > 0 ? (
                                <>
                                    {waiting.data.map((d) => (
                                        <div
                                            key={d.id}
                                            className="flex w-full items-center justify-between rounded-xl border border-yellow-500/80 bg-yellow-500/30 p-3"
                                        >
                                            <div>
                                                <div className="font-medium text-gray-700">
                                                    {d.created_at}
                                                </div>
                                                <div className="text-gray-800">
                                                    Sampah Dikumpulkan
                                                </div>
                                            </div>
                                            <Link
                                                className="float-right"
                                                href={route(
                                                    "profile.show",
                                                    d.id
                                                )}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="stroke-gray-600"
                                                    width={34}
                                                    height={34}
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path
                                                        stroke="none"
                                                        d="M0 0h24v24H0z"
                                                        fill="none"
                                                    />
                                                    <polyline points="9 6 15 12 9 18" />
                                                </svg>
                                            </Link>
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <div className="rounded-xl bg-white p-5 text-center text-gray-700">
                                    Tidak ada data
                                </div>
                            )}
                        </Tab.Panel>
                        <Tab.Panel className={"space-y-2.5"}>
                            {pickup.data.length > 0 ? (
                                <>
                                    {pickup.data.map((d) => (
                                        <div
                                            key={d.id}
                                            className="flex w-full items-center justify-between rounded-xl border border-blue-500/80 bg-blue-500/30 p-3"
                                        >
                                            <div>
                                                <div className="font-medium text-gray-700">
                                                    {d.created_at}
                                                </div>
                                                <div className="text-gray-800">
                                                    Sampah Dikumpulkan
                                                </div>
                                            </div>
                                            <Link
                                                className="float-right"
                                                href={route(
                                                    "profile.show",
                                                    d.id
                                                )}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="stroke-gray-600"
                                                    width={34}
                                                    height={34}
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path
                                                        stroke="none"
                                                        d="M0 0h24v24H0z"
                                                        fill="none"
                                                    />
                                                    <polyline points="9 6 15 12 9 18" />
                                                </svg>
                                            </Link>
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <div className="rounded-xl bg-white p-5 text-center text-gray-700">
                                    Tidak ada data
                                </div>
                            )}
                        </Tab.Panel>
                        <Tab.Panel className={"space-y-2.5"}>
                            {rejected.data.length > 0 ? (
                                <>
                                    {rejected.data.map((d) => (
                                        <div
                                            key={d.id}
                                            className="flex w-full items-center justify-between rounded-xl border border-rose-500/80 bg-rose-500/30 p-3"
                                        >
                                            <div>
                                                <div className="font-medium text-gray-700">
                                                    {d.created_at}
                                                </div>
                                                <div className="text-gray-800">
                                                    Sampah Dikumpulkan
                                                </div>
                                            </div>
                                            <Link
                                                className="float-right"
                                                href={route(
                                                    "profile.show",
                                                    d.id
                                                )}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="stroke-gray-600"
                                                    width={34}
                                                    height={34}
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path
                                                        stroke="none"
                                                        d="M0 0h24v24H0z"
                                                        fill="none"
                                                    />
                                                    <polyline points="9 6 15 12 9 18" />
                                                </svg>
                                            </Link>
                                        </div>
                                    ))}
                                </>
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

Index.layout = (page) => <App children={page} title={`Pickup Trash`} />;
