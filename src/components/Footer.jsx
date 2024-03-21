import React from "react";

function Footer() {
  return (
    <>
      <footer class="text-gray-600 body-font bg-yellow-200">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            
            <span class="ml-3 mr-14 text-xl font-bold">FlavourFusion</span>
          </a>
          <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Devarshee Gaunekar —
            <a
              href="https://twitter.com/devarsheecodess"
              class="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @devarsheecodess
            </a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              className="ml-3 text-gray-500 cursor-pointer text-2xl"
              href="https://github.com/devarsheecodess"
              target="_blank"
            >
              <i class="fa-brands fa-github"></i>
            </a>

            <a
              class="ml-3 text-gray-500 text-2xl"
              href="https://twitter.com/devarsheecodess"
              target="_blank"
            >
              <i class="fa-brands fa-x-twitter"></i>
            </a>

            <a
              class="ml-3 text-gray-500 text-2xl"
              href="https://instagram.com/devarsheegaunekar"
              target="_blank"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>

            <a
              class="ml-3 text-gray-500 text-2xl"
              href="https://www.linkedin.com/in/devarshee-gaunekar-a06441257/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
