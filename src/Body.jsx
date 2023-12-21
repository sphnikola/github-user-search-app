import location from "./assets/images/icon-location.svg";
import company from "./assets/images/icon-company.svg";
import twitter from "./assets/images/icon-twitter.svg";
import website from "./assets/images/icon-website.svg";

export function Body() {
  return (
    <>
      <main>
        <section>
          <div className="grid grid-cols-[70px,1fr] md:grid-cols-[120px,1fr]  lg:grid-cols-[120px,1fr,1fr] items-start gap-x-8 px-6">
            <img
              src="https://avatars.githubusercontent.com/u/583231?v=4"
              className="rounded-[50%] w-full"
            />
            <div className="">
              <h4 className="">Heading</h4>
              <a>link</a>
            </div>
            <div className="col-start-2 -mt-5 lg:col-start-3 lg:mt-0 lg:ml-10">
              <p>date joined</p>
            </div>

            <div className="col-span-full mt-5 lg:col-start-2 lg:-mt-5">
              <p>thi is a bio</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
