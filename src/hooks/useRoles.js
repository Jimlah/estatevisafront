import { useEffect, useState } from "react";
import { getUser } from "./../utils/common";

const useRoles = (rights) => {
  const [roles, setRoles] = useState([]);
  const [result, setResult] = useState(false);

  useEffect(() => {
    const isAllowed = (element) => {
      return roles[element] === true;
    };
    setRoles(getUser()?.user.roles);
    const resp = rights?.some(isAllowed);
    setResult(resp);
  }, [result, rights]);

  return result;
};

export default useRoles;
