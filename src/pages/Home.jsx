//  Component that displays the application's homepage.
import { ChartBarSquareIcon, UsersIcon } from "@heroicons/react/24/solid";

//  Data for feature cards
const features = [
  {
    icon: <UsersIcon className="w-8 h-8 text-blue-500" />,
    title: "Customer Management",
    desc: "Add, edit, and search customer records instantly.",
    ref: "/customers",
  },
  {
    icon: <ChartBarSquareIcon className="w-8 h-8 text-green-500" />,
    title: "Account Tracking",
    desc: "Monitor receivables and payables in real-time.",
    ref: "/account",
  },
];

//  Homepage component
const Home = () => {
  return (
    <div className="h-screen dark:bg-dark-primary bg-light-primary flex flex-col">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white text-black">
          Customer Management System
        </h1>
        <p className="text-lg dark:text-gray-300 text-gray-600 mb-8 max-w-2xl mx-auto">
          Manage customers and track their accounts easily, all on one
          user-friendly platform.
        </p>
      </section>

      {/* Features Section */}
      <section className="dark:bg-dark-primary bg-light-primary">
        <div className="flex p-6 gap-8 justify-center flex-col md:flex-row">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border w-22 md:w-72 rounded-xl shadow-sm hover:shadow-md transition bg-gray-50 place-items-center cursor-pointer"
              onClick={() => (window.location.href = `${feature.ref}`)}
            >
              {feature.icon}
              <h3 className="mt-4 font-semibold text-lg">{feature.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/*  GitHub link section */}
      <section className="p-8 text-center dark:bg-dark-primary bg-light-primary">
        <h2 className="text-3xl font-bold mb-4 dark:text-white text-black ">
          Are you ready to grow while managing your business with ease?
        </h2>
        <p className="mb-8 dark:text-gray-300 text-gray-600">
          Currently a simple customer management system, an advanced version of
          this system will soon be available with accounting, current account,
          invoice management, and inventory management systems.
        </p>
        <p className="mb-8 dark:text-gray-300 text-gray-600">Stay tuned...</p>
        {/* {/!* Github button */}

        <button className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-transform duration-200 ring-offset-background  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group relative animate-rainbow cursor-pointer border-0  bg-[length:200%] text-foreground [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[20%] before:w-[60%] before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] before:[filter:blur(calc(0.8*1rem))] bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] hover:scale-105 active:scale-95 h-10 px-4 py-2 inline-flex ">
          <div
            className="flex items-center"
            onClick={() =>
              window.open("https://github.com/muhammedvuslat", "_blank")
            }
          >
            <svg className="size-4" viewBox="0 0 438.549 438.549">
              <path
                d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
                fill="#fff"
              ></path>
            </svg>
            <span className="ml-1 text-white lg:inline p-1">Go To GitHub</span>
          </div>
        </button>
      </section>

      {/* Footer section */}
      <footer className="dark:bg-dark-eleventh bg-light-eleventh py-2 mt-auto">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-lg font-bold mb-4">Important Notes</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
            <li>
              This is a React front-end portfolio project with full-stack-like
              features.
            </li>
            <li>
              API operations are handled via <strong>mockapi.io</strong>.
            </li>
            <li>
              Backend logic that couldn't be implemented on mock API is handled
              on the front-end.
            </li>
            <li>
              Customer and data entries are entirely fictional, generated with{" "}
              <strong>faker.js</strong>.
            </li>
            <li>
              No real individuals or organizations are involved in this dataset.
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Home;
