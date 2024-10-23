import React,{useState,useEffect} from "react";
import { useSelector } from "react-redux";
import Layout from "./components/layout/Layout";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Form from "./components/form/Form";
import Feed from "./components/feed/Feed";
import Posts from "./components/posts/Posts";
import SignUp from './components/login/SignUp';

function App() {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    //To-Do
  }, [isAuthenticated]);

  return (
    <>
    {isAuthenticated ?
    (
    <Layout>
      <Header />
      <Main>
        <Feed>
          <Form /> 
          <Posts />
        </Feed>
      </Main>
    </Layout>
    ) : ( 
    <SignUp />
    )}
    </>
  );
}

export default App;
