import Header from "../components/Header";
import Footer from "../components/Footer";
const NotFound: React.FC = () => {
  return (
    <div className="text-text flex flex-col justify-center bg-background items-center">
      <div className="min-h-screen w-10/12 md:w-3/5 md:m-10 lg:m-0 xl:w-2/5 flex justify-center items-start flex-col gap-5">
        <Header activeTab={null} />
        <div className="404content w-full flex flex-col justify-center mt-auto mb-auto">
          <div className="text-4xl pb-5 self-center">
            You have wandered... well nowhere
          </div>
          <div className="text-xl self-center pb-3">
            Here are some cool blogs I found while making this
          </div>
          <div className="md:flex md:flex md:justify-center md:items-center md:mb-0 md:gap-5">
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="block text-accent hover:text-secondary transition duration-300"
                href="https://mitchellh.com"
              >
                - Mitchell Hashimoto
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-secondary transition duration-300"
                href="https://macwright.com/"
              >
                - Tom Macwright
              </a>
            </div>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="block text-accent hover:text-secondary transition duration-300"
                href="https://nadh.in/"
              >
                - Kailash Nadh
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-secondary transition duration-300"
                href="https://overreacted.io/"
              >
                - Dan Abramov
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default NotFound;
