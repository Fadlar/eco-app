import Admin from "@/Layouts/Admin";
import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import toast from "react-hot-toast";
import Header from "@/Components/Header";
import FormTrashType from "@/Components/FormTrashType";

export default function Edit({ trashType }) {
    const { data, setData, put, processing, errors, reset } = useForm({
        name: trashType.name,
    });

    const handleChange = (e) => setData(e.target.name, e.target.value);
    const submitHandler = (e) => {
        e.preventDefault();
        put(route("trash-type.update", trashType.id), {
            preserveScroll: true,
            onSuccess: () => [
                reset(),
                toast.success("Data update successfully."),
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
                    Edit Jenis Sampah
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
                                submit: "Update",
                            }}
                        />
                    </div>
                    <div className="hidden w-1/2 px-5 text-gray-800 lg:block">
                        <span className="mt-5 block text-center text-lg font-semibold">
                            {data.name}
                        </span>
                        <span
                            className="mx-auto mt-3 flex w-32 justify-center"
                            dangerouslySetInnerHTML={{ __html: data.icon }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

Edit.layout = (page) => <Admin children={page} title={"Edit Jenis Sampah"} />;
