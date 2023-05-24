import { Component } from "react";
import { BrowserRouter,Routes, Route,Link } from "react-router-dom";
import Home from "./Home";
import Posts from "./Posts";
import Profile from "./Profile";
import PostDetails from "./PostDetails";
import Forms from "./Forms";

class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Fixed navbar
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/posts">
                    posts
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/forms">
                    Forms
                  </Link>
                </li>
              </ul>
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/forms" element={<Forms />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/post/:topic" element={<PostDetails/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Routing;
