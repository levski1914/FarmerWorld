import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import AuthContext from "../context/AuthContext";
const Header = ({ user, handleLogout }) => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          {user ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
      </header>
      <header class="border font-[sans-serif] tracking-wide relative z-50">
        <div class="flex flex-wrap items-center gap-4 px-10 py-4 relative bg-white min-h-[70px]">
          <a href="javascript:void(0)" class="hidden max-lg:block">
            <img
              src="https://readymadeui.com/readymadeui.svg"
              alt="logo"
              class="w-36"
            />
          </a>

          <div
            id="collapseMenu"
            class="w-full max-lg:hidden lg:!block max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
          >
            <button
              id="toggleClose"
              class="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-3.5 h-3.5 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>

            <div class="lg:flex max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <ul class="lg:flex lg:gap-x-7 max-lg:space-y-2">
                <li class="mb-6 hidden max-lg:block">
                  <a href="javascript:void(0)">
                    <img
                      src="https://readymadeui.com/readymadeui.svg"
                      alt="logo"
                      class="w-36"
                    />
                  </a>
                </li>
                <li class="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    class="hover:text-[#FEE685] font-semibold text-blue-600 block text-[12px]"
                  >
                    Become a seller
                  </a>
                </li>
                <li class="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    class="hover:text-[#FEE685] font-semibold text-[#333] block text-[12px]"
                  >
                    Online Tracking - Coming soon
                  </a>
                </li>
                <li class="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    class="hover:text-[#FEE685] font-semibold text-[#333] block text-[12px]"
                  >
                    Return policy
                  </a>
                </li>
              </ul>

              <ul class="lg:flex lg:space-x-7 max-lg:space-y-2 max-lg:mt-2 ml-auto">
                <li class="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    class="hover:text-[#FEE685] underline font-semibold text-[#333] block text-[12px]"
                  >
                    - Free shipping for orders over $50 -
                  </a>
                </li>
              </ul>
              <ul class="lg:flex lg:space-x-8 max-lg:space-y-2 max-lg:mt-2 ml-auto">
                <li class="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    class="hover:text-[#FEE685] font-semibold text-[#333] block text-[12px]"
                  >
                    App - Coming soon
                  </a>
                </li>

                <li class="max-lg:border-b max-lg:py-3">
                  <Link
                    to="/login"
                    class="hover:text-[#FEE685] font-semibold text-[#333] block text-[12px]"
                  >
                    Sign in / Register
                  </Link>
                </li>
                <li class="text-[10px] max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    class="hover:text-[#FEE685] font-semibold text-[#333] block text-[12px]"
                  >
                    Language
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="flex ml-auto lg:hidden">
            <button id="toggleOpen">
              <svg
                class="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div className="bg-emerald-700 text-amber-200 ">
        <div className="border py-3 px-6">
          <div className="flex justify-between">
            <div className="flex items-center">
              <span className="ml-2 text-3xl font-semibold text-amber-100">
                Фермерски Свят
              </span>
            </div>

            <div className="ml-6 flex flex-1 gap-x-3">
              <input
                type="text"
                className="w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm"
                value="DJI phantom"
              />
            </div>

            <div className="ml-2 flex">
              <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-emerald-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                  <path
                    fill-rule="evenodd"
                    d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">Orders</span>
              </div>

              <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-emerald-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">Favorites</span>
              </div>

              <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-emerald-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                    3
                  </span>
                </div>
                <span className="text-sm font-medium">Cart</span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex cursor-pointer select-none items-center gap-x-2 rounded-md border bg-[#4094F7] py-2 px-4 text-white hover:bg-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <span className="text-sm font-medium">Categories</span>
            </div>

            <div className="flex gap-x-8">
              <ul class="lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                <li class="mb-6 hidden max-lg:block">
                  <a href="javascript:void(0)">
                    <img
                      src="https://readymadeui.com/readymadeui.svg"
                      alt="logo"
                      class="w-36"
                    />
                  </a>
                </li>
                <li class="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    class="hover:text-blue-600 text-[15px] font-bold  block"
                  >
                    Home
                  </a>
                </li>
                <li class="group max-lg:border-b max-lg:py-3 relative">
                  <a
                    href="javascript:void(0)"
                    class="hover:text-[#FFFFFF]  text-[15px] font-bold lg:hover:fill-[#FFFFFF] block"
                  >
                    Shop
                  </a>
                </li>

                <li class="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    class="hover:text-emerald-400  text-[15px] font-bold block"
                  >
                    Team
                  </a>
                </li>
                <li class="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    class="hover:text-emerald-400  text-[15px] font-bold block"
                  >
                    About
                  </a>
                </li>
                <li class="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    class="hover:text-emerald-400  text-[15px] font-bold block"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div class="navbar_contact_area">
              <i class="ri-phone-line"></i>
              <div class="navbar_contact_area_end">
                <p>Hotline</p>
                <h4>
                  <a href="tel:01835476985">(0183) 547-6985</a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
