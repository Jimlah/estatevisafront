import { useState, useEffect } from "react";
import Col from "../Tables/Col";
import Pagination from "../Tables/Pagination";

const CardTable = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const renderRow = (user) => {
    return (
      <tr key={user.id} className="">
        <Col value={user.id} />
        <Col value={user.profile.firstname} />
        <Col value={user.profile.lastname} />
        <Col value={user.email} />
        <Col value={user.profile.phone_number} />
        <Col value={user.profile.gender} />
        <Col value={user.profile.created_at} />
      </tr>
    );
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filteredUser = users.filter((user) => {
      console.log(user.profile.firstname == search);
      if (search != "") {
        return user.profile.firstname == search;
      }
    });

    setUsers(filteredUser);
  };

  return (
    <div className="bg-white py-4  flex flex-col space-y-4 rounded-lg">
      <div className="flex items-center justify-start font-semibold px-6">
        <span> Card Tables</span>
      </div>
      <div className="px-6 flex items-center justify-end w-full">
        <div className="border-gray-500 border flex items-center justify-end md:w-80 px-2 rounded-md overflow-hidden w-full">
          <input
            type="search"
            className="flex-1 focus:outline-none py-2"
            onChange={handleSearch}
            value={search}
          />
          <button className="text-gray-400 h-full" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full table-auto text-sm border-collapse border-none">
          <thead className="bg-gray-200 font-semibold text-sm text-left text-gray-500 text-opacity-90">
            <tr className="text-xs font-bold text-gray-900">
              <Col value="ID" />
              <Col value="First Name" />
              <Col value="Last Name" />
              <Col value="Email" />
              <Col value="Phone Number" />
              <Col value="Gender" />
              <Col value="Created At" />
            </tr>
          </thead>
          <tbody className="text-gray-700 text-xs md:text-sm">
            {users && users.map(renderRow)}
            {users && users.map(renderRow)}
            {users && users.map(renderRow)}
            {users && users.map(renderRow)}
            {users && users.map(renderRow)}
            {users && users.map(renderRow)}
            {users && users.map(renderRow)}
            {users && users.map(renderRow)}
            {users && users.map(renderRow)}
            {users && users.map(renderRow)}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
};

export default CardTable;
