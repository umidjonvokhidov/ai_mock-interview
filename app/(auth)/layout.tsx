import React, { ReactNode } from "react";
import { Toaster } from "sonner";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="auth-layout">
      {children}
      <Toaster />
    </div>
  );
};

export default AuthLayout;
