import { ChartBarSquareIcon, UsersIcon } from "@heroicons/react/24/solid";

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
    ref: "/cari",
  },
];

const Home = () => {
  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Customer Management System
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Manage customers and track their accounts easily, all on one
          user-friendly platform.
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-white ">
        <div className="flex p-6  gap-8 justify-center ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border w-72 rounded-xl shadow-sm hover:shadow-md transition bg-gray-50 place-items-center cursor-pointer "
              onClick={() => (window.location.href = `${feature.ref}`)}
            >
              {feature.icon}
              <h3 className="mt-4 font-semibold text-lg">{feature.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="p-8 text-center  ">
        <h2 className="text-3xl font-bold mb-4">
          Are you ready to grow while managing your business with ease?
        </h2>
        <p className="mb-8 text-gray-700">
          Currently a simple customer management system, an advanced version of
          this system will soon be available with accounting, current account,
          invoice management, and inventory management systems.
        </p>
      </section>

      {/* Footer Info Section */}
      <footer className="bg-light-eleventh py-8 mt-auto ">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-lg font-bold mb-4">Important Notes</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
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
