import React, { useState } from 'react';
import './App.css';
import ArrayData from './data';
import Cards from './Components/Cards';
import SearchBar from './Components/SearchBar';
import Pagination from './Components/Pagination';

function App() {
  const [cars, setCars] = useState(ArrayData); // Use setCars to manage data
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  // Function to filter data based on search query
  const handleSearch = (query) => {
    const filteredCars = ArrayData.filter((car) =>
      car.name.toLowerCase().includes(query.toLowerCase())
    );
    setCurrentPage(1); // Reset to the first page when searching
    setCars(filteredCars); // Update the cars state with filtered data
  };

  // Calculate indexes for pagination
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  // Calculate total pages for pagination
  const totalPages = Math.ceil(cars.length / carsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-blue-100 ">
      <SearchBar onSearch={handleSearch} />
      <Cards ArrayData={currentCars} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
