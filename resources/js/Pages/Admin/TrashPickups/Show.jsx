import Button from "@/Components/Button";
import Header from "@/Components/Header";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Textarea from "@/Components/Textarea";
import Admin from "@/Layouts/Admin";
import { useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Show({ trashPickup }) {
    const [isReply, setIsReply] = useState(false);
    const { data, setData, put, processing } = useForm({
        weight: trashPickup.weight,
        point: trashPickup.status === "done" ? "0" : trashPickup.points_earned,
        description:
            trashPickup.reply === null ? "" : trashPickup.reply.description,
        status: trashPickup.status,
    });
    const handleChange = (e) => setData(e.target.name, e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("trash-pickups.update", trashPickup.id), {
            preserveScroll: true,
            onSuccess: () => [
                toast.success("Data berhasil diupdate."),
                setIsReply(false),
            ],
        });
    };
    return (
        <>
            <div className="container text-gray-900">
                <div className="mb-6 flex items-center justify-between">
                    <Header desc={"Detail pickup sampah."}>
                        Detail Pickup Sampah
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
                                    {trashPickup.user.name} -{" "}
                                    {trashPickup.user.email} -{" "}
                                    {trashPickup.user.user_detail === null
                                        ? ""
                                        : trashPickup.user.user_detail
                                              .phone_number}
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Berat Sampah
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {trashPickup.weight} Kg
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Jenis Sampah
                                </dt>
                                <dd className="mt-1 space-x-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {trashPickup?.trash_type.map((tt, key) => (
                                        <span
                                            key={key}
                                            className="inline rounded-full border-blue-600 bg-blue-600/20 py-0.5 px-1.5 text-xs font-medium tracking-tight text-slate-600"
                                        >
                                            {tt?.name}
                                        </span>
                                    ))}
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Jadwal Diangkut
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {trashPickup.schedule_start} -{" "}
                                    {trashPickup.schedule_end}
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Alamat
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {trashPickup.address}
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Status
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <span className="inline rounded-full border-blue-600 bg-blue-600/80 py-0.5 px-1.5 text-xs font-medium tracking-tight text-white">
                                        {trashPickup.status === "waiting"
                                            ? "Menunggu Konfirmasi"
                                            : trashPickup.status === "rejected"
                                            ? "Pengambilan Ditolak"
                                            : trashPickup.status === "pickup"
                                            ? "Sampah Diambil"
                                            : "Pengambilan Selesai"}
                                    </span>
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Balasan
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {trashPickup.reply === null ? (
                                        FormReply()
                                    ) : (
                                        <>
                                            {isReply ? (
                                                FormReply()
                                            ) : (
                                                <>
                                                    <div className="flex justify-between gap-x-2">
                                                        <span>
                                                            {
                                                                trashPickup
                                                                    .reply
                                                                    .description
                                                            }
                                                        </span>
                                                        <button
                                                            type="button"
                                                            onClick={(e) =>
                                                                setIsReply(
                                                                    !isReply
                                                                )
                                                            }
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="icon icon-tabler icon-tabler-pencil"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                strokeWidth="1.5"
                                                                stroke="#00bfd8"
                                                                fill="none"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <path
                                                                    stroke="none"
                                                                    d="M0 0h24v24H0z"
                                                                    fill="none"
                                                                />
                                                                <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                                                                <line
                                                                    x1="13.5"
                                                                    y1="6.5"
                                                                    x2="17.5"
                                                                    y2="10.5"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </>
                                            )}
                                        </>
                                    )}
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    );

    function FormReply() {
        return (
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <Label forInput={"weight"} className="mb-1">
                        Konfirmasi Berat Sampah{" "}
                        <span className="text-sm italic tracking-tighter text-yellow-500">
                            (Berat Sampah tidak dapat dirubah ketika status
                            selesai)
                        </span>
                    </Label>
                    <Input
                        className={`w-full ${
                            data.status === "done" ? "bg-gray-50" : ""
                        }`}
                        type="number"
                        name="weight"
                        id="weight"
                        value={data.weight}
                        handleChange={handleChange}
                        disabled={data.status === "done" ? true : false}
                        required
                    />
                </div>
                <div className="mb-3">
                    <Label forInput={"poin"} className="mb-1">
                        Konfirmasi Poin{" "}
                        <span className="text-sm italic tracking-tighter text-yellow-500">
                            (Poin tidak dapat dirubah ketika status selesai)
                        </span>
                    </Label>
                    {trashPickup.status === "done" ? (
                        <Input
                            className={`w-full ${
                                data.status === "done" ? "bg-gray-50" : ""
                            }`}
                            type="number"
                            name="point"
                            id="poin"
                            value={trashPickup.points_earned}
                            disabled={data.status === "done" ? true : false}
                            required
                        />
                    ) : (
                        <Input
                            className={`w-full ${
                                data.status === "done" ? "bg-gray-50" : ""
                            }`}
                            type="number"
                            name="point"
                            id="poin"
                            value={data.point}
                            handleChange={handleChange}
                            disabled={data.status === "done" ? true : false}
                            required
                        />
                    )}
                </div>
                <div className="mb-3">
                    <Label forInput={"description"} className="mb-1">
                        Balasan
                    </Label>
                    <Textarea
                        className={"w-full"}
                        name="description"
                        value={data.description}
                        handleChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <Label forInput={"status"} className="mb-1">
                        Pilih Status{" "}
                        <span className="text-sm italic tracking-tighter text-yellow-500">
                            (Status tidak dapat dirubah ketika status selesai )
                        </span>
                    </Label>
                    <select
                        name="status"
                        id="status"
                        className="w-1/2 rounded-md border-gray-300 text-sm shadow-sm placeholder:text-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        value={data.status}
                        onChange={handleChange}
                        required
                        disabled={data.status === "done" ? true : false}
                    >
                        <option
                            value=""
                            style={{
                                display: "none",
                            }}
                        >
                            Pilih Status
                        </option>
                        <option value="waiting">Menunggu Konfirmasi</option>
                        <option value="rejected">Pengambilan Ditolak</option>
                        <option value="pickup">Sampah Diambil</option>
                        <option value="done">Pengambilan Selesai</option>
                    </select>
                </div>
                <div className="mt-3 w-full space-x-2 text-end">
                    <Button processing={processing}>Balas</Button>
                </div>
            </form>
        );
    }
}

Show.layout = (page) => <Admin children={page} title="Detail Trash Pickups" />;
