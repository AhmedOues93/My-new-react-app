import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";

import Countries from "../pages/Countries";
import Movies from "../pages/Movies";
import News from "../pages/News";
import Currency from "../pages/Currency";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Countries />} />
          <Route path="movies" element={<Movies />} />
          <Route path="news" element={<News />} />
          <Route path="currency" element={<Currency />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
