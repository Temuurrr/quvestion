function DropCard() {
  return (
    <div className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-88 px-2 w-screen max-w-md sm:px-0">
      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
          <a
            href="#"
            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
          >
            <svg
              className="flex-shrink-0 h-6 w-6 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <div className="ml-4">
              <p className="text-base font-medium text-gray-900">Help Center</p>
              <p className="mt-1 text-sm text-gray-500">
                Get all of your questions answered in our forums or contact
                support.
              </p>
            </div>
          </a>

          <a
            href="#"
            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
          >
            <svg
              className="flex-shrink-0 h-6 w-6 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <div className="ml-4">
              <p className="text-base font-medium text-gray-900">Guides</p>
              <p className="mt-1 text-sm text-gray-500">
                Learn how to maximize our platform to get the most out of it.
              </p>
            </div>
          </a>

          <a
            href="#"
            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
          >
            <svg
              className="flex-shrink-0 h-6 w-6 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <div className="ml-4">
              <p className="text-base font-medium text-gray-900">Security</p>
              <p className="mt-1 text-sm text-gray-500">
                Understand how we take your privacy seriously.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default DropCard;
