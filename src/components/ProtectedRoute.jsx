import PropTypes from "prop-types";
import { Navigate } from 'react-router-dom';
import { useGlobalState } from '../context/useGlobalState';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useGlobalState();
  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    // navigate("/")
    return <Navigate to="/signIn" replace />;  }

  // If authenticated, render children
      return children;
}

ProtectedRoute.propTypes = {
    children : PropTypes.node
}
export default ProtectedRoute;
