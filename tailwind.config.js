module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 背景色
        background: {
          light: '#ffffff',
          dark: '#0a0a0a',
        },
        // 前景色（文字）
        foreground: {
          light: '#171717',
          dark: '#ededed',
        },
        // 卡片背景
        card: {
          light: '#ffffff',
          dark: '#1f2937', // gray-800
        },
        // 主要文本
        text: {
          primary: {
            light: '#171717', // gray-900
            dark: '#f3f4f6', // gray-100
          },
          secondary: {
            light: '#4b5563', // gray-600
            dark: '#d1d5db', // gray-300
          },
        },
        // 边框颜色
        border: {
          light: '#e5e7eb', // gray-200
          dark: '#374151', // gray-700
        },
        // 链接颜色
        link: {
          light: '#4f46e5', // indigo-600
          dark: '#818cf8', // indigo-400
          hover: {
            light: '#4338ca', // indigo-700
            dark: '#a5b4fc', // indigo-300
          },
        },
        // 按钮颜色
        button: {
          primary: {
            light: '#4f46e5', // indigo-600
            dark: '#6366f1', // indigo-500
            hover: {
              light: '#4338ca', // indigo-700
              dark: '#818cf8', // indigo-400
            },
          },
        },
        // 标签颜色
        tag: {
          background: {
            light: '#f3f4f6', // gray-100
            dark: '#374151', // gray-700
          },
          text: {
            light: '#374151', // gray-700
            dark: '#e5e7eb', // gray-200
          },
        },
      },
    },
  },
  plugins: [],
} 