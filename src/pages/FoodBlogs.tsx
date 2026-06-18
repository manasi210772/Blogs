import { Link } from "react-router-dom";

const FoodBlogs = () => {
  return (
    <div className="mt-20 px-6">

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-semibold tracking-wide text-text">
          Food Blogs 🍽️
        </h1>
        <p className="mt-3 text-gray-400 text-base">
          Delicious stories and culinary adventures. <br />
          Explore my food experiences and recipes.
        </p>
      </div>

      <div className="mt-14 max-w-3xl mx-auto">
        <div className="rounded-3xl border border-gray-300 dark:border-gray-800 bg-gray-100 dark:bg-[#0f1f1f]/80 p-6">
          <h2 className="text-2xl font-semibold text-text dark:text-gray-100">Index</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Click a title to open the corresponding food blog.
          </p>

          <ul className="mt-6 space-y-4">
            <li className="rounded-2xl border border-gray-800 bg-[#121d24]/90 p-5 transition hover:border-[#3ddad7] hover:bg-[#11212b]">
              <Link to="sugarcane" className="block">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">That ₹20 Sugarcane Juice That Saved a Summer Evening</h3>
                    <p className="mt-1 text-sm text-gray-400">
                      A simple glass of sugarcane juice at Thane station that turned a hot, exhausting evening into something refreshing and memorable.
                    </p>
                  </div>
                  <span className="text-[#3ddad7] text-sm">Read →</span>
                </div>
              </Link>
            </li>
            <li className="rounded-2xl border border-gray-800 bg-[#121d24]/90 p-5 transition hover:border-[#3ddad7] hover:bg-[#11212b]">
              <Link to="manasjatra" className="block">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Mini Mutton Thali at Manas Jatra: Filling, Flavorful & A Bit Overwhelming</h3>
                    <p className="mt-1 text-sm text-gray-400">
                      A hearty mini mutton thali experience at Manas Jatra in Satara—packed with flavors, but a little too filling to enjoy it all.
                    </p>
                  </div>
                  <span className="text-[#3ddad7] text-sm">Read →</span>
                </div>
              </Link>
            </li>
            <li className="rounded-2xl border border-gray-800 bg-[#121d24]/90 p-5 transition hover:border-[#3ddad7] hover:bg-[#11212b]">
              <Link to="ora" className="block">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Ora Kitchen & Bar: A Night of Flavors, Chaos & Mixed Impressions</h3>
                    <p className="mt-1 text-sm text-gray-400">
                      A detailed dining experience at Ora Kitchen & Bar—from long waits to flavorful dishes and a few unexpected surprises.
                    </p>
                  </div>
                  <span className="text-[#3ddad7] text-sm">Read →</span>
                </div>
              </Link>
            </li>
            <li className="rounded-2xl border border-gray-800 bg-[#121d24]/90 p-5 transition hover:border-[#3ddad7] hover:bg-[#11212b]">
              <Link to="bluetokai" className="block">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">My First Visit to Blue Tokai: Coffee, Conversations & a Korean Bun</h3>
                    <p className="mt-1 text-sm text-gray-400">
                      A first-time experience at Blue Tokai Coffee Roasters, featuring a comforting hot mocha and a flavorful Jalapeño & Cheese Korean Bun.
                    </p>
                  </div>
                  <span className="text-[#3ddad7] text-sm">Read →</span>
                </div>
              </Link>
            </li>
            <li className="rounded-2xl border border-gray-800 bg-[#121d24]/90 p-5 transition hover:border-[#3ddad7] hover:bg-[#11212b]">
              <Link to="maiz" className="block">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">A Taste of Nostalgia: My Maiz Mexican Food Experience</h3>
                    <p className="mt-1 text-sm text-gray-400">
                      A comforting Mexican meal from Maiz that brought back memories of my first Chipotle experience eight years ago.
                    </p>
                  </div>
                  <span className="text-[#3ddad7] text-sm">Read →</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default FoodBlogs;