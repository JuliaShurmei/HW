import { Navigate } from "react-router-dom";
import { useAuth } from "./authProvider";

interface CheckAuthProps {
  children: JSX.Element;
}

export const CheckAuth = ({ children }: CheckAuthProps) => {
  const authInfo = useAuth();
  console.log("CHECK AUTH", authInfo);

  if (!authInfo.user) {
    return (
      <div>
        <Navigate to="/login" />
      </div>
    );
  }

  return children;
};