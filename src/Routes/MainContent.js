import React from "react";
import { Route, Routes } from "react-router";
import Explorer from "../components/organisms/Explorer/Explorer";
import MyLibrary from "../components/organisms/Mylibrary/Mylibrary";
function MainContent() {
  return (
    <Routes>
      <Route path="/book/enterpreneurship" element={<Explorer />} />
      <Route path="/book/myLibrary" element={<MyLibrary />} />
    </Routes>
  );
}

export default MainContent;
