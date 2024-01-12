import { useEffect, useState } from "react";
import { Content } from "./Content";
import { Search } from "./Search";

export function Body() {
  const [userObject, setuserObject] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const [stateValue, setStateValue] = useState("david");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStateValue(inputValue);
  };

  const fetch_url = "https://api.github.com/users/" + stateValue;

  const fetchApiData = () => {
    fetch(fetch_url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setuserObject(data);
      });
  };
  useEffect(fetchApiData);
  let date = new Date(userObject.created_at);
  let dateMDY = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
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
            name={userObject.name}
            login={userObject.login}
            href={userObject.html_url}
            created={dateMDY}
            bio={
              userObject.bio === null ? "This user has no bio" : userObject.bio
            }
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
