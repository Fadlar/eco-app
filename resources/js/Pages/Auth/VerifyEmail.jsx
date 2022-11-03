import React from "react";
import Guest from "@/Layouts/Guest";
import { Link, useForm } from "@inertiajs/inertia-react";

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm();

    const submit = (e) => {
        e.preventDefault();

        post(route("verification.send"));
    };

    return (
        <>
            <div className="p-6">
                <div className="relative w-full sm:mx-auto sm:max-w-lg md:max-w-xl">
                    <div className="relative">
                        <div className="mb-4 text-sm text-gray-600">
                            Thanks for signing up! Before getting started, could
                            you verify your email address by clicking on the
                            link we just emailed to you? If you didn't receive
                            the email, we will gladly send you another.
                        </div>

                        {status === "verification-link-sent" && (
                            <div className="mb-4 text-sm font-medium text-green-600">
                                A new verification link has been sent to the
                                email address you provided during registration.
                            </div>
                        )}

                        <form onSubmit={submit}>
                            <div className="mt-4 flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="mt-5 flex h-[2.6rem] w-full items-center justify-center rounded-lg bg-green-700 px-6 font-semibold text-white transition duration-200 focus:border-green-700 focus:outline-none focus:ring focus:ring-green-700/20 hover:bg-green-700/70 sm:w-auto"
                                    disabled={processing}
                                >
                                    Resend Verification Email
                                </button>

                                <Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                    className="text-sm text-gray-600 underline hover:text-gray-900"
                                >
                                    Log Out
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

VerifyEmail.layout = (page) => (
    <Guest children={page} title="Email Verification" />
);
