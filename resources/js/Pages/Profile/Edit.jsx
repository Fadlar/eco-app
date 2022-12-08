import Button from "@/Components/Button";
import App from "@/Layouts/App";
import { useForm } from "@inertiajs/inertia-react";

export default function Edit({ auth }) {
    const { data, setData, post, processing, progress } = useForm({
        name: auth.user.name,
        phone_number:
            auth.user.user_detail === null
                ? ""
                : auth.user.user_detail.phone_number,
        card_number:
            auth.user.user_detail === null
                ? ""
                : auth.user.user_detail.card_number,
        avatar: null,
    });
    const handleChange = (e) => setData(e.target.name, e.target.value);
    const handleFile = (e) => setData(e.target.name, e.target.files[0]);
    const submitHandler = (e) => {
        e.preventDefault();
        post(`/edit/profile/${auth.user.id}`, {
            preserveScroll: true,
        });
    };
    return (
        <>
            <div className="mt-5">
                <form onSubmit={submitHandler} encType="multipart/form-data">
                    <div className="overflow-hidden rounded-md">
                        <div className="space-y-6 bg-white px-4 py-4 sm:p-6">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-3">
                                    <img
                                        src={
                                            auth.user.user_detail === null
                                                ? "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                                                : "/storage/" +
                                                  auth.user.user_detail.avatar
                                        }
                                        className="mb-5 h-24 w-24 rounded-full"
                                        alt="avatar"
                                    />
                                    <label
                                        htmlFor="avatar"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Foto Profil
                                    </label>
                                    <div className="rounded-md">
                                        <input
                                            type="file"
                                            name="avatar"
                                            id="avatar"
                                            onChange={handleFile}
                                            className="mt-2 file:rounded-full file:border-0 file:bg-green-700 file:px-3 file:py-1 file:text-white focus:outline-none"
                                        />
                                        {progress && (
                                            <div className="mt-3 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                                                <div
                                                    className="rounded-full bg-blue-600 p-0.5 text-center text-xs font-medium leading-none text-blue-100"
                                                    width={progress.percentage}
                                                >
                                                    {progress.percentage}%
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="col-span-3">
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Nama
                                    </label>
                                    <div className="rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            maxLength={50}
                                            className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            placeholder="John Doe"
                                            value={data.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-span-3">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Email
                                    </label>
                                    <div className="rounded-md shadow-sm">
                                        <input
                                            disabled
                                            type="email"
                                            name="name"
                                            id="name"
                                            className="block w-full flex-1 rounded-md border-gray-300 text-gray-600 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            value={auth.user.email}
                                        />
                                    </div>
                                </div>
                                <div className="col-span-3">
                                    <label
                                        htmlFor="phone_number"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Nomor Telepon
                                    </label>
                                    <div className="rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="phone_number"
                                            id="phone_number"
                                            maxLength={20}
                                            className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            placeholder="+62 xxx xxxx xxx"
                                            value={data.phone_number}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-span-3">
                                    <label
                                        htmlFor="card_number"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Nomor Rekening
                                    </label>
                                    <div className="rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="card_number"
                                            id="card_number"
                                            maxLength={30}
                                            className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            placeholder="xxx xxxx xxxx xxx"
                                            value={data.card_number}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white px-4 py-3 text-right sm:px-6">
                            <Button processing={processing} type="submit">
                                Simpan
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

Edit.layout = (page) => (
    <App.Two children={page} title="Edit Profil" back={"/profile"} />
);
