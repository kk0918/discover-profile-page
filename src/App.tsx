import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ModalProvider } from "styled-react-modal";
import Header from "./components/Header";
import DiscoverProfiles from "./components/DiscoverProfiles";
import ProfileDisplay from "./components/ProfileDisplay";
import NotFound from "./components/NotFound";

export default function App() {
  const queryClient = new QueryClient();

  const [category, setCategory] = useState("All");
  const categories = ["All", "Influencer", "Writer", "Athlete", "Musician"];

  function handleCategoryChange(category: string) {
    setCategory(category);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Header />
              <DiscoverProfiles
                category={category}
                categories={categories}
                handleCategoryChange={handleCategoryChange}
              />
            </Route>
            <Route path="/page/:slugName">
              <ProfileDisplay />
            </Route>
            <Route>
              <NotFound text={"Page"} />
            </Route>
          </Switch>
        </Router>
      </ModalProvider>
    </QueryClientProvider>
  );
}
