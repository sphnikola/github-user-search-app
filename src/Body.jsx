import location from "./assets/images/icon-location.svg";
import company from "./assets/images/icon-company.svg";
import twitter from "./assets/images/icon-twitter.svg";
import website from "./assets/images/icon-website.svg";

export function Body() {
  return (
    <>
      <main>
        <section>
          <div className="grid grid-cols-[70px,1fr] md:grid-cols-[120px,1fr]  lg:grid-cols-[120px,1fr,1fr] items-start gap-x-8">
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

            <div className="col-span-full mt-5 lg:col-start-2 lg:-mt-10">
              <p>thi is a bio</p>
            </div>

            <div className="grid col-span-full lg:col-start-2 mt-10 md:">
              <div className="flex justify-around gap-x-5">
                <div className="flex flex-col gap-y-3">
                  <h5>repos</h5>
                  <p>88</p>
                </div>
                <div className="flex flex-col gap-y-3">
                  <h5>followers</h5>
                  <p>123</p>
                </div>
                <div className="flex flex-col gap-y-3">
                  <h5>following</h5>
                  <p>12345</p>
                </div>
              </div>
            </div>

            <div className="grid col-span-full lg:col-start-2 mt-5">
              <div className="grid  md:grid-cols-[repeat(2,1fr)] gap-x-8 gap-y-4">
                <div className="flex gap-x-4">
                  <img src={location} />
                  <p>sanfrancisco</p>
                </div>
                <div className="flex gap-x-4">
                  <img src={twitter} />
                  <p>Not available</p>
                </div>
                <div className="flex gap-x-4">
                  <img src={website} />
                  <p>github.com./user</p>
                </div>
                <div className="flex gap-x-4">
                  <img src={company} />
                  <p>Not available</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
