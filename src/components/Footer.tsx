const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="my-7 w-full flex justify-between items-center font-sans-serif text-gray-600 dark:text-gray-400">
      <div>© {currentYear} Manasi Patil.</div>

      <div className="links flex items-center space-x-2">
        {/* Pinterest */}
        <a
          className="text-gray-500 dark:text-gray-400 transition hover:text-gray-900 dark:hover:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.pinterest.com/manasi210772/"
        >
          <svg
            viewBox="0 0 24 24"
            className="fill-current h-[18px] w-[18px] shrink-0"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12c0 4.99 3.657 9.128 8.438 10.242-.117-.87-.223-2.204.047-3.154.243-.828 1.56-5.275 1.56-5.275s-.397-.794-.397-1.967c0-1.842 1.068-3.217 2.398-3.217 1.131 0 1.677.849 1.677 1.867 0 1.138-.725 2.838-1.099 4.414-.312 1.319.662 2.393 1.964 2.393 2.357 0 3.944-3.028 3.944-6.615 0-2.729-1.838-4.774-5.183-4.774-3.776 0-6.132 2.815-6.132 5.959 0 1.085.312 1.85.799 2.442.223.267.254.374.173.681-.056.224-.188.762-.243.976-.078.298-.317.405-.587.294-1.641-.669-2.406-2.465-2.406-4.483 0-3.335 2.817-7.33 8.382-7.33 4.471 0 7.412 3.234 7.412 6.705 0 4.59-2.553 8.018-6.316 8.018-1.263 0-2.45-.682-2.856-1.455l-.776 2.956c-.28 1.083-1.037 2.438-1.545 3.265A12.002 12.002 0 0 0 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        {/* GitHub */}
        <a
          className="text-gray-500 dark:text-gray-400 transition hover:text-gray-900 dark:hover:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/manasi210772"
        >
          <svg
            viewBox="0 0 24 24"
            className="fill-current h-[18px] w-[18px] shrink-0"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
          </svg>
        </a>

        {/* Email */}
        <a
          className="text-gray-500 dark:text-gray-400 transition hover:text-gray-900 dark:hover:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:manasi210772@gmail.com"
        >
          <svg
            viewBox="0 0 20 20"
            className="fill-current h-[18px] w-[18px] shrink-0"
          >
            <path d="M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z"></path>
            <path d="m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"></path>
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          className="text-gray-500 dark:text-gray-400 transition hover:text-gray-900 dark:hover:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/manasi-patil-596034326/"
        >
          <svg
            viewBox="0 0 24 24"
            className="fill-current h-[18px] w-[18px] shrink-0"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
          </svg>
        </a>
        {/* Kaggle */}
        <a
          className="text-sm text-gray-500 dark:text-gray-400 transition dark:hover:text-gray-300 hover:text-gray-900"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.kaggle.com/nickuhm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="fill-current h-[18px] w-[18px]"
          >
            <defs>
              <path id="B" d="M31.5 15.978h289v130.044h-289z" />
            </defs>
            <path
              transform="matrix(.527027 0 0 .527027 -30.632288 -22.45559)"
              clip-path="url(#A)"
              d="M105.75 102.968c-.06.238-.298.357-.713.357H97.1c-.477 0-.89-.208-1.248-.625L82.746 86.028l-3.655 3.477v12.93c0 .595-.298.892-.892.892h-6.152c-.595 0-.892-.297-.892-.892V43.5c0-.593.297-.89.892-.89H78.2c.594 0 .892.298.892.89v36.288l15.692-15.87c.416-.415.832-.624 1.248-.624h8.204c.356 0 .593.15.713.445.12.357.09.624-.09.803L88.274 80.588l17.297 21.488c.237.238.297.535.18.892"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
