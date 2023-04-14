# Inditex Frontend

[![License](https://img.shields.io/github/license/masedri/inditex-frontend)](https://github.com/masedri/inditex-frontend/blob/main/LICENSE)
[![NextJS](https://img.shields.io/badge/NextJS-v13.3.0-green)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-v3.3.1-blue)](https://tailwindcss.com/)
[![PNPM](https://img.shields.io/badge/pnpm-v8.2.0-red)](https://pnpm.js.org/)
[![Vitest](https://img.shields.io/badge/vitest-v0.30.1-orange)](https://github.com/vitestjs/vitest)
[![Vercel deployment](https://img.shields.io/badge/Deployment-Vercel-blueviolet)](https://inditex-frontend-masedri.vercel.app/)

This is the frontend of the Inditex coding challenge, which displays a list of products and allows the user to filter them by name and author.

## Start Up

1. Install pnpm: `npm install -g pnpm`

2. Clone the repository: `git clone https://github.com/masedri/inditex-frontend.git`

3. Navigate to the project directory: `cd inditex-frontend`

4. Install project dependencies: `pnpm install`

5. Start the development server: `pnpm dev`

6. Open the project in your browser at `http://localhost:3000`

## Technologies

The project uses the following technologies and frameworks:

- [Next.js](https://nextjs.org/) for server-side rendering and routing
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) for client-side data fetching
- [TypeScript](https://www.typescriptlang.org/) for improved code quality and static type checking
- [Prettier](https://prettier.io/) for code formatting
- [ESLint](https://eslint.org/) for code linting
- [Vitest](https://vitest.netlify.app/) for testing
- [Husky](https://typicode.github.io/husky/#/) and [Commitlint](https://commitlint.js.org/#/) for enforcing commit message formatting and preventing bad commits
- [pnpm](https://pnpm.io/) for package management

## Architecture

The project follows the Next.js conventions for file structure, including the `pages` directory for routes, and the `public` directory for static files. It also uses Tailwind CSS for styling, which is integrated with Next.js via a custom `_app.js` file.

Client-side filtering is implemented with the `fetch` API, which retrieves data from a REST API provided by the backend. Server-side rendering is achieved with Incremental Static Regeneration (ISR), which allows pages to be regenerated in the background at a specified interval, providing the user with the latest data while maintaining high performance.

The project is written in TypeScript, which provides static type checking and improved code quality. Code formatting is enforced with Prettier, and linting with ESLint, using the recommended configuration for Next.js projects.

Testing is done with Vitest, a lightweight testing framework that integrates well with TypeScript and is easy to configure. Git hooks are used with Husky and Commitlint to enforce commit message formatting and prevent bad commits.

## Deployment

The project is deployed on Vercel at the following URL: https://inditex-frontend-masedri.vercel.app/

## TODO List for Inditex Frontend

This is a list of proposed improvements for the Inditex Frontend project.

- [ ] Improve First Contentful Paint (FCP) by implementing Intersection Observer to only render elements when they are within the viewport.
- [ ] Create a custom player that shares state between views. This would improve the user experience by allowing the user to seamlessly navigate between pages without losing their current position in the player.
- [ ] Add automated tests to ensure that new features and bug fixes do not introduce regressions.
- [ ] Add transitions between views to make the user experience more smooth and visually appealing.
- [ ] Implement a CI/CD pipeline to automate the build, testing, and deployment processes. This would increase efficiency and reduce the risk of errors when deploying changes to the production environment.

## Thoughts

I chose to implement ISR (Incremental Static Regeneration) in this project as I found it to be an interesting approach to improve performance rather than rendering everything from the client. 

I know that I did not use styled-components, as the latest version of the Next.js CLI recommends using Tailwind CSS, and I chose to make style components with utility classes. 

Unfortunately, I did not have time to implement tests in this project, so it is still pending.

The project took me around 16 hours to complete. It has been some time since I worked with React and Next.js, so I had to catch up. I also received assistance from ChatGPT to create the README.

## Conclusions

I found the process of working with Next.js, custom hooks and Tailwind CSS to be a pleasant experience. The ability to use the latest web technologies and frameworks and have them configured for you makes it easier to focus on the actual development rather than configuring the build process, although I would change bundle from Next.js to Vite for improved build times and development experience.

I learned about ISR and its benefits in improving performance by allowing the site to be pre-rendered while still providing dynamic content. I would definitely consider using it in future projects.

Overall, I am satisfied with the final result and hope to continue learning and working with Next.js and other web technologies in the future.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for bug fixes, new features, or improvements. Please follow the existing code style and conventions, and make sure that all tests pass before submitting your changes.

## Credits

This project was developed by [Masedri](https://github.com/masedri) as part of the Inditex coding challenge.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
