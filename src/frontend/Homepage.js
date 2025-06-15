import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaSort,
  FaFilter,
  FaClock,
  FaHistory,
  FaGift,
  FaMoneyBillWave,
  FaHeart,
} from "react-icons/fa";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import initialProjects from "./InitialProjects";
import ENDPOINTS from "./RequestUrls";

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

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [projects, setProjects] = useState(initialProjects);
  const [favProjectIds, setFavProjectIds] = useState([]);
  const [savedProjectIds, setSavedProjectIds] = useState([]);
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Sort By");
  const [searchText, setSearchText] = useState("");

  const handleSortSelection = (option) => {
    setSelectedSort(option.label);
    setIsSortMenuOpen(false);
  };
  const [favoriteProjectId, setFavoriteProjectId] = useState(0);
  const [shouldMakeFavoriteRequest, setshouldMakeFavoriteRequest] =
    useState(false);
  useEffect(() => {
    if (!shouldMakeFavoriteRequest) return;
    const submitDataForm = async () => {
      try {
        const response = await fetch(
          ENDPOINTS.MakeFavorite + `?templateId=${favoriteProjectId}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
        if (response.ok) {
          window.location.reload();
        } else if (response.status == "401") {
          localStorage.removeItem("access_token");
        } else {
          const data = await response.data();
        }
      } catch (error) {
        console.log(error);
      } finally {
        setshouldMakeFavoriteRequest(false); // reset trigger
      }
    };

    submitDataForm();
  }, [shouldMakeFavoriteRequest, favoriteProjectId]);

  const [savedProjectId, setSaveProjectId] = useState(0);
  const [shouldMakeSaveRequest, setshouldMakeSaveRequest] = useState(false);
  useEffect(() => {
    if (!shouldMakeSaveRequest) return;
    const submitDataForm = async () => {
      try {
        const response = await fetch(
          ENDPOINTS.MakeSave + `?templateId=${savedProjectId}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
        if (response.ok) {
          window.location.reload();
        } else if (response.status == "401") {
          localStorage.removeItem("access_token");
        } else {
          const data = await response.data();
        }
      } catch (error) {
        console.log(error);
      } finally {
        setshouldMakeSaveRequest(false); // reset trigger
      }
    };

    submitDataForm();
  }, [shouldMakeSaveRequest, savedProjectId]);

  const handleCartClick = (projectId) => {
    localStorage.setItem("ProjectId", projectId);
    window.location.href = "/DataForm";
  };

  const handleMakeFavoriteRequest = (projectId) => {
    setFavoriteProjectId(projectId);
    setshouldMakeFavoriteRequest(true);
  };

  const handleMakeSaveRequest = (projectId) => {
    setSaveProjectId(projectId);
    setshouldMakeSaveRequest(true);
  };

  let token = localStorage.getItem("access_token");
  useEffect(() => {
    const GetFavorites = async () => {
      try {
        const response = await fetch(ENDPOINTS.FavoriteList, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const items = await response.json();
          const ids = items.map((item) => item.templateId);
          const favoriteProjectIds = initialProjects
            .filter((project) => ids.includes(project.id))
            .map((item) => item.id);
          setFavProjectIds(favoriteProjectIds);
        } else if (response.status == "401") {
          localStorage.removeItem("access_token");
        } else {
          const data = await response.json();
        }
      } catch (error) {}
    };

    GetFavorites();
  }, []);
  useEffect(() => {
    const GetSavedProjects = async () => {
      try {
        const response = await fetch(ENDPOINTS.SavedList, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const items = await response.json();
          const ids = items.map((item) => item.templateId);
          const savedProjectIds = initialProjects
            .filter((project) => ids.includes(project.id))
            .map((item) => item.id);
          setSavedProjectIds(savedProjectIds);
        } else if (response.status == "401") {
          localStorage.removeItem("access_token");
        } else {
          const data = await response.json();
        }
      } catch (error) {}
    };

    GetSavedProjects();
  }, []);
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  // Filter by category

  const handleSearchProjects = (e) => {
    setSearchText(e.target.value);
  };
  let filteredProjects = [...projects];
  if (selectedCategory !== "All" || searchText !== "") {
    if (selectedCategory !== "All") {
      filteredProjects = filteredProjects.filter(
        (p) => p.category === selectedCategory
      );
    }
    if (searchText !== "") {
      filteredProjects = filteredProjects.filter((p) =>
        p.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
      );
    }
  }
  // Apply sorting
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
      <Navbar onChange={handleSearchProjects} />
      {localStorage.getItem("access_token") != null && <Sidebar />}
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

        {/* Sort & Category Filters */}
        <motion.div
          style={styles.filterContainer}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div style={styles.sortDropdownContainer}>
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

        {/* Portfolio Items */}
        <motion.div
          style={styles.portfolioGrid}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project) => (
            <div>
              <motion.div
                key={project.id}
                style={styles.portfolioItem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
              >
                <div style={styles.imageContainer}>
                  <motion.img
                    src={project.img}
                    alt={project.title || "Project"}
                    style={styles.portfolioImg}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => handleCartClick(project.id)}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      backgroundColor: favProjectIds.includes(project.id)
                        ? "#FF6347"
                        : "rgba(0, 0, 0, 0.5)",
                      borderRadius: "50%",
                      padding: "5px 12px",
                      color: "white",
                      fontSize: "24px",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease",
                    }}
                    onClick={() => handleMakeFavoriteRequest(project.id)}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = favProjectIds.includes(
                        project.id
                      )
                        ? "rgba(0, 0, 0, 0.5)"
                        : "#FF6347")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = favProjectIds.includes(
                        project.id
                      )
                        ? "#FF6347"
                        : "rgba(0, 0, 0, 0.5)")
                    }
                  >
                    ♡
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "55px",
                      backgroundColor: savedProjectIds.includes(project.id)
                        ? "#FF6347"
                        : "rgba(0, 0, 0, 0.5)",
                      borderRadius: "50%",
                      padding: "5px 12px",
                      color: "white",
                      fontSize: "24px",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease",
                    }}
                    onClick={() => handleMakeSaveRequest(project.id)}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor =
                        savedProjectIds.includes(project.id)
                          ? "rgba(0, 0, 0, 0.5)"
                          : "#FF6347")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor =
                        savedProjectIds.includes(project.id)
                          ? "#FF6347"
                          : "rgba(0, 0, 0, 0.5)")
                    }
                  >
                    <i class="fas fa-save"></i>
                  </div>
                </div>
              </motion.div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "0px 15px 15px",
                }}
              >
                <span>{project.title}</span>
                <span>{project.isPaid ? project.price : "Free"}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <Footer />
    </motion.div>
  );
};

