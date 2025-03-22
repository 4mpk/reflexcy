import React, { useState } from "react";
import { FaSort, FaFilter } from "react-icons/fa";
import tem1 from "./assests/images/template1.png";
import tem2 from "../frontend/assests/images/template2.png";
import tem3 from "../frontend/assests/images/template3.png";
import tem6 from "../frontend/assests/images/template6.png";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Categories to display as filter buttons
const categories = [
  "All", // Added "All" to easily show all items
  "Software",
  "Photography",
  "Fashion",
  "Graphic Design",
  "Computer",
];

// Initial projects array with imported images
const initialProjects = [
  {
    id: 1,
    category: "Software",
    img: tem1,
  },
  {
    id: 2,
    category: "Photography",
    img: tem2,
  },
  {
    id: 3,
    category: "Fashion",
    img: tem3,
  },
  {
    id: 6,
    category: "Computer",
    img: tem6,
  },
];

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [projects, setProjects] = useState(initialProjects);
  const [sortAscending, setSortAscending] = useState(true);

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Sort projects by category name
  const handleSort = () => {
    // Sort the *entire* projects array (not just filtered) so the order is preserved
    const sortedProjects = [...projects].sort((a, b) =>
      sortAscending
        ? a.category.localeCompare(b.category)
        : b.category.localeCompare(a.category)
    );
    setProjects(sortedProjects);
    setSortAscending(!sortAscending);
  };

  return (
    <div style={styles.pageContainer}>
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content area */}
      <div style={styles.mainContent}>
        <h2 style={styles.headerText}>
          A design portfolio is how you showcase your work to the world.
        </h2>

        {/* Filter & Sort Buttons */}
        <div style={styles.filterContainer}>
          <button style={styles.sortButton} onClick={handleSort}>
            Sort By <FaSort />
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              style={{
                ...styles.filterButton,
                backgroundColor:
                  selectedCategory === cat ? "#4d7b82" : "#5c9ea6",
              }}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}

          <button style={styles.filterIcon}>
            <FaFilter />
          </button>
        </div>

        {/* Portfolio Grid */}
        <div style={styles.portfolioGrid}>
          {filteredProjects.map((project) => (
            <div key={project.id} style={styles.portfolioItem}>
              <img
                src={project.img}
                alt={project.category}
                style={styles.portfolioImg}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

// Inline styles
const styles = {
  // 1) Flex container that spans the full viewport height
  pageContainer: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  // 2) Main content takes up all remaining space above the footer
  mainContent: {
    flex: 1,
    textAlign: "center",
    padding: "80px",
  },
  headerText: {
    background: "rgba(165, 210, 201, 0.8)",
    padding: "15px",
    borderRadius: "15px",
    fontSize: "35px",
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
    borderColor: "black",
    border: "3px solid",
  },
  filterContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
    marginBottom: "20px",
  },
  filterButton: {
    background: "#5c9ea6",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "0.3s",
  },
  sortButton: {
    background: "#5c9ea6",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "0.3s",
  },
  filterIcon: {
    background: "#5c9ea6",
    color: "white",
    padding: "8px",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "0.3s",
  },
  portfolioGrid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "15px",
  },
  // 3) Make the images smaller
  portfolioItem: {
    width: "200px",
    height: "150px",
    background: "rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(10px)",
    borderRadius: "15px",
    overflow: "hidden",
    transition: "transform 0.3s ease-in-out",
  },
  portfolioImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

export default HomePage;
