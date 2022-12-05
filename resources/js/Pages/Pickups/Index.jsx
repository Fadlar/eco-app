import App from "@/Layouts/App";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Index({ trashPickups }) {
    const addUrl = route("pickups.create");
    return (
        <>
            <div className="mt-4">
                <header className="mb-10">
                    <div className="text-lg tracking-tighter">
                        Langkah Pertama Menuju
                    </div>
                    <div className="text-xl font-semibold tracking-tighter">
                        Lingkungan yang lebih Hijau.
                    </div>
                </header>
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="rounded-full bg-white p-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={44}
                                height={44}
                                fill="currentColor"
                                className="fill-green-700"
                                viewBox="0 0 16 16"
                            >
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                            </svg>
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-yellow-500"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="#597e8d"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <polyline points="9 6 15 12 9 18" />
                        </svg>
                        <div className="rounded-full bg-white p-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={44}
                                height={44}
                                fill="currentColor"
                                className="fill-green-700"
                                viewBox="0 0 16 16"
                            >
                                <path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                                <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
                            </svg>
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-yellow-500"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="#597e8d"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <polyline points="9 6 15 12 9 18" />
                        </svg>
                        <div className="rounded-full bg-white p-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={44}
                                height={44}
                                fill="currentColor"
                                className="fill-green-700"
                                viewBox="0 0 16 16"
                            >
                                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-1.5 tracking-tight">
                            <span className="text-2xl font-bold tracking-tighter text-yellow-500">
                                01
                            </span>
                            <span className="text-[0.70rem] font-medium leading-3 text-gray-500">
                                Memilah <br /> Sampah
                            </span>
                        </div>
                        <div className="flex items-center gap-x-1.5 tracking-tight">
                            <span className="text-2xl font-bold tracking-tighter text-yellow-500">
                                02
                            </span>
                            <span className="text-[0.70rem] font-medium leading-3 text-gray-500">
                                Jadwalkan <br /> Penjemputan
                            </span>
                        </div>
                        <div className="flex items-center gap-x-1.5 tracking-tight">
                            <span className="text-2xl font-bold tracking-tighter text-yellow-500">
                                03
                            </span>
                            <span className="text-[0.70rem] font-medium leading-3 text-gray-500">
                                Pengambilan <br /> Sampah
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-14 text-center">
                    <Link
                        href={route("pickups.create")}
                        className="rounded-lg bg-rose-500 py-3 px-4 text-sm font-semibold tracking-tight text-white"
                    >
                        Menjadwalkan Penjemputan
                    </Link>
                </div>
            </div>
        </>
    );
}

Index.layout = (page) => <App children={page} title={`Pickup Trash`} />;
