/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js}",
    "./public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors:{
        "custome-blue-one": "#181E4B",
        'custome-blue-two': "#14183E",
        "custome-blue-three": "#1E1D4C",
        "custome-red": "#DF6951",
        "custome-gray": "#5E6282",
        'custome-white': "#FFFFFF",
        "custome-gray2": "#F7F7F7",
      },
      fontFamily:{
        volkhov: ["volkhov"],
        poppins: ["poppins"],
        openSans: ["openSans"],
      },
      boxShadow:{
        "custome-shadow": "0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481)",
      }
    },
  },
  plugins: [],
}

