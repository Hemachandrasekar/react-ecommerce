import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const Container = styled.div``;

const Wrapper = styled.div``;

const ImgContainer = styled.div``;

const Image = styled.img``;

const InfoContainer = styled.div``;

const Title = styled.h1``;

const Desc = styled.p``;

const Price = styled.span``;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="" />
        </ImgContainer>
        <InfoContainer>
          <Title>Dium Juitset</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nisl quam, imperdiet ac ligula non, tincidunt feugiat eros. Proin a
            efficitur nisl, eu accumsan nulla. Aenean quam risus, ullamcorper
            quis nisi vitae, ornare varius velit. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae; Fusce
            orci augue, posuere et vehicula vitae, finibus quis mauris.
            Vestibulum accumsan nulla eget massa semper sodales.
          </Desc>
          <Price> $ 20</Price>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
