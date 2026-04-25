import { Link } from "react-router-dom";

const PersonalBlogs = () => {
  return (
    <div className="mt-20 px-6">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-semibold tracking-wide text-gray-100">
          Personal Blogs 📖
        </h1>
        <p className="mt-3 text-gray-400 text-base">
          Stories, reflections, and moments from my life. <br />
          Browse the personal posts and read the full story.
        </p>
      </div>

      <div className="mt-14 max-w-3xl mx-auto">
        <div className="rounded-3xl border border-gray-800 bg-[#0f1f1f]/80 p-6">
          <h2 className="text-2xl font-semibold text-gray-100">Index</h2>
          <p className="mt-2 text-gray-400">
            Click a title to open the corresponding personal blog.
          </p>

          <ul className="mt-6 space-y-4">
            <li className="rounded-2xl border border-gray-800 bg-[#121d24]/90 p-5 transition hover:border-[#3ddad7] hover:bg-[#11212b]">
              <Link to="viva" className="block">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">The Viva That Almost Went Wrong</h3>
                    <p className="mt-1 text-sm text-gray-400">
                      A chaotic viva morning, a last-minute rush, and how it still worked out.
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

export default PersonalBlogs;