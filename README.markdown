# Customer Management App 📊

Welcome to **Customer Management App**, a modern React-based web application designed for managing customer records and tracking their financial accounts. This project features a responsive UI with dark/light theme support, customer search and editing, account visualization using charts, and mock API integration for data handling. It serves as a portfolio project demonstrating front-end skills with full-stack-like features using mock data.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Customer Management**: Add, edit, delete, and search customers with details like company name, address, ICE code, phone, email, and reference person.
- **Account Tracking**: View and update customer financial data (receivables, payables, notes) visualized with pie and area charts.
- **Theme Toggle**: Switch between dark and light modes for better user experience.
- **Search Functionality**: Filter customers by ID, company name, or ICE code.
- **Modal Editing**: Detailed modal for editing customer information and confirming deletions.
- **Toast Notifications**: User-friendly notifications for API operations using React Toastify.
- **Fake Data Generation**: Uses Faker.js to generate mock account data for demonstration.
- **Responsive Design**: Fully responsive layout for desktop and mobile devices.

## Demo

Check out the live demo of the application [here](https://allinone-pro.netlify.app/) (replace with your deployed app link).

## Screenshot

![Customer Management App Screenshot](./public/a_app-gif-2.gif)
![Customer Management App Screenshot](./public/a_app-gif-1.gif)

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **React Router**: For client-side routing and navigation.
- **Axios**: For making API requests to mock backend (MockAPI.io).
- **Material-UI-Charts (MUI)**: For charts like PieChart and LineChart.
- **Heroicons**: For scalable icons.
- **Faker.js**: For generating fake data.
- **React Toastify**: For toast notifications.
- **Tailwind CSS**: For styling.
- **React Scripts**: For project setup and build tools.

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**:

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000`.

## Usage

- **Home Page**: Overview of features with links to customer and account management.
- **Customers Page**: Search and manage customer records in a table view; add new customers or edit/delete existing ones via modal.
- **Account Page**: Select a customer from dropdown, view financial charts, and edit account details.
- **Theme Toggle**: Switch themes using the sidebar toggle.
- **Navigation**: Use the sidebar to navigate between pages.

## Project Structure

```
├── public/
├── src
│   ├── App.css
│   ├── App.js
│   ├── components
│   │   ├── Button.jsx
│   │   ├── charts
│   │   │   ├── AngelPieChart.jsx
│   │   │   └── SimpleAreaChart.jsx
│   │   └── DropdownSearch.jsx
│   ├── features
│   │   └── ThemeContext.jsx
│   ├── index.css
│   ├── index.js
│   ├── layouts
│   │   ├── CurrentAccount
│   │   │   └── InputCurrent.jsx
│   │   └── Customer
│   │       ├── Detail.jsx
│   │       ├── SearchBar.jsx
│   │       ├── SideBar.jsx
│   │       └── Table.jsx
│   ├── pages
│   │   ├── Account.jsx
│   │   ├── Customer.jsx
│   │   └── Home.jsx
│   ├── services
│   │   ├── api.js
│   │   └── customerServices.js
│   ├── styles
│   │   ├── Customer.css
│   │   └── theme.ts
│   └── utils
│       └── fetchWithToast.js
├── tailwind.config.js
├── README.md
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a Pull Request.

Please ensure your code follows the project's coding standards and includes tests where applicable.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Customer and data entries are entirely fictional, generated with faker.js and mockapi.io.

---

Happy managing! 📊 If you have any questions or feedback, feel free to open an issue or contact the maintainers.
