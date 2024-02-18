import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useUser } from "../../lib/context/user";

import Loading from "../../pages/Loading";

const UserProfile = () => {
  const user = useUser();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const logoutHandler = async () => {
    setLoading(true);
    const logouted = await user.logout();
    if (logouted) {
      navigate("/");
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <div className="user-profile-container">
        <p>{user.current.name}</p>
        <p>{user.current.email}</p>
        <div>
          <button
            className="custom-btn custom-btn-sm custom-btn-primary logout-btn"
            onClick={logoutHandler}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
