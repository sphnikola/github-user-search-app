import { useEffect, useState } from "react";
import { Content } from "./Content";
import { Search } from "./Search";

export function Body() {
  const [userObject, setuserObject] = useState([]);
  const [inputValue, setInputValue] = useState("");
  //const [inputState, setState] = useState(false)
  const [stateValue, setStateValue] = useState("david");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  setState(true)
    setStateValue(inputValue);
  };

  const fetch_url = "https://api.github.com/users/" + stateValue;

  const fetchApiData = () => {
    fetch(fetch_url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setuserObject(data);
      });
  };

  useEffect(fetchApiData);
  return (
    <>
      <Search
        value={inputValue}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <main>
        <section>
          <Content
            avatar={userObject.avatar_url}
            name={userObject.login}
            email={userObject.email}
            created={userObject.created_at}
            bio={userObject.bio}
            repos={userObject.public_repos}
            followers={userObject.followers}
            following={userObject.following}
            location={userObject.location}
            twitter={userObject.twitter_username}
            blog={userObject.blog}
            company={userObject.company}
          />
        </section>
      </main>
    </>
  );
}
