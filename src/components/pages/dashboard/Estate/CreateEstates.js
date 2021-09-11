import Input from "./../../../form/Input";
import useInput from "./../../../../hooks/useInput";
import SubmitButton from "./../../../form/SubmitButton";
import { Estate } from "../../../../services/estate.services";
import { useContext, useEffect } from "react";
import { AlertContext } from "./../../../../context/AlertContext";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./../../../../hooks/useFetch";
import { PageLoaderContext } from "../../../../context/PageLoaderContext";
const CreateEstates = () => {
  const [email, bindEmail, setEmail] = useInput("");
  const [estate_name, bindEstate, setEstate] = useInput("");
  const [estate_code, bindCode, setCode] = useInput("");
  const [firstname, bindFirstname, setFirstname] = useInput("");
  const [lastname, bindLastname, setLastname] = useInput("");
  const [phone_number, bindPhone, setPhone] = useInput("");
  const { errors, setErrors, setMessage, setStatus } = useContext(AlertContext);
  const { submitLoader, setSubmitLoader } = useContext(PageLoaderContext);
  const history = useHistory();

  let { id } = useParams();

  const handleSubmit = async (e) => {
    setSubmitLoader(true);
    e.preventDefault();
    const formData = {
      email,
      estate_name,
      estate_code,
      firstname,
      lastname,
      phone_number,
    };

    let res;
    if (!id) {
      res = await Estate.create(formData);
    }

    if (id) {
      res = await Estate.update(id, formData);
    }
    console.log(res);

    setErrors(res?.errors ?? null);
    setMessage(res?.message ?? null);
    setStatus(res?.status ?? null);

    setSubmitLoader(false);
  };

  const { data, error } = useFetch(Estate.getById, id);

  useEffect(() => {
    setMessage(error);
    setEmail(data?.user.email ?? "");
    setEstate(data?.name ?? "");
    setCode(data?.code ?? "");
    setFirstname(data?.user?.profile?.firstname ?? "");
    setLastname(data?.user?.profile?.lastname ?? "");
    setPhone(data?.user?.profile?.phone_number ?? "");

    // eslint-disable-next-line
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-start w-full h-full">
      <div className="flex flex-col w-full max-w-lg p-5 space-y-3 bg-white bg-opacity-75 rounded-md shadow dark:bg-opacity-10">
        <span className="text-sm font-bold text-gray-500">Estate</span>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
          <Input
            type="email"
            name="email"
            label="Email"
            bind={bindEmail}
            error={errors?.email}
          />
          <Input
            type="text"
            name="estate_name"
            label="Estate Name"
            bind={bindEstate}
            error={errors?.estate_name}
          />
          <Input
            type="text"
            placeholder="Estate Code"
            name="estate_code"
            label="Estate Code"
            bind={bindCode}
            error={errors?.estate_code}
          />
          <Input
            type="text"
            name="firstname"
            label="Firstname"
            bind={bindFirstname}
            error={errors?.firstname}
          />
          <Input
            type="text"
            name="lastname"
            label="Lastname"
            bind={bindLastname}
            error={errors?.lastname}
          />
          <Input
            type="text"
            name="phone_number"
            label="Phone Number"
            bind={bindPhone}
            error={errors?.phone_number}
          />
          <SubmitButton isLoading={submitLoader} />
        </form>
      </div>
    </div>
  );
};

export default CreateEstates;
