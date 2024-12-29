const Header = () => {
  return (
    <>
      <header className="bg-white dark:bg-bgColor">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-1">
          <div className="flex h-20 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="flex items-center" href="#">
                  <img src="star-1.svg" className="w-10 mr-2" alt="" />
                  <span className="text-white text-3xl">Pixfolio</span>
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-8 text-lg font-semibold">
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      HOME
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                     ABOUT ME
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      SERVICES
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      PROJECTS
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      CONTACT
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <div className="hidden sm:flex">
                  <a
                    className="rounded-md bg-orange-50 px-5 py-2.5 text-xl font-medium dark:text-logoColor dark:hover:text-white/75"
                    href="#"
                  >
                    Download CV
                  </a>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      ;
    </>
  );
};

export default Header;
