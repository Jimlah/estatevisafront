import { useParams } from "react-router";
import useFetch from "./../../../../hooks/useFetch";
import { Estate } from "./../../../../services/estate.services";
const ShowEstate = () => {
  const { id } = useParams();
  const { data } = useFetch(Estate.getById, id);

  return (
    <div>
      {data && (
        <div className="grid w-full grid-cols-1 p-5 bg-white bg-opacity-75 rounded-md shadow dark:bg-opacity-10 md:grid-cols-4">
          <div className="flex flex-col items-start justify-start w-full space-y-4">
            <div
              className="w-full h-48 bg-center bg-cover"
              style={{
                backgroundImage: `url(${
                  data.logo ??
                  "https://img.freepik.com/free-psd/logo-mockup-grey-wall_35913-2122.jpg?size=626&ext=jpg"
                })`,
              }}
            ></div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50">
              {data.name}
            </h2>
          </div>
          <div className="w-full font-semibold text-gray-900 md:col-span-3 dark:text-gray-50">
            <div>
              <span className="text-sm">Firstname: </span>
              <span>{data.user.profile.firstname}</span>
            </div>
            <div>
              <span className="text-sm">Lastname: </span>
              <span>{data.user.profile.lastname}</span>
            </div>
            <div>
              <span className="text-sm">Phone Number: </span>
              <span>{data.user.profile.phone_number}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowEstate;
