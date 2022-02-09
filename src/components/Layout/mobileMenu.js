import { homeIcon, cursorIcon, shieldIcon, closeIcon } from "../../utils/icons";

const MobileMenu = () => {
  return (
    <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div className="pt-5 pb-6 px-5">
          <div className="flex items-center justify-between">
            <div>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
            </div>
            <div className="-mr-2">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Close menu</span>
                {closeIcon}
              </button>
            </div>
          </div>
          <div className="mt-6">
            <nav className="grid gap-y-8">
              {routes.map((route, index) => {
                return (
                  <MobileNavLink
                    key={index}
                    title={route.title}
                    icon={route.icon}
                  />
                );
              })}
            </nav>
          </div>
        </div>
        <div className="py-6 px-5 space-y-6">
          <div className="grid grid-cols-2 gap-y-4 gap-x-8">
            <a
              href="#"
              className="text-base font-medium text-gray-900 hover:text-gray-700"
            >
              Pricing
            </a>

            <a
              href="#"
              className="text-base font-medium text-gray-900 hover:text-gray-700"
            >
              Docs
            </a>

            <a
              href="#"
              className="text-base font-medium text-gray-900 hover:text-gray-700"
            >
              Help Center
            </a>

            <a
              href="#"
              className="text-base font-medium text-gray-900 hover:text-gray-700"
            >
              Guides
            </a>

            <a
              href="#"
              className="text-base font-medium text-gray-900 hover:text-gray-700"
            >
              Events
            </a>

            <a
              href="#"
              className="text-base font-medium text-gray-900 hover:text-gray-700"
            >
              Security
            </a>
          </div>
          <div>
            <a
              href="#"
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign up
            </a>
            <p className="mt-6 text-center text-base font-medium text-gray-500">
              Existing customer?
              <a href="#" className="text-indigo-600 hover:text-indigo-500">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

function MobileNavLink(props) {
  return (
    <a
      href="#"
      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
    >
      {props.icon}
      <span className="ml-3 text-base font-medium text-gray-900">
        {props.title}
      </span>
    </a>
  );
}

const routes = [
  {
    title: "Home",
    icon: homeIcon,
  },
  {
    title: "Questions",
    icon: cursorIcon,
  },
  {
    title: "Help",
    icon: shieldIcon,
  },
  {
    title: "Guides",
    icon: shieldIcon,
  },
  {
    title: "Security",
    icon: shieldIcon,
  },
];
