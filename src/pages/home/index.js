import Layout from "../../components/Layout";
import Footer from "../../components/Layout/footer";
import Header from "../../components/Layout/header";

const Home = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto my-16 px-4">
        <HeroComponent />
      </div>
    </Layout>
  );
};
export default Home;

const HeroComponent = () => {
  return (
    <div class="container mx-auto flex flex-col items-center">
      <div class="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
          The Freedom to Create the
          <span class="text-indigo-700">Websites</span>
          You Want
        </h1>
        <p class="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
          A professonal website drives sales. Create a beautiful website to
          impress and engage new customers and establish your business online{" "}
        </p>
      </div>
      <div class="flex justify-center items-center">
        <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">
          Get Started
        </button>
        <button class="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">
          Live Demo
        </button>
      </div>
    </div>
  );
};
