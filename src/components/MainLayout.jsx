// src/components/MainLayout.jsx
// import React, { useState } from "react";
// import Sidebar from "./Sidebar";
// import styled from "styled-components";
// import { Outlet } from "react-router-dom";

// const LayoutWrapper = styled.div`
//   display: flex;
// `;

// const Content = styled.div`
//   margin-left: 200px; /* sidebar width */
//   width: calc(100% - 200px);
//   padding: 20px;
// `;

// const MainLayout = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <LayoutWrapper>
//       <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} />
//       <Content>
//         <Outlet />
//       </Content>
//     </LayoutWrapper>
//   );
// };

// export default MainLayout;

// import React from "react";
// import Sidebar from "./Sidebar";
// import { Outlet } from "react-router-dom";
// import styled from "styled-components";

// const LayoutWrapper = styled.div`
//   display: flex;
// `;

// const Content = styled.div`
//   flex-grow: 1;
//   padding: 20px;
//   background-color: white;
// `;

// const MainLayout = () => {
//   return (
//     <LayoutWrapper>
//       <Sidebar />
//       <Content>
//         <Outlet />
//       </Content>
//     </LayoutWrapper>
//   );
// };

// export default MainLayout;

import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px", backgroundColor: "#fff" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;


