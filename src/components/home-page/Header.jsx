import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUserProfile, userLogout } from "../../redux/actions/userAction";
import { useCallback, useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const user = useSelector((state) => state.users.user);

  // const user = useRef(null);
  const fetchUserProfile = useCallback(async () => {
    await dispatch(getUserProfile());

    // console.log(response);
    // user.current = response;
    // console.log(user.current);
  }, [dispatch]);

  useEffect(() => {
    fetchUserProfile();
  }, [fetchUserProfile]);

  const handleLogout = (e) => {
    e.preventDefault();
    console.log("Logout button clicked");

    // dispatch(userLogout());
    if (window.confirm("Are you sure you want to logout?")) {
      dispatch(userLogout({ email: user.email }));
      console.log("Logout success");
      localStorage.removeItem("token");
      navigateTo("/login", { replace: true });
    } else {
      console.log("Logout failed");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md ">
      <nav className="flex justify-between items-center px-10">
        <Link to="/">
          <img
            src="/src/assets/logo/logo-no-background.svg"
            alt="Patungan Logo"
            className="h-20"
          />
        </Link>
        <div className="flex items-center space-x-4">
          {localStorage.getItem("token") && (
            <>
              <Link
                to="/campaign/create"
                className="px-4 py-2 border border-gray-300 rounded-full"
              >
                Create Campaign
              </Link>
              <button
                onClick={handleLogout}
                className="border px-4 py-2 rounded-md max-w-40 truncate"
              >
                {user.email && (
                  <a href="" className="text-gray-500">
                    {user.email}
                  </a>
                )}
              </button>
            </>
          )}

          {!localStorage.getItem("token") && (
            <>
              <Link
                to="/login"
                className="px-4 py-2 border border-gray-300 rounded-full"
              >
                Log in
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-customBlue text-white rounded-full"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
