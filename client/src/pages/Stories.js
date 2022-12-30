import React from "react";
import Header from "../components/Header";
import MainSection from "../components/MainSection";
import Title from "../components/Title";
import Cards from "../components/Cards";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Contacts from "../components/Contacts";
import Menu from "../components/Menu";
import Support from "../components/Support";
import Logo from "../components/Logo";
import Page from "../components/Page";

const Stories = () => {
  return (
    <>
      <Page>
        <Header solid>
          <Menu mix="header"></Menu>
          <Logo component="header"></Logo>
          <Support></Support>
        </Header>
        <MainSection>
          <Title
            text="Истории, рассказанные городом и пропитанные историей в 241 год"
            page="stories"
          ></Title>
          <Cards>
            <Card
              title="Новостройки Подольска"
              text="Как за несколько лет поменялся ландшафт города"
              image="url(/images/newhouse.jpeg)"
              link="/https://doka.guide/css/adding-styles/"
              component="content"
            ></Card>
            <Card
              title="Новостройки Подольска"
              text="Как за несколько лет поменялся ландшафт города"
              image="url(/images/newhouse.jpeg)"
              link="/https://doka.guide/css/adding-styles/"
              component="content"
            ></Card>
            <Card
              title="Новостройки Подольска"
              text="Как за несколько лет поменялся ландшафт города"
              image="url(/images/newhouse.jpeg)"
              link="/https://doka.guide/css/adding-styles/"
              component="content"
            ></Card>
            <Card
              title="Новостройки Подольска"
              text="Как за несколько лет поменялся ландшафт города"
              image="url(/images/newhouse.jpeg)"
              link="/https://doka.guide/css/adding-styles/"
              component="content"
            ></Card>
            <Card
              title="Новостройки Подольска"
              text="Как за несколько лет поменялся ландшафт города"
              image="url(/images/newhouse.jpeg)"
              link="/https://doka.guide/css/adding-styles/"
              component="content"
            ></Card>
            <Card
              title="Новостройки Подольска"
              text="Как за несколько лет поменялся ландшафт города"
              image="url(/images/newhouse.jpeg)"
              link="/https://doka.guide/css/adding-styles/"
              component="content"
            ></Card>
          </Cards>
        </MainSection>
        <Footer>
          <Contacts></Contacts>
        </Footer>
      </Page>
    </>
  );
};

export default Stories;
