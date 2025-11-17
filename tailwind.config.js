module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  screens: {
    sm: '640px',   
    md: '768px',    
    lg: '1024px',   
    xl: '1280px',
    '2xl': '1536px'
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nexa', 'sans-serif'],
        // Explicitly define font families for headings and body
        heading: ['Nexa', 'sans-serif'],
        body: ['Nexa', 'sans-serif'],
      },
      colors: {
        // Primary Colors
        primary: {
          background: "var(--bg-primary)",
          foreground: "var(--text-primary)",
        },
        secondary: {
          background: "var(--bg-secondary)",
          foreground: "var(--text-secondary)",
        },
        accent: {
          background: "var(--bg-accent)",
          foreground: "var(--text-accent)",
        },
        // Text Colors
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          accent: "var(--text-accent)",
          dark: "var(--text-dark)",
          light: "var(--text-light)",
        },
        // Background Colors
        background: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          tertiary: "var(--bg-tertiary)",
          accent: "var(--bg-accent)",
          warning: "var(--bg-warning)",
          highlight: "var(--bg-highlight)",
          light: "var(--bg-light)",
          white: "var(--bg-white)",
        },
        // Border Colors
        border: {
          primary: "var(--border-primary)",
          light: "var(--border-light)",
        },
        // Component-specific Colors
        header: {
          background: "var(--header-bg)"
        },
        button: {
          primary: "var(--button-primary-bg)",
          secondary: "var(--button-secondary-bg)",
          icon: "var(--button-icon-bg)"
        },
        footer: {
          background: "var(--footer-bg)",
          border: "var(--footer-border)"
        },
        link: {
          background: "var(--link-bg)",
          text: "var(--link-text)"
        }
      },
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'md': 'var(--font-size-md)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
        '5xl': 'var(--font-size-5xl)',
        '6xl': 'var(--font-size-6xl)'
      },
      fontWeight: {
        'normal': 'var(--font-weight-normal)',
        'semibold': 'var(--font-weight-semibold)',
        'bold': 'var(--font-weight-bold)',
        'extrabold': 'var(--font-weight-extrabold)'
      },
      lineHeight: {
        'xs': 'var(--line-height-xs)',
        'sm': 'var(--line-height-sm)',
        'md': 'var(--line-height-md)',
        'lg': 'var(--line-height-lg)',
        'xl': 'var(--line-height-xl)',
        '2xl': 'var(--line-height-2xl)',
        '3xl': 'var(--line-height-3xl)',
        '4xl': 'var(--line-height-4xl)',
        '5xl': 'var(--line-height-5xl)',
        '6xl': 'var(--line-height-6xl)',
        '7xl': 'var(--line-height-7xl)'
      },
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
        '5xl': 'var(--spacing-5xl)',
        '6xl': 'var(--spacing-6xl)',
        '7xl': 'var(--spacing-7xl)',
        '8xl': 'var(--spacing-8xl)',
        '9xl': 'var(--spacing-9xl)',
        '10xl': 'var(--spacing-10xl)'
      },
      borderRadius: {
        'xs': 'var(--radius-xs)',
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        'full': 'var(--radius-full)'
      }
    },
  },
  plugins: []
};