import App from "@/Layouts/App";
import React from "react";

export default function Show({ pickup }) {
    const data = pickup.data;
    return (
        <>
            <div className="space-y-3">
                <div className="rounded-xl bg-white py-3 px-4">
                    <div className="my-2 text-gray-700">
                        <span className="font-semibold">Berat</span> :{" "}
                        {data.weight} Kg
                    </div>
                    <div className="my-2 text-gray-700">
                        <span className="font-semibold">Estimasi poin</span>:{" "}
                        {data.point} poin
                    </div>
                </div>
                <div className="rounded-xl bg-white py-3 px-4">
                    <h2 className="font-semibold text-gray-800">
                        Jenis Sampah
                    </h2>
                    <div className="mt-2">
                        {data.trash_type.map((type) => (
                            <span
                                key={type.id}
                                className="ml-2 mb-2 inline-flex rounded-full border-blue-600 bg-blue-600/20 py-2 px-6 text-sm font-semibold tracking-tight text-slate-600"
                            >
                                {type.name}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="rounded-xl bg-white py-3 px-4">
                    <h2 className="font-semibold text-gray-800">
                        Alamat Pengambilan
                    </h2>
                    <div className="my-2 text-gray-700">{data.address}</div>
                </div>
                <div className="rounded-xl bg-white py-3 px-4">
                    <h2 className="font-semibold text-gray-800">
                        Jadwal Pengambilan
                    </h2>
                    <div className="my-2 text-gray-700">
                        {data.start} - {data.end}
                    </div>
                </div>
                {data.reply !== null && (
                    <div className="rounded-xl bg-white py-3 px-4">
                        <h2 className="font-semibold text-gray-800">Balasan</h2>
                        <div className="my-2 text-gray-700">{data.reply}</div>
                    </div>
                )}
            </div>
        </>
    );
}
Show.layout = (page) => (
    <App.Two children={page} title="Detail Sampah Pickup" back={"/profile"} />
);
