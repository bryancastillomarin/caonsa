# Corporativo CAONSA Website

This is a static website project, styled with [Tailwind CSS](https://tailwindcss.com/), for **Corporativo Caonsa**.

## Features

- Responsive design
- Modern Tailwind CSS styling
- Easy to customize

## Setup

1. Install dependencies:

    ```
    npm install
    ```
2. Build Tailwind CSS:

    ```
    npx tailwindcss init -p
    ```
3. Configure *tailwind.config.js* file as:

    ```
    content: [
        "./index.html",
    ],
    theme: {
        darkMode: "class",
        extend: {
            colors: {
                "primary": "#fb4e0c",
                "primary-dark": "#d9420a",
                "secondary": "#0e1f2f",
                "background-light": "#f6f7f8",
                "background-dark": "#0e1f2f",
                "surface-dark": "#162a3d",
                "brand-grey": "#8a8a8a",
                "neutral-gray": "#8a8a8a",
                "surface-dark": "#1a242d",
                "surface-darker": "#0b1824"
            },
            fontFamily: {
                "display": ["Space Grotesk", "sans-serif"]
            },
            borderRadius: {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
            },
            backgroundImage: {
                'blueprint': "url('https://www.transparenttextures.com/patterns/blueprint.png')"
            }
        }
    }
    ```
4. Build final CSS file:

    ```
    npx tailwindcss -i ./input.css -o ./styles.css
    ```

## Project Structure

- `index.html` — Main HTML file
- `input.css` — Custom styles and Tailwind directives
