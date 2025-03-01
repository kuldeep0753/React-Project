import { useEffect, useState } from "react";
import { UserCard } from "../UserData/UserData";

const SearchBar = () => {
  const [user, setUser] = useState([]);
  const [userSearch, setUserSearch] = useState([]);
  const [username, setUsername] = useState("");
  //   console.log(user)

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    console.log(result);
    setUser(result);
    setUserSearch(result);
  }
  return (
    <>
      <div>
        {/* Search functionality */}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          onClick={() => {
            let searchValue = user.filter((value) =>
              value.name.toLowerCase().includes(username)
            ); //Use .includes() → When Searching for a Substring Anywhere
            //TODO: let searchValue = user.filter((value)=>value.name.toLowerCase().startsWith(username.toLowerCase())); //Use .startsWith() → When Searching for a Prefix

            setUserSearch(searchValue);
          }}
        >
          Search User
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "9px",
          flexDirection: "row",
        }}
      >
        {/* render Card details*/}
        {userSearch.map((data, index) => {
          // console.log(data);
          return <UserCard sendData={data} key={index}/>;
        })}
        {/* <UserCard sendData={user}/> */}
      </div>
    </>
  );
};

export default SearchBar;
