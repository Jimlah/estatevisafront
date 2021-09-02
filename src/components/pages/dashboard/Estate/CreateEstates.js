import Input from "./../../../form/Input";
import useInput from "./../../../../hooks/useInput";
import SubmitButton from "./../../../form/SubmitButton";
import { Estate } from "../../../../services/estate.services";
import { useContext } from "react";
import { AlertContext } from "./../../../../context/AlertContext";
import { useHistory } from "react-router-dom";
const CreateEstates = () => {
  const [email, bindEmail] = useInput("");
  const [estate_name, bindEstate] = useInput("");
  const [estate_code, bindCode] = useInput("");
  const [firstname, bindFirstname] = useInput("");
  const [lastname, bindLastname] = useInput("");
  const [phone_number, bindPhone] = useInput("");
  const { errors, setErrors, setMessage, setStatus } = useContext(AlertContext);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email,
      estate_name,
      estate_code,
      firstname,
      lastname,
      phone_number,
    };
    const res = await Estate.create(formData);
    setErrors(null);
    setMessage(null);
    setStatus(null);

    setErrors(res?.errors ?? null);
    setMessage(res?.message ?? null);
    setStatus(res?.status ?? null);

    if (res?.status === "success") {
      history.push("/dashboard/estates");
    }
  };

  return (
    <div className="flex flex-col items-center justify-start w-full h-full mb-10">
      <div className="bg-white bg-opacity-75 p-5 dark:bg-opacity-10 rounded-md shadow w-full flex flex-col space-y-3 w-full max-w-lg overflow-y-auto h-full">
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
          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default CreateEstates;
