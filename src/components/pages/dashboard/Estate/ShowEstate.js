import { useParams } from "react-router";
import useFetch from "./../../../../hooks/useFetch";
import { Estate } from "./../../../../services/estate.services";
import { useEffect, useState } from "react";
const ShowEstate = () => {
  const { id } = useParams();
  const { data } = useFetch(Estate.getById, id);

  return (
    <div>
      {data && (
        <div className="bg-white bg-opacity-75 p-5 dark:bg-opacity-10 rounded-md shadow w-full grid grid-cols-1 md:grid-cols-4">
          <div className="w-full flex flex-col items-start justify-start space-y-4">
            <div
              className="bg-center bg-cover h-48 w-full"
              style={{
                backgroundImage: `url(${
                  data.logo ??
                  "https://img.freepik.com/free-psd/logo-mockup-grey-wall_35913-2122.jpg?size=626&ext=jpg"
                })`,
              }}
            ></div>
            <h2 className="dark:text-gray-50 text-gray-900 text-3xl font-bold">
              {data.name}
            </h2>
          </div>
          <div className="w-full md:col-span-3 dark:text-gray-50 text-gray-900 font-semibold">
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
