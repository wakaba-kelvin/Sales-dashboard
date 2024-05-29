import { useNavigate } from "react-router-dom";
import { Icons } from "../../assets/icons";
import { SidebarWrap } from "./Sidebar.styles";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarClose } from "../../redux/slices/sidebarSlice";

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    dispatch(setSidebarClose()); // Close sidebar after navigation
  };

  return (
    <SidebarWrap className={`${isSidebarOpen ? "sidebar-open" : ""}`}>
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <span className="brand-logo">
            <img src={Icons.LogoWhite} alt="site brand logo" />
          </span>
          <span className="brand-text">Thanos.</span>
        </div>
        <button
          className="sidebar-close-btn"
          onClick={() => dispatch(setSidebarClose())}
        >
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">
            <li className="menu-item">
              <button
                onClick={() => handleNavigation("/")}
                className="menu-link active"
              >
                <span className="menu-link-icon">
                  <img src={Icons.Chart} alt="" />
                </span>
                <span className="menu-link-text">Dashboard</span>
              </button>
            </li>
            <li className="menu-item">
              <button onClick={() => handleNavigation("/Schools")} className="menu-link">
                <span className="menu-link-icon">
                  <img src={Icons.Graph} alt="" />
                </span>
                <span className="menu-link-text">Schools</span>
              </button>
            </li>
            <li className="menu-item">
              <button onClick={() => handleNavigation("/Invoices")} className="menu-link">
                <span className="menu-link-icon">
                  <img src={Icons.Analytics} alt="" />
                </span>
                <span className="menu-link-text">Invoices</span>
              </button>
            </li>
            <li className="menu-item">
              <button onClick={() => handleNavigation("/")} className="menu-link">
                <span className="menu-link-icon">
                  <img src={Icons.SignOut} alt="" />
                </span>
                <span className="menu-link-text">Sign Out</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </SidebarWrap>
  );
};

export default Sidebar;
