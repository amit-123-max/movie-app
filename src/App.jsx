// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Subscription from "./components/Subscription";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* <Route path="/subscription" element={<Subscription />} /> */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Subscription from "./components/Subscription";
// import MainLayout from "./components/MainLayout";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route element={<MainLayout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/subscription" element={<Subscription />} />
//           {/* aur bhi pages yahin add karte ja */}
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
// import MainLayout from "./components/MainLayout"; // Make sure this path is correct
// import Home from "./pages/Home";  // Adjust the path if needed
import Subscription from "./components/Subscription";  // Adjust the path if needed
// import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import Home from "./pages/Home";
import ContactUs from "./components/ContactUs";
import Help from "./components/Help";
import AboutUs from "./components/AboutUs";


const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<MainLayout />}> */}
        {/* <Route index element={<Home />} />  Home is the default route */}
        <Route path="subscription" element={<Subscription />} />
        {/* <Route path="/" element={<Welcome />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/main" element={<Home />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/help" element={<Help />} />
        <Route path="/AboutUs" element={<AboutUs />} />




        {/* You can add more routes here */}
      {/* </Route> */}
    </Routes>
  );
};

export default App;  // Don't forget to export
