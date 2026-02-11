module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: { extend: {} },
  plugins: [
    require("flowbite/plugin")({
      forms: false,
      datatables: false,
      tooltips: false,
    }),
  ],
};
