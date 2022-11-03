import React, { useEffect, useState } from "react";
import GuestLayout from "@/Layouts/Guest";
import InputError from "@/Components/InputError";
import { Link, useForm } from "@inertiajs/inertia-react";

export default function Login({ status, canResetPassword }) {
    const [pass, setPass] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <>
            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}
            <div className="p-6">
                <div className="relative w-full sm:mx-auto sm:max-w-lg md:max-w-xl">
                    <div className="relative">
                        <div className="mb-3 lg:mb-6">
                            <h1 className="text-lg font-semibold tracking-tight text-gray-800 lg:text-xl">
                                Login to your Account
                            </h1>
                            <p className="text-muted mt-0.5 text-gray-500">
                                Don't have an account ?{" "}
                                <Link
                                    className="font-medium text-green-700"
                                    href="/register"
                                >
                                    Register
                                </Link>
                                .
                            </p>
                        </div>
                        <form onSubmit={submit}>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-1 block text-sm capitalize text-gray-800"
                                >
                                    Email
                                </label>
                                <div className="group flex h-10 items-center overflow-hidden rounded-lg border border-slate-300 bg-gray-100 bg-slate-100/50 px-4 shadow-sm transition duration-200 ease-in focus-within:border-green-700 focus-within:outline-none focus-within:ring focus-within:ring-green-700/20 sm:h-11">
                                    <span className="text-slate-500 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:stroke-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-at"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <circle cx={12} cy={12} r={4} />
                                            <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
                                        </svg>
                                    </span>
                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={onHandleChange}
                                        className="text-tiny form-text w-full border-0 bg-transparent focus:outline-none focus:ring-0"
                                        name="email"
                                        autoComplete="username"
                                        placeholder="jane@domain.com"
                                        required
                                        defaultValue
                                    />
                                </div>
                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-5">
                                <label
                                    htmlFor="password"
                                    className="mb-1 block text-sm capitalize text-gray-800"
                                >
                                    Password
                                </label>
                                <div className="group flex h-10 items-center overflow-hidden rounded-lg border border-slate-300 bg-gray-100 bg-slate-100/50 px-4 shadow-sm transition duration-200 ease-in focus-within:border-green-700 focus-within:outline-none focus-within:ring focus-within:ring-green-700/20 sm:h-11">
                                    <span className="text-slate-500 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:stroke-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-password"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M12 10v4" />
                                            <path d="M10 13l4 -2" />
                                            <path d="M10 11l4 2" />
                                            <path d="M5 10v4" />
                                            <path d="M3 13l4 -2" />
                                            <path d="M3 11l4 2" />
                                            <path d="M19 10v4" />
                                            <path d="M17 13l4 -2" />
                                            <path d="M17 11l4 2" />
                                        </svg>
                                    </span>
                                    <input
                                        type={`${pass ? "text" : "password"}`}
                                        value={data.password}
                                        onChange={onHandleChange}
                                        className="text-tiny form-text w-full border-0 bg-transparent focus:outline-none focus:ring-0"
                                        name="password"
                                        autoComplete="new-password"
                                        required
                                        defaultValue
                                    />
                                    {pass ? (
                                        <div
                                            className="cursor-pointer text-slate-400 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:stroke-1"
                                            onClick={(e) => setPass(!pass)}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon icon-tabler icon-tabler-eye"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path
                                                    stroke="none"
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                />
                                                <circle cx={12} cy={12} r={2} />
                                                <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                                            </svg>
                                        </div>
                                    ) : (
                                        <div
                                            className="cursor-pointer text-slate-400 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:stroke-1"
                                            onClick={(e) => setPass(!pass)}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon icon-tabler icon-tabler-eye-off"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
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
                                                    x1={3}
                                                    y1={3}
                                                    x2={21}
                                                    y2={21}
                                                />
                                                <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83" />
                                                <path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>
                            <div className="my-5 block">
                                <label className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            value={data.remember}
                                            onChange={onHandleChange}
                                            className="h-[18px] w-[18px] rounded border-slate-200 text-green-700 shadow-sm ring-offset-0 focus:shadow-none focus:outline-none focus:ring-0 focus:ring-offset-0"
                                            name="remember"
                                            defaultValue
                                        />
                                        <span className="ml-2 select-none text-sm tracking-tight text-gray-700">
                                            Remember me
                                        </span>
                                    </div>
                                    {canResetPassword && (
                                        <Link
                                            className="font-medium text-green-700"
                                            href={route("password.request")}
                                        >
                                            Forgot password
                                        </Link>
                                    )}
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="flex h-[2.6rem] w-full items-center justify-center rounded-lg bg-green-700 px-6 font-semibold text-white transition duration-200 focus:border-green-700 focus:outline-none focus:ring focus:ring-green-700/20 hover:bg-green-700/70 sm:w-auto"
                                disabled={processing}
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

Login.layout = (page) => <GuestLayout children={page} title={`Log in`} />;
