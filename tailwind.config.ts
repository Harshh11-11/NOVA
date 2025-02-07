import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			'color-1': 'hsl(var(--color-1))',
  			'color-2': 'hsl(var(--color-2))',
  			'color-3': 'hsl(var(--color-3))',
  			'color-4': 'hsl(var(--color-4))',
  			'color-5': 'hsl(var(--color-5))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			rainbow: 'rainbow var(--speed, 2s) infinite linear'
  		},
  		keyframes: {
  			rainbow: {
  				'0%': {
  					'background-position': '0%'
  				},
  				'100%': {
  					'background-position': '200%'
  				}
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

// tailwind.config.js
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
	  extend: {
		keyframes: {
		  lights: {
			"0%": {
			  color: "hsl(230, 40%, 80%)",
			  textShadow:
				"0 0 1em hsla(320, 100%, 50%, 0.2), 0 0 0.125em hsla(320, 100%, 60%, 0.3), -1em -0.125em 0.5em hsla(40, 100%, 60%, 0), 1em 0.125em 0.5em hsla(200, 100%, 60%, 0)",
			},
			"30%": {
			  color: "hsl(230, 80%, 90%)",
			  textShadow:
				"0 0 1em hsla(320, 100%, 50%, 0.5), 0 0 0.125em hsla(320, 100%, 60%, 0.5), -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2), 0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4)",
			},
			"40%": {
			  color: "hsl(230, 100%, 95%)",
			  textShadow:
				"0 0 1em hsla(320, 100%, 50%, 0.5), 0 0 0.125em hsla(320, 100%, 90%, 0.5), -0.25em -0.125em 0.125em hsla(40, 100%, 60%, 0.2), 0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4)",
			},
			"70%": {
			  color: "hsl(230, 80%, 90%)",
			  textShadow:
				"0 0 1em hsla(320, 100%, 50%, 0.5), 0 0 0.125em hsla(320, 100%, 60%, 0.5), 0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2), -0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4)",
			},
			"100%": {
			  color: "hsl(230, 40%, 80%)",
			  textShadow:
				"0 0 1em hsla(320, 100%, 50%, 0.2), 0 0 0.125em hsla(320, 100%, 60%, 0.3), 1em -0.125em 0.5em hsla(40, 100%, 60%, 0), -1em 0.125em 0.5em hsla(200, 100%, 60%, 0)",
			},
		  },
		},
		animation: {
		  lights: "lights 5s linear infinite",
		},
	  },
	},
	plugins: [],
  };
  
