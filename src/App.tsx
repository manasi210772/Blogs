import Header from "./components/Header";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="text-text bg-background flex justify-center items-center">
      <main className="min-h-screen w-10/12 md:w-3/5 md:m-10 lg:m-0 xl:w-2/5 flex justify-center items-start flex-col gap-5 text-justify">
        <Header activeTab="home" />

        <div>
          I'm a programmer from Thane, Maharashtra. I like chess, computers and
          stories.
        </div>
        <div>
          This will be my place to share my weekly coding adventures and some
          cool things I encounter. Mostly documenting for future "me" to
          reminisce how I was messing around. I have an important year coming up{" "}
          <em>(graduating next year)</em>, so would like this to be a medium to
          keep track of everything that'll get overwhelming.
        </div>
        <div>
          I appreciate details yet they are often what we forget over time. My
          writings are certainly not going to be the best, but you start
          somewhere.
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default App;
