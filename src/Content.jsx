import location from "./assets/images/icon-location.svg";
import company from "./assets/images/icon-company.svg";
import twitter from "./assets/images/icon-twitter.svg";
import website from "./assets/images/icon-website.svg";

export function Content(props) {
  return (
    <>
      <div className="rounded-xl py-5 md:py-8 px-3 grid grid-cols-[70px,1fr] md:grid-cols-[120px,1fr]  lg:grid-cols-[120px,1fr,1fr] items-start gap-x-8 bg-white">
        <img src={props.avatar} className="rounded-[50%] w-full" />
        <div>
          <h2 className="text-[#222731] text-[1.2em] leading-[1.8em] md:text-[1.7em] md:leading-[1em] font-bold">
            {props.name}
          </h2>
          <a
            href={props.href}
            className=" text-[#0079ff] text-[13px] leading-[25px] "
          >
            @{props.login}
          </a>
        </div>
        <div className="col-start-2 -mt-5 lg:col-start-3 lg:mt-0 lg:ml-10">
          <p className="text-[#697c9a] text-[13px] leading-[25px]">
            Joined {props.created}
          </p>
        </div>

        <div className="col-span-full mt-5 lg:col-start-2 lg:-mt-10">
          <p className="text-[13px] leading-[25px] md:text-[15px]">
            {props.bio}
          </p>
        </div>

        <div className="grid col-span-full lg:col-start-2 mt-10 bg-[#f6f8ff] py-6 mr-8 rounded-2xl">
          <div className="flex justify-around gap-x-5">
            <div className="flex flex-col gap-y-3">
              <h5 className="text-[0.9em] leading-[1.2em] text-[#4b6a9b]">
                repos
              </h5>
              <p className="text-[1.2em] leading-[1.9em] font-extrabold">
                {props.repos}
              </p>
            </div>
            <div className="flex flex-col gap-y-3">
              <h5 className="text-[0.9em] leading-[1.2em] text-[#4b6a9b]">
                followers
              </h5>
              <p className="text-[1.2em] leading-[1.9em] font-extrabold">
                {props.followers}
              </p>
            </div>
            <div className="flex flex-col gap-y-3">
              <h5 className="text-[0.9em] leading-[1.2em] text-[#4b6a9b]">
                following
              </h5>
              <p className="text-[1.2em] leading-[1.9em] font-extrabold">
                {props.following}
              </p>
            </div>
          </div>
        </div>

        <div className="grid col-span-full lg:col-start-2 mt-5">
          <div className="grid  md:grid-cols-[repeat(2,1fr)] gap-x-8 gap-y-4">
            <div className="flex gap-x-4">
              <img src={location} />
              <p className="text-[13px] leading-[25px] md:text-[15px] ml-[20px]">
                {props.location}
              </p>
            </div>
            <div className="flex gap-x-4">
              <img src={twitter} />
              <p className="text-[13px] leading-[25px] md:text-[15px] ml-[20px]">
                {props.twitter}
              </p>
            </div>
            <div className="flex gap-x-4">
              <img src={website} />
              <p className="text-[13px] leading-[25px] md:text-[15px] ml-[20px]">
                {props.blog}
              </p>
            </div>
            <div className="flex gap-x-4">
              <img src={company} />
              <p className="text-[13px] leading-[25px] md:text-[15px] ml-[20px]">
                {props.company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
