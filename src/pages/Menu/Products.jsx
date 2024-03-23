import { useState } from "react";
import { coffee } from "../../apis/mock-data";
import CardProductItem from "../../components/Products/CardProductItem";

const Products = () => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceRangeFilter, setPriceRangeFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");

  const filterProjects = (project) => {
    if (categoryFilter && project.category !== categoryFilter) {
      return false;
    }
    if (priceRangeFilter) {
      const [min, max] = priceRangeFilter.split("-");
      if (min && parseInt(project.price) < parseInt(min)) {
        return false;
      }
      if (max && parseInt(project.price) > parseInt(max)) {
        return false;
      }
    }
    return true;
  };

  const sortProjects = (projects) => {
    return projects.sort((a, b) => {
      if (sortOrder === "asc") {
        return parseInt(a.price) - parseInt(b.price);
      } else {
        return parseInt(b.price) - parseInt(a.price);
      }
    });
  };

  const filteredAndSortedProjects = sortProjects(
    coffee.filter(filterProjects)
  );

  const handleReset = () => {
    setCategoryFilter("");
    setPriceRangeFilter("");
  };

  return (
    <>
      <section className="relative bg-gradient-to-b from-[#fff] to-[#F9F7F2] h-[310px] md:h-[350px]">
        <div className="flex flex-column items-start sm:items-center lg:items-start justify-center absolute top-0 right-0 left-0 bottom-0 w-full max-w-none xl:max-w-screen-2xl sm:max-w-7xl mx-auto">
          <div className="mt-[100px] lg:mt-[180px]">
            <div className="lg:max-w-7xl md:px-8 px-4 sm:mt-0 text-center">
              <h1 className="leading-tight text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-[3rem] text-[#000] max-w-xl lg:max-w-4xl font-RobotoMedium drop-shadow-lg shadow-black">
                Find Products <br className="sm:hidden" />
                Here
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute z-10 left-0 right-0 bg-white top-[70%] md:top-[85%] md:bottom-[-7%] w-[90%] xl:w-[75%] mx-auto shadow-lg flex items-center flex-col lg:flex-row h-fit lg:h-[75px]">
          <div className="text-base px-2 w-full lg:w-[35%] relative border-b border-r border-solid border-[#dddddd] flex items-center h-[50px] lg:h-full">
            <div className="relative w-full">
              <select
                className="outline-none pl-[20px] relative w-full text-left font-RobotoMedium lg:text-[17px] 2xl:text-xl"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="">All Category</option>
                <option value="Coffee">Coffee</option>
                <option value="Tea">Tea</option>
                <option value="Freeze">Freeze</option>
              </select>
            </div>
          </div>
          <div className="text-base px-2 w-full lg:w-[35%] relative flex items-center h-[50px] border-r lg:h-full">
            <div className="relative w-full">
              <select
                className="outline-none pl-[20px] relative w-full text-left font-RobotoMedium lg:text-[17px] 2xl:text-xl"
                value={priceRangeFilter}
                onChange={(e) => setPriceRangeFilter(e.target.value)}
              >
                <option value="">All Price</option>
                <option value="0-30000">Less than 30K</option>
                <option value="30000-50000">30K - 50K</option>
                <option value="51000">More than 50K</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="hover:bg-gray-200 bg-white text-black flex justify-center items-center w-full lg:w-[30%] py-2 lg:py-2.5 h-[50px] lg:h-full"
          >
            <span className="capitalize text-base lg:text-[17px] font-RobotoMedium">
              Reset
            </span>
            <img
              className="w-[15px] h-[15px]"
              src="https://www.gamudaland.com.my/images/icons/reset.svg"
              alt="reset-icon"
            />
          </button>
        </div>
      </section>

      <section className="mt-[200px] mb-[20px] md:mt-[100px] md:mb-[100px] px-4">
        <div className="flex py-5 flex-col sm:flex-row justify-start sm:justify-between items-center lg:w-10/12 mx-auto">
          <div className="font-TitilliumRegular text-[17px] flex w-full justify-center sm:justify-start mb-5 sm:mb-0">
            <div className="w-[30px] h-[30px] mr-3">
              <img
                src="https://www.gamudaland.com.my/_next/image?url=%2Fimages%2Ficons%2Fsearch.png&w=64&q=75"
                alt="search-icon"
              />
            </div>
            <div className="font-RobotoSemibold text-[#b22830]">{filteredAndSortedProjects.length} <span className="text-black font-RobotoMedium">project found</span></div>
          </div>
          <div className="relative inline-block w-full sm:w-64">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="font-RobotoMedium block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="desc">Price high to low</option>
              <option value="asc">Price low to high</option>
            </select>
          </div>
        </div>

        <div className="w-full lg:w-10/12 md:gap-6 flex flex-wrap justify-center m-auto">
          {filteredAndSortedProjects.map((product) => (
            <CardProductItem key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
