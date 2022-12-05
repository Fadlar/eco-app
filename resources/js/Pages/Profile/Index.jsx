import App from "@/Layouts/App";
import { Tab } from "@headlessui/react";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Index({ auth }) {
    const addUrl = route("pickups.create");
    return (
        <>
            <div className="mt-2">
                <div className="mb-10 flex gap-x-4">
                    <div className="w-[30%]">
                        <img
                            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                            alt="avatar"
                            className="rounded-full"
                        />
                    </div>
                    <div className="pt-1">
                        <h2 className="text-2xl font-semibold tracking-tighter text-gray-700">
                            {auth.user.name} Abdul Rojak
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
                                className="w-full rounded-xl border border-green-700/50 bg-white py-2 text-center text-xs font-semibold tracking-tight text-gray-700"
                            >
                                Logout
                            </Link>
                            <Link className="w-full rounded-xl border border-green-700/50 bg-green-700 py-2 text-center text-xs font-semibold tracking-tight text-white">
                                Edit Profil
                            </Link>
                        </div>
                    </div>
                </div>
                <Tab.Group>
                    <Tab.List className="flex gap-x-3 overflow-x-auto">
                        <Tab className="whitespace-nowrap rounded-full border border-green-700/50 py-1.5 px-5 text-center text-sm focus:outline-none ui-selected:bg-green-700 ui-selected:font-semibold ui-selected:text-green-50 ui-not-selected:bg-green-700/30 ui-not-selected:font-medium ui-not-selected:text-green-900">
                            History
                        </Tab>
                        <Tab className="whitespace-nowrap rounded-full border border-green-700/50 py-1.5 px-5 text-center text-sm focus:outline-none ui-selected:bg-green-700 ui-selected:font-semibold ui-selected:text-green-50 ui-not-selected:bg-green-700/30 ui-not-selected:font-medium ui-not-selected:text-green-900">
                            Menunggu Penjemputan
                        </Tab>
                        <Tab className="whitespace-nowrap rounded-full border border-green-700/50 py-1.5 px-5 text-center text-sm focus:outline-none ui-selected:bg-green-700 ui-selected:font-semibold ui-selected:text-green-50 ui-not-selected:bg-green-700/30 ui-not-selected:font-medium ui-not-selected:text-green-900">
                            Penjemputan Ditolak
                        </Tab>
                    </Tab.List>
                    <Tab.Panels className="mt-5">
                        <Tab.Panel className="w-full rounded-xl border border-green-700/80 bg-green-700/30 p-5"></Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </>
    );
}

Index.layout = (page) => <App children={page} title={`Pickup Trash`} />;