// 🔧 CSS-in-JS Styles
const styles = {
  pageContainer: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  mainContent: {
    flex: 1,
    textAlign: "center",
    padding: "100px",
  },
  headerText: {
    background: "hsla(168, 33.3%, 73.5%, 0.8)",
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
    flexWrap: "wrap",
  },
  sortDropdownContainer: {
    position: "relative",
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
    left: 0,
    background: "rgba(58, 125, 130, 0.9)",
    backdropFilter: "blur(10px)",
    borderRadius: "10px",
    padding: "10px 0",
    minWidth: "160px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
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
    zIndex: 1,
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
    position: "relative",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  portfolioImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "20px",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    opacity: 0,
    transition: "opacity 0.3s ease-in-out",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    pointerEvents: "none",
    borderRadius: "20px",
  },
  overlayText: {
    padding: "10px",
    textAlign: "center",
  },
  heartIcon: {
    position: "absolute",
    top: "10px",
    right: "10px",
    zIndex: 10,
    cursor: "pointer",
    opacity: 0,
    transition: "opacity 0.3s ease-in-out",
  },
  heartIconStyle: {
    fontSize: "30px",
    color: "#ff4d4d",
  },
};

const overlayHoverStyle = `
  .overlay:hover {
    opacity: 1 !important;
    pointer-events: all;
  }

  .imageContainer:hover .heartIcon {
    opacity: 1;
  }
`;

// Inject style into head
const styleTag = document.createElement("style");
styleTag.textContent = overlayHoverStyle;
document.head.appendChild(styleTag);

export default HomePage;
