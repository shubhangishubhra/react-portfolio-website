import React from "react";

const Skills = () => {
  return (
    <div name="experience" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="w-full h-full max-w-screen-lg mx-auto p-4">
        <div class="flex items-center justify-center">
          <div class="grid gap-4 sm:grid-cols-12">
            <div class="col-span-12 sm:col-span-3">
              <div class="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                <h3 class="text-3xl font-semibold">Morbi tempor</h3>
               
              </div>
            </div>
            <div class="col-span-12 sm:col-span-9">
              <div class="space-y-6 relative sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 class="text-xl font-semibold tracking-wider">Donec porta enim vel</h3>
                  <time class="text-xs tracking-wider uppercase dark:text-gray-400">Dec 2020</time>
                  <p class="mt-3">
                    Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  </p>
                </div>
                <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 class="text-xl font-semibold tracking-wider">Aliquam sit amet nunc ut</h3>
                  <time class="text-xs tracking-wider uppercase dark:text-gray-400">Jul 2019</time>
                  <p class="mt-3">
                    Morbi vulputate aliquam libero non dictum. Aliquam sit amet nunc ut diam aliquet tincidunt nec nec dui. Donec mollis turpis eget egestas sodales.
                  </p>
                </div>
                <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 class="text-xl font-semibold tracking-wider">Pellentesque habitant morbi</h3>
                  <time class="text-xs tracking-wider uppercase dark:text-gray-400">Jan 2016</time>
                  <p class="mt-3">
                    Suspendisse tincidunt, arcu nec faucibus efficitur, justo velit consectetur nisl, sit amet condimentum lacus orci nec purus. Mauris quis quam suscipit, vehicula felis id, vehicula enim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
