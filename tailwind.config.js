/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        //Home
        "back-image":
          'url("https://res.cloudinary.com/dkjwqop4g/image/upload/v1719439913/Noise_Texture_vfhwzc.webp")',
      },
    },
  },
  plugins: [],
};
