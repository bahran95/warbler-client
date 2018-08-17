import React from "react";
import { Link } from "react-router-dom";
import MessageTimeline from "./MessageTimeline";

const Homepage = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return (
      <div className="home-hero">
        <div className="blur" />
        <div className="hero-info d-flex flex-column justify-content-center align-items-center p-5">
          <h1>
            See what’s happening in <br /> the world right now!
          </h1>
          <h4 className="mt-3">Join Warbler today.</h4>
          <Link to="/signup" className="btn btn-primary mt-3">
            Sign up
          </Link>
          <Link to="/signin" className="btn btn-outline-primary mt-3">
            Log in
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <MessageTimeline
        profileImageUrl={currentUser.user.profileImageUrl}
        username={currentUser.user.username}
      />
    </div>
  );
};

export default Homepage;
