import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RingLoader } from "react-spinners";

function Details() {
  const { id } = useParams();
  const [dishDetails, setDishDetails] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function fetchDishDetails() {
      try {
        setLoader(true);
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        console.log(data);
        if (data.meals && data.meals.length > 0) {
          setDishDetails(data.meals[0]);
        } else {
          console.log("Dish not found");
          setDishDetails(null);
        }
      } catch (error) {
        console.error(error);
        alert("Please try again");
      } finally {
        setLoader(false);
      }
    }

    fetchDishDetails();
  }, [id]);

  const handleClose = () => {
    window.location.href = "/";
  };

  return (
    <>
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 z-10 bg-red-800 rounded-full w-12 h-12 text-white flex items-center justify-center"
      >
        X
      </button>
      <div>
        {loader ? (
          <div className="flex justify-center bg-white">
            <RingLoader color="#854d0e" loading={loader} size={150} />
          </div>
        ) : (
          dishDetails && (
            <div>
              <h1 className="font-bold ml-5 mt-8 text-3xl text-yellow-800 underline underline-offset-2">
                {dishDetails.strMeal}
              </h1>
              <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto flex flex-wrap items-start">
                  <div className="lg:w-1/2 w-full lg:h-auto h-48 rounded-lg overflow-hidden my-[-25px]">
                    <img
                      alt="feature"
                      className="object-cover object-center h-full w-full"
                      src={
                        dishDetails.strMealThumb ||
                        "https://dummyimage.com/460x500"
                      }
                    />
                  </div>
                  <div className="lg:w-1/2 w-full lg:pl-12 lg:text-left text-center">
                    <div className="flex flex-col mb-10 lg:items-start items-center">
                      <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-800 mb-5 mt-5">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                          Ingredients:
                        </h2>
                        <p className="leading-relaxed text-base">
                          <ul>
                            {Object.keys(dishDetails)
                              .filter(
                                (key) =>
                                  key.startsWith("strIngredient") &&
                                  dishDetails[key]
                              )
                              .map((key, index) => (
                                <li key={index}>
                                  {dishDetails[key]}:{" "}
                                  {dishDetails[`strMeasure${index + 1}`]}
                                </li>
                              ))}
                          </ul>
                        </p>
                      </div>
                      <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-800 mb-5 mt-5">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                          Instructions:
                        </h2>
                        <p className="leading-relaxed text-base">
                          {dishDetails.strInstructions}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-2 mb-10">
                  {dishDetails.strYoutube && (
                    <a
                      href={dishDetails.strYoutube}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="inline-flex text-yellow-100 bg-yellow-800 border-0 py-1 px-4 focus:outline-none hover:bg-yellow-900 rounded">
                        Watch on Youtube
                      </button>
                    </a>
                  )}
                  {dishDetails.strSource && (
                    <a
                      href={dishDetails.strSource}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-800 inline-flex items-center"
                    >
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  )}
                </div>
              </section>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default Details;
