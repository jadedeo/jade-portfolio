// components
import Header from "../components/Header";
import Hero from "../components/Hero";
import Columns from "../components/Columns";
const DivisionPlatform = () => {
  return (
    <>
      <Header />
      <main className="min-h-[100dvh] flex flex-col gap-10">
        <Hero
          pageTitle="Division Platform"
          pageSubtitle="Penguin Random House"
        />

        <section className="px-[5%] flex gap-20">
          <div>
            <h3 className="font-display">Role</h3>
            <p>Contract Web Developer</p>
            <p>Marketing, Technology & Strategy Team</p>
            <p>Divisional Web Team</p>
          </div>

          <div>
            <h3 className="font-display">Skills</h3>
            <p>Blah blah blah</p>
          </div>
        </section>

        <section className="px-[5%]">
          <div className="mx-auto flex flex-col gap-5 max-w-screen-lg">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              eu pharetra ex. Sed tempus varius sem, sit amet aliquam justo
              elementum euismod. Morbi et lacus neque. Duis rutrum ultricies est
              eget sagittis. Donec neque lectus, tincidunt at venenatis quis,
              convallis id diam. Aenean ut est quis ligula commodo aliquam.{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              eu pharetra ex. Sed tempus varius sem, sit amet aliquam justo
              elementum euismod. Morbi et lacus neque. Duis rutrum ultricies est
              eget sagittis. Donec neque lectus, tincidunt at venenatis quis,
              convallis id diam. Aenean ut est quis ligula commodo aliquam.{" "}
            </p>
            {/* <Columns items={3} /> */}
          </div>
        </section>
      </main>
    </>
  );
};

export default DivisionPlatform;
