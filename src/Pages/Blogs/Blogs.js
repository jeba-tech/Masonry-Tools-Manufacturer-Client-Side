import React from 'react';

const Blogs = () => {
      return (
            <div >
                  <div className='blog'>
                        <h1>1. How will you improve the performance of a React Application?</h1>
                        <p>By avoiding Inline Function Definition in the Render Function.By throttling and Debouncing Event Action in JavaScript.By avoiding using Index as Key for map.To make sure that components receive only necessary props. It will let control the CPU consumption and avoid over-rendering unnecessary features.  </p><br></br>
                        <h1>2. What are the different ways to manage a state in a React application?</h1>
                        <p>There are four main types of state you need to properly manage in your React apps:

                              Local state
                              Global state
                              Server state
                              URL state
                              Using a special method called setState that is inherited from the base Component class to update state .The setState method can take either an object or a function as the first argument.
                        </p><br></br>

                        <h1>3.How does prototypical inheritance work?</h1>
                        <p>Javascript has a feature called prototypal inheritance that allows you to add methods and properties to objects. It is a technique that allows an object to take on the properties and methods of another object. Traditionally, we utilize Object. getPrototypeOf and Object to obtain and modify an object's.</p><br></br>
                        <h1>5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                        <div>
                              {/* 
                              <code>function isOutOfBoundPriceRange(item) {
  const {minPrice, maxPrice} = this;
                                    const price = parseFloat(item.price);
                                    return (price < parseFloat(minPrice)) || (price > parseFloat(maxPrice));
}

                                    function isMatchingItem({type: key, value }, item) {
  return item[key] === value;
}
                                    function collectNonMatchingItem({filters = [], result = []}, item) {
  if (
    !filters.some(filter => isMatchingItem(filter, item))
                                    ) {
                                          result.push(item);
  }
                                    return {filters, result};
}

                                    const uniqueProducts = [
                                    {category: 'cellphone', price: '19', manufacturer: 'nokia', production_date: '2020/05/30' },
                                    {category: 'radio', price: '50', manufacturer: 'sony', production_date: '2020/05/30' },
                                    {category: 'radio', price: '70', manufacturer: 'philips', production_date: '2020/05/30' },
                                    {category: 'tv', price: '500', manufacturer: 'sony', production_date: '2020/05/30' },
                                    {category: 'tv', price: '650', manufacturer: 'philips', production_date: '2020/05/30' },
                                    {category: 'console', price: '900', manufacturer: 'sony', production_date: '2020/05/30' },
                                    {category: 'console', price: '700', manufacturer: 'nintendo', production_date: '2020/05/30' },
                                    ];
                                    const selectedFilters = [
                                    {type: 'manufacturer', value: 'sony', status: true },
                                    {type: 'category', value: 'radio', status: true },
                                    ];
                                    const  priceFilter = {
                                          minPrice: 20,
                                    maxPrice: 650,
};

                                    const result = uniqueProducts.reduce(collectNonMatchingItem, {

                                          filters: selectedFilters,
                                    result: [],

}).result.filter(isOutOfBoundPriceRange, priceFilter);

                                    console.log({priceFilter, result});</code> */}
                        </div>
                        <h1>6.What is a unit test? Why should write unit tests?</h1>
                        <p>Unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p><br></br>
                  </div>
            </div>
      );
};

export default Blogs;