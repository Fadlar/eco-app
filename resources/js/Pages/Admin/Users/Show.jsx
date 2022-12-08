import Button from "@/Components/Button";
import Header from "@/Components/Header";
import Admin from "@/Layouts/Admin";
import { Link, useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Show({ user }) {
    const [show, setShow] = useState(false);
    const { data, setData, put } = useForm({
        status: user.status,
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        put("/penjual/" + user.id, {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Status diupdate");
                setShow(!show);
            },
        });
    };
    return (
        <>
            <div className="container text-gray-900">
                <div className="mb-6 flex items-center justify-between">
                    <Header desc={"Detail penjual."}>Detail Penjual</Header>
                </div>
                <div className="overflow-hidden bg-white sm:rounded-lg">
                    <div>
                        <dl>
                            {user.userDetail?.avatar && (
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt>
                                        <img
                                            src={
                                                "/storage/" +
                                                user.userDetail?.avatar
                                            }
                                            alt=""
                                        />
                                    </dt>
                                </div>
                            )}
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Nama
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {user.name}
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Email
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {user.email}
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Nomor Telepon
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {user.user_detail === null
                                        ? "-"
                                        : user.user_detail.phone_number}
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Status
                                </dt>
                                <dd className="mt-1 flex items-center justify-between text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {show ? (
                                        <form
                                            onSubmit={handleSubmit}
                                            className="flex w-full items-center justify-between"
                                        >
                                            <select
                                                name="status"
                                                id="status"
                                                value={data.status}
                                                onChange={(e) =>
                                                    setData(
                                                        "status",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-1/2 rounded-md border-gray-300 text-sm shadow-sm placeholder:text-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                            >
                                                <option value="active">
                                                    Active
                                                </option>
                                                <option value="nonactive">
                                                    Nonactive
                                                </option>
                                            </select>
                                            <div className="space-x-1">
                                                <button
                                                    className="rounded-md bg-rose-600 px-2 py-1.5"
                                                    onClick={(e) =>
                                                        setShow(!show)
                                                    }
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="icon icon-tabler icon-tabler-x"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="#fff"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path
                                                            stroke="none"
                                                            d="M0 0h24v24H0z"
                                                            fill="none"
                                                        />
                                                        <line
                                                            x1={18}
                                                            y1={6}
                                                            x2={6}
                                                            y2={18}
                                                        />
                                                        <line
                                                            x1={6}
                                                            y1={6}
                                                            x2={18}
                                                            y2={18}
                                                        />
                                                    </svg>
                                                </button>
                                                <Button className="!px-2 py-1">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="icon icon-tabler icon-tabler-device-floppy"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="#fff"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path
                                                            stroke="none"
                                                            d="M0 0h24v24H0z"
                                                            fill="none"
                                                        />
                                                        <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
                                                        <circle
                                                            cx={12}
                                                            cy={14}
                                                            r={2}
                                                        />
                                                        <polyline points="14 4 14 8 8 8 8 4" />
                                                    </svg>
                                                </Button>
                                            </div>
                                        </form>
                                    ) : (
                                        <>
                                            <span className="inline rounded-full border-blue-600 bg-blue-600/20 py-0.5 px-1.5 text-xs font-medium capitalize tracking-tight text-slate-600">
                                                {user.status}
                                            </span>
                                            <button
                                                onClick={(e) => setShow(!show)}
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
}

Show.layout = (page) => <Admin children={page} title="Detail Penarikan Poin" />;
