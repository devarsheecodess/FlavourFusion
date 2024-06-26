import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { RingLoader } from "react-spinners";
import HomePic from "./assets/homepageBanner.png";

function Body({ value }) {
  const [dishes, setDishes] = useState([]);
  const [loader, setLoader] = useState(false);

  async function findDish(name) {
    try {
      setLoader(true);
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
      );
      const data = await response.json();
      if (data.meals && data.meals.length > 0) {
        setDishes(data.meals);
        console.log("Dish:", name);
      } else {
        console.log("Not found");
        setDishes([]);
      }
    } catch (error) {
      console.log("Error");
      alert("Please try another dish...");
    } finally {
      setLoader(false);
    }
  }

  useEffect(() => {
    if (value !== "") {
      findDish(value);
    } else {
      setDishes([]);
    }
  }, [value]);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="container mx-auto mb-20 flex-grow">
        {value !== "" ? (
          <>
            <h1 className="text-2xl font-semibold mb-8 text-red-800 ml-7 mr-7 mt-4">
              Search results for: {value}
            </h1>
            {loader ? (
              <div className="flex justify-center">
                <RingLoader color="#854d0e" loading={loader} size={150} />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ml-7 mr-7 mt-4">
                {dishes.length === 0 ? (
                  <p>No dishes found</p>
                ) : (
                  dishes.map((dish, index) => (
                    <section key={index} className="text-gray-600 body-font">
                      <div className="border border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 w-full object-cover object-center"
                          src={dish.strMealThumb}
                          alt="dish"
                        ></img>
                        <div className="p-6">
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 self-center">
                            {dish.strCategory} | {dish.strArea} dish
                          </h2>
                          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                            {dish.strMeal}
                          </h1>
                          <p
                            className="leading-relaxed mb-3"
                            style={{
                              maxHeight: "3rem",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {dish.strInstructions}
                          </p>
                          <div className="flex items-center flex-wrap">
                            <NavLink to={`/details/${dish.idMeal}`}>
                              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">
                                View Recipe
                                <svg
                                  className="w-4 h-4 ml-2"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5l7 7-7 7"></path>
                                </svg>
                              </a>
                            </NavLink>
                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                              <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                              >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                              1.2K
                            </span>
                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                              <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                              >
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                              </svg>
                              6
                            </span>
                          </div>
                        </div>
                      </div>
                    </section>
                  ))
                )}
              </div>
            )}
          </>
        ) : (
          <img src={HomePic} className="mb-[-80px]" alt="homepage-banner"></img>
        )}
      </div>
    </div>
  );
}

export default Body;
