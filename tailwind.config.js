module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a365d", // Deep authority blue
          50: "#e6f3ff",
          100: "#b3d9ff", 
          200: "#80bfff",
          300: "#4da6ff",
          400: "#1a8cff",
          500: "#1a365d",
          600: "#153052",
          700: "#102947",
          800: "#0b223c",
          900: "#061b31",
        },
        secondary: {
          DEFAULT: "#2d3748", // Sophisticated depth gray-700
          50: "#f7fafc", // gray-50
          100: "#edf2f7", // gray-100
          200: "#e2e8f0", // gray-200
          300: "#cbd5e0", // gray-300
          400: "#a0aec0", // gray-400
          500: "#718096", // gray-500
          600: "#4a5568", // gray-600
          700: "#2d3748", // gray-700
          800: "#1a202c", // gray-800
          900: "#171923", // gray-900
        },
        accent: {
          DEFAULT: "#00d9ff", // Innovation spark cyan
          50: "#e6feff",
          100: "#b3fcff",
          200: "#80f9ff",
          300: "#4df6ff",
          400: "#1af3ff",
          500: "#00d9ff",
          600: "#00c2e6",
          700: "#00abcc",
          800: "#0094b3",
          900: "#007d99",
        },
        background: "#ffffff", // Clean canvas white
        surface: "#f7fafc", // Subtle elevation gray-50
        text: {
          primary: "#1a202c", // Maximum readability gray-800
          secondary: "#718096", // Clear hierarchy gray-500
        },
        success: "#38a169", // Confident achievement green-600
        warning: "#d69e2e", // Professional caution yellow-600
        error: "#e53e3e", // Clear concern red-500
        border: "#e2e8f0", // Content separation gray-200
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        minimal: '0 1px 3px rgba(0, 0, 0, 0.1)',
        interactive: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        '250': '250ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out',
      },
      borderWidth: {
        '1': '1px',
        '4': '4px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}
