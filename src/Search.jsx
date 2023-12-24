import searchIcon from "./assets/images/icon-search.svg";

export function Search(props) {
  return (
    <>
      <div className=" py-[0.6] pr-[0.6rem] mb-8 mt-5">
        <form
          onSubmit={props.onSubmit}
          className="grid grid-cols-[auto,1fr,auto] items-center"
        >
          <img src={searchIcon} className="ml-3" />

          <input
            className="  ml-4 pr-5 focus:outline-none "
            placeholder="Search Github Username..."
            type="text"
            value={props.value}
            onChange={props.onChange}
          />

          <button className="-mr-5 py-[0.9em] px-[1.3em] bg-blue-500">
            Search
          </button>
        </form>
      </div>
    </>
  );
}
