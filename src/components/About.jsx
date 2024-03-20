import React from "react";
import banner from "./assets/about-banner.jpg";

function About() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="banner"
              src={banner}
            ></img>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Welcome to Flavour Fusion
            </h1>
            <p className="mb-8 leading-relaxed">
              Our platform is designed for both seasoned chefs and kitchen
              novices alike, providing a user-friendly interface where you can
              search, discover, and explore a wide range of recipes to suit any
              craving or occasion. Whether you're in the mood for a comforting
              classic or an adventurous fusion creation, we've got you covered.
              But Flavour Fusion is more than just a recipe repository; it's a
              community of food enthusiasts coming together to share their love
              of cooking and eating. Connect with fellow foodies, exchange tips
              and tricks, and join in the conversation as we celebrate the joy
              of cooking and the pleasures of good food. So, whether you're
              looking for quick and easy weeknight dinners, impressive dishes to
              impress your guests, or simply seeking inspiration for your next
              culinary masterpiece, Flavour Fusion is your go-to destination for
              all things delicious. Join us on a gastronomic journey and let
              your taste buds explore the world!
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                Explore Dishes
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
