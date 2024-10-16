import React from "react";
import Layout from "./components/layout/Layout";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Form from "./components/form/Form";
import Feed from "./components/feed/Feed";
import Posts from "./components/posts/Posts";

function App() {
  return (
    <Layout>
      <Header />
      <Main>
        <Feed>
          <Form /> 
          <Posts />
        </Feed>
      </Main>
    </Layout>
  );
}

export default App;
