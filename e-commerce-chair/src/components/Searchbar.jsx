const Searchbar = () => {
  return (
    <div className="relative">
      {/* Search Input */}
      <input
        placeholder="Search..."
        type="text"
        className="
          bg-black border-none rounded-lg text-white
          px-14 py-2 text-lg
          placeholder-gray-400 outline-none
          w-[300px] h-[45px]
          xsm:w-[200px] xxsm:w-[100px]
        "
      />

      {/* Search Icon */}
      <div className="absolute left-4 top-2.5">
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} strokeWidth={2} stroke="url(#search)" fill="none">
          <circle r={8} cy={11} cx={11} />
          <line y2="16.65" y1={22} x2="16.65" x1={22} stroke="url(#searchl)" />
          <defs>
            <linearGradient gradientTransform="rotate(50)" id="search">
              <stop stopColor="#f8e7f8" offset="0%" />
              <stop stopColor="#b6a9b7" offset="50%" />
            </linearGradient>
            <linearGradient id="searchl">
              <stop stopColor="#b6a9b7" offset="0%" />
              <stop stopColor="#837484" offset="50%" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Filter Button */}
      <button
        className="
          absolute top-[6px] right-[7px]
          flex items-center justify-center
          w-10 h-9 rounded-lg
          bg-gradient-to-b from-[#161329] via-black to-[#1d1b4b]
          border border-transparent
        "
      >
        <svg preserveAspectRatio="none" height={27} width={27} viewBox="4.8 4.56 14.832 15.408" fill="none">
          <path
            d="M8.16 6.65002H15.83C16.47 6.65002 16.99 7.17002 16.99 7.81002V9.09002C16.99 9.56002 16.7 10.14 16.41 10.43L13.91 12.64C13.56 12.93 13.33 13.51 13.33 13.98V16.48C13.33 16.83 13.1 17.29 12.81 17.47L12 17.98C11.24 18.45 10.2 17.92 10.2 16.99V13.91C10.2 13.5 9.97 12.98 9.73 12.69L7.52 10.36C7.23 10.08 7 9.55002 7 9.20002V7.87002C7 7.17002 7.52 6.65002 8.16 6.65002Z"
            stroke="#d6d6e6"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}

export default Searchbar
