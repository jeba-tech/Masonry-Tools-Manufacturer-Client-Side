import React from 'react';
import tools from '../../images/tools.jpg'
const Banner = () => {
      return (
            <div class="hero min-h-screen bg-base-200">
                  <div class="hero-content flex-col lg:flex-row-reverse">
                        <img src={tools} class="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                              <h1 class="text-5xl font-bold"> Masonry Tools House </h1>
                              <p class="py-6">Arguably the signature tool of masons, there are a few different ones that you need to be aware of. The main trowel is the V-trowel, also known as the square-notch trowel. This tool has two straight sides and another two notched sides. These are designed to dispense mortar around a flat surface at even rates.</p>
                              <button class="btn btn-primary ">Get Started</button>
                        </div>
                  </div>
            </div>
      );
};

export default Banner;