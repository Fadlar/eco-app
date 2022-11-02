import Admin from "@/Layouts/Admin";
import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import toast from "react-hot-toast";

export default function Create() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post("/trash-type", {
            preserveScroll: true,
            onSuccess: () => [
                reset(),
                toast.success("Data added successfully."),
            ],
        });
    };

    return (
        <>
            <div>
                <form onSubmit={submit} className="w-1/2">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        className="w-full"
                    />
                    <span className="block text-sm text-red-600">
                        {errors.name && errors.name}
                    </span>
                    <button
                        className="inline rounded-lg bg-slate-800 py-2 px-5 text-white"
                        disabled={processing}
                    >
                        {processing ? "Loading" : "Submit"}
                    </button>
                </form>
            </div>
        </>
    );
}

Create.layout = (page) => <Admin children={page} />;
