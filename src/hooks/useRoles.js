import { useEffect, useState } from "react";
import { getUser } from "./../utils/common";

const useRoles = (rights) => {
  const [roles, setRoles] = useState(getUser()?.user.roles);
  const [result, setResult] = useState(false);

  useEffect(() => {
    const isAllowed = (element) => {
      return roles[element] === true;
    };

    if (roles) {
      const resp = rights?.some(isAllowed);
      setResult(resp);
    }

    return () => {
      setResult(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result, rights]);

  return result;
};

export default useRoles;
