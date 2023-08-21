import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getError } from '../utils';
import { toast } from 'react-toastify';
import axios from 'axios';

const SideBar = ({ sidebarIsOpen, setSidebarIsOpen }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);
  return (
    <div
      className={
        sidebarIsOpen
          ? 'active-nav side-navbar d-flex justify-content-between flex-wrap flex-column'
          : 'side-navbar d-flex justify-content-between flex-wrap flex-column'
      }
    >
      <Nav className="flex-column text-white w-100 p-2">
        <Nav.Item>
          <strong>Categories</strong>
        </Nav.Item>
        {categories.map((category) => (
          <Nav.Item key={category}>
            <Link
              to={`/search?category=${category}`}
              onClick={() => setSidebarIsOpen(false)}
            >
              <Nav.Link className="category_hover">{category}</Nav.Link>
            </Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
};

export default SideBar;
