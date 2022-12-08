import Admin from "@/Layouts/Admin";
import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import toast from "react-hot-toast";
import Header from "@/Components/Header";
import FormTrashType from "@/Components/FormTrashType";

export default function Create() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
    });

    const handleChange = (e) => setData(e.target.name, e.target.value);
    const submitHandler = (e) => {
        e.preventDefault();
        post(route("trash-type.store"), {
            preserveScroll: true,
            onSuccess: () => [
                reset(),
                toast.success("Data added successfully."),
            ],
        });
    };

    return (
        <>
            <div className="container">
                <Header
                    className={"mb-6 text-gray-800"}
                    desc={"Masukan data dengan baik dan benar."}
                >
                    Tambah Jenis Sampah
                </Header>
                <div className="flex rounded-md bg-white px-7 py-5 shadow">
                    <div className="w-full lg:w-1/2">
                        <FormTrashType
                            {...{
                                data,
                                errors,
                                processing,
                                submitHandler,
                                handleChange,
                            }}
                        />
                    </div>
                    <div className="hidden w-1/2 px-5 text-gray-800 lg:block">
                        <span className="mt-5 block text-center text-lg font-semibold">
                            {data.name}
                        </span>
                        <span
                            className="mx-auto mt-3 block w-32 text-center"
                            dangerouslySetInnerHTML={{ __html: data.icon }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

Create.layout = (page) => <Admin children={page} title={"Add Trash Type"} />;
