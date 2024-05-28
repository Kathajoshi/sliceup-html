const plugin = require("tailwindcss/plugin");

// import { darken, lighten } from 'polished'
// const primary = '#054826'
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  important: true,
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1264px',
        '2xl': '1600px'
      }
    },
    fontFamily: {
      base: ["TT Hoves", "sans-serif"]
    },
    extend: {
      colors: {
        "main-color": "var(--main-color)",
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '-1': '-1',
        '-2': '-2',
        '-3': '-3',
        '-4': '-4',
        '-5': '-5',
      },
      backgroundImage: {
        'bodybg-top': `url("data:image/svg+xml,%3Csvg width='1536' height='900' viewBox='0 0 1536 900' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_104_3943)'%3E%3Cg opacity='0.4' filter='url(%23filter0_f_104_3943)'%3E%3Cg filter='url(%23filter1_f_104_3943)'%3E%3Cellipse cx='1091.33' cy='-105.005' rx='385.93' ry='417.887' transform='rotate(30 1091.33 -105.005)' fill='url(%23paint0_radial_104_3943)'/%3E%3C/g%3E%3Cg filter='url(%23filter2_f_104_3943)'%3E%3Cellipse cx='1517.95' cy='75.9123' rx='452.959' ry='457.865' transform='rotate(30 1517.95 75.9123)' fill='url(%23paint1_radial_104_3943)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_f_104_3943' x='497.114' y='-715.218' width='1675.1' height='1447.85' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='100' result='effect1_foregroundBlur_104_3943'/%3E%3C/filter%3E%3Cfilter id='filter1_f_104_3943' x='577.114' y='-635.218' width='1028.43' height='1060.42' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='60' result='effect1_foregroundBlur_104_3943'/%3E%3C/filter%3E%3Cfilter id='filter2_f_104_3943' x='973.686' y='-470.809' width='1088.53' height='1093.44' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='45' result='effect1_foregroundBlur_104_3943'/%3E%3C/filter%3E%3CradialGradient id='paint0_radial_104_3943' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(1091.33 -105.005) rotate(90) scale(417.887 385.93)'%3E%3Cstop stop-color='white'/%3E%3Cstop offset='1' stop-color='%232360FF' stop-opacity='0.34'/%3E%3C/radialGradient%3E%3CradialGradient id='paint1_radial_104_3943' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(1517.95 75.9124) rotate(90) scale(457.865 452.959)'%3E%3Cstop stop-color='%23306AFF'/%3E%3Cstop offset='1' stop-color='white' stop-opacity='0'/%3E%3C/radialGradient%3E%3CclipPath id='clip0_104_3943'%3E%3Crect width='1536' height='900' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A")`,
        'bodybg-bottom': `url("data:image/svg+xml,%3Csvg width='1536' height='471' viewBox='0 0 1536 471' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_124_863)'%3E%3Cg opacity='0.4' filter='url(%23filter0_f_124_863)'%3E%3Cg filter='url(%23filter1_f_124_863)'%3E%3Cellipse cx='488.246' cy='571.328' rx='370.521' ry='401.201' transform='rotate(-150 488.246 571.328)' fill='url(%23paint0_radial_124_863)'/%3E%3C/g%3E%3Cg filter='url(%23filter2_f_124_863)'%3E%3Cellipse cx='78.6592' cy='397.634' rx='434.873' ry='439.583' transform='rotate(-150 78.6592 397.634)' fill='url(%23paint1_radial_124_863)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_f_124_863' x='-549.481' y='-232.865' width='1608.22' height='1390.04' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='96.0071' result='effect1_foregroundBlur_124_863'/%3E%3C/filter%3E%3Cfilter id='filter1_f_124_863' x='-5.43683' y='62.2866' width='987.366' height='1018.08' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='57.6043' result='effect1_foregroundBlur_124_863'/%3E%3C/filter%3E%3Cfilter id='filter2_f_124_863' x='-443.873' y='-127.258' width='1045.06' height='1049.78' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='43.2032' result='effect1_foregroundBlur_124_863'/%3E%3C/filter%3E%3CradialGradient id='paint0_radial_124_863' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(488.246 571.328) rotate(90) scale(401.201 370.521)'%3E%3Cstop stop-color='white'/%3E%3Cstop offset='1' stop-color='%232360FF' stop-opacity='0.34'/%3E%3C/radialGradient%3E%3CradialGradient id='paint1_radial_124_863' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(78.6591 397.634) rotate(90) scale(439.583 434.873)'%3E%3Cstop stop-color='%23306AFF'/%3E%3Cstop offset='1' stop-color='white' stop-opacity='0'/%3E%3C/radialGradient%3E%3CclipPath id='clip0_124_863'%3E%3Crect width='1536' height='470' fill='white' transform='matrix(-1 0 0 -1 1536 470.516)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A")`,
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'base', // only generate global styles
      strategy: 'class', // only generate classes
    }),
  ],
};
