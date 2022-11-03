import React from "react";
import Guest from "@/Layouts/Guest";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/inertia-react";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <>
            <div className="p-6">
                {status && (
                    <div className="mb-4 text-sm font-medium text-green-600">
                        {status}
                    </div>
                )}
                <div className="relative w-full sm:mx-auto sm:max-w-lg md:max-w-xl">
                    <div className="relative">
                        <div className="mb-3">
                            <h1 className="text-lg font-semibold tracking-tight text-gray-800 lg:text-xl">
                                Forgot Password
                            </h1>
                        </div>
                        <div className="mb-4 text-sm leading-normal text-gray-500">
                            Forgot your password? No problem. Just let us know
                            your email address and we will email you a password
                            reset link that will allow you to choose a new one.
                        </div>

                        <form onSubmit={submit}>
                            <div className="mt-5">
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
                            <button
                                type="submit"
                                className="mt-5 flex h-[2.6rem] w-full items-center justify-center rounded-lg bg-green-700 px-6 font-semibold text-white transition duration-200 focus:border-green-700 focus:outline-none focus:ring focus:ring-green-700/20 hover:bg-green-700/70 sm:w-auto"
                                disabled={processing}
                            >
                                Email Password Reset Link
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

ForgotPassword.layout = (page) => (
    <Guest children={page} title={`Forgot Password`} />
);
