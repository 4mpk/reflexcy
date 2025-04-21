import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaSort,
  FaFilter,
  FaClock,
  FaHistory,
  FaGift,
  FaMoneyBillWave,
} from "react-icons/fa";
import tem1 from "./assests/images/template1.png";
import tem2 from "../frontend/assests/images/template2.png";
import tem3 from "../frontend/assests/images/template3.png";
import tem4 from "../frontend/assests/images/template4.png";
import tem5 from "../frontend/assests/images/template6.png";
import tem6 from "../frontend/assests/images/template5.png";
import tem7 from "../frontend/assests/images/template7.png";
import tem8 from "../frontend/assests/images/template8.png";
import tem9 from "../frontend/assests/images/template9.png";
import tem10 from "../frontend/assests/images/template10.png";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const sortOptions = [
  { label: "Newest", icon: <FaClock /> },
  { label: "Oldest", icon: <FaHistory /> },
  { label: "Free", icon: <FaGift /> },
  { label: "Paid", icon: <FaMoneyBillWave /> },
];

const categories = [
  "All",
  "Software",
  "Photography",
  "Fashion",
  "Graphic Design",
  "Computer",
];

const initialProjects = [
  { id: 1, category: "Software", img: tem1, isPaid: false },
  { id: 2, category: "Software", img: tem2, isPaid: true },
  { id: 3, category: "Software", img: tem3, isPaid: false },
  { id: 4, category: "Software", img: tem4, isPaid: true },
  { id: 5, category: "Photography", img: tem10, isPaid: false },
  { id: 6, category: "Photography", img: tem6, isPaid: true },
  { id: 7, category: "Fashion", img: tem7, isPaid: false },
  { id: 8, category: "Fashion", img: tem8, isPaid: true },
  { id: 9, category: "Graphic Design", img: tem1, isPaid: false },
  { id: 10, category: "Graphic Design", img: tem2, isPaid: true },
  { id: 11, category: "Computer", img: tem9, isPaid: false },
  { id: 12, category: "Computer", img: tem10, isPaid: true },
];

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [projects, setProjects] = useState(initialProjects);
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Sort By");

  const handleSortSelection = (option) => {
    setSelectedSort(option.label);
    setIsSortMenuOpen(false);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filter by category
  let filteredProjects =
    selectedCategory === "All"
      ? [...projects]
      : projects.filter((p) => p.category === selectedCategory);

  // Apply sorting logic
  if (selectedSort === "Newest") {
    filteredProjects = filteredProjects.sort((a, b) => b.id - a.id).slice(0, 3);
  } else if (selectedSort === "Oldest") {
    filteredProjects = filteredProjects.sort((a, b) => a.id - b.id).slice(0, 3);
  } else if (selectedSort === "Free") {
    filteredProjects = filteredProjects.filter((p) => !p.isPaid).slice(0, 3);
  } else if (selectedSort === "Paid") {
    filteredProjects = filteredProjects.filter((p) => p.isPaid).slice(0, 3);
  }

  return (
    <motion.div
      style={styles.pageContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navbar />

      <motion.div
        style={styles.mainContent}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          style={styles.headerText}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          A design portfolio is how you showcase your work to the world.
        </motion.h2>

        <motion.div
          style={styles.filterContainer}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {/* Sort Dropdown */}
          <div
            className="sort-dropdown-container"
            style={styles.sortDropdownContainer}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={styles.sortButton}
              onClick={() => setIsSortMenuOpen(!isSortMenuOpen)}
            >
              {selectedSort} <FaSort />
            </motion.button>

            {isSortMenuOpen && (
              <motion.ul
                style={styles.sortDropdown}
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                {sortOptions.map((option) => (
                  <motion.li
                    key={option.label}
                    style={styles.sortOption}
                    whileHover={{ backgroundColor: "#3a7d82", scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSortSelection(option)}
                  >
                    {option.icon} {option.label}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </div>

          {/* Category Filter Buttons */}
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                ...styles.filterButton,
                backgroundColor:
                  selectedCategory === cat ? "#3a7d82" : "#5c9ea6",
              }}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </motion.button>
          ))}

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={styles.filterIcon}
          >
            <FaFilter />
          </motion.button>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          style={styles.portfolioGrid}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              style={styles.portfolioItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <motion.img
                src={project.img}
                alt={project.category}
                style={styles.portfolioImg}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <Footer />
    </motion.div>
  );
};

const styles = {
  pageContainer: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  mainContent: { flex: 1, textAlign: "center", padding: "100px" },
  headerText: {
    background: "rgba(165, 210, 201, 0.8)",
    padding: "15px 30px",
    borderRadius: "15px",
    fontSize: "40px",
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "30px",
    border: "3px solid black",
    display: "inline-block",
  },
  filterContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "30px",
  },
  sortDropdownContainer: {
    position: "relative",
    display: "inline-block",
    zIndex: 200,
  },
  sortButton: {
    background: "#3a7d82",
    color: "white",
    border: "none",
    padding: "12px 20px",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "18px",
  },
  sortDropdown: {
    position: "absolute",
    top: "110%",
    left: "0",
    background: "rgba(58, 125, 130, 0.9)",
    backdropFilter: "blur(10px)",
    borderRadius: "10px",
    padding: "10px 0",
    minWidth: "160px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    zIndex: 300,
    listStyle: "none",
  },
  sortOption: {
    padding: "12px",
    cursor: "pointer",
    color: "white",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  filterButton: {
    background: "#5c9ea6",
    color: "white",
    border: "none",
    padding: "12px 20px",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "18px",
  },
  filterIcon: {
    background: "#5c9ea6",
    color: "white",
    padding: "12px",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "20px",
  },
  portfolioGrid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
  portfolioItem: {
    width: "300px",
    height: "225px",
    borderRadius: "20px",
    overflow: "hidden",
  },
  portfolioImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease, transform 0.3s ease",
  },
};

export default HomePage;
