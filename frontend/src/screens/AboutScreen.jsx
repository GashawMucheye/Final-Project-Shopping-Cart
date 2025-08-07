import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

const AboutScreen = () => {
  return (
    <Container className='small-container'>
      <section className='about-us py-2 '>
        <Helmet>
          <title>About Us test</title>
        </Helmet>
        <h1 className='about_heading'>
          <u>About Us</u>
        </h1>
        <hr />
        <p>
          Welcome to Senays - Your Ultimate Home and Kitchen Ecommerce
          Destination!
        </p>
        <p>
          At Senays, we believe that a house becomes a home when it's filled
          with warmth, comfort, and the delightful aromas of delicious meals. We
          are your dedicated partners in transforming every corner of your
          living space into a haven of style and functionality. With an
          unwavering passion for all things related to home and kitchen, we have
          curated an extensive collection that caters to your every need, making
          us your one-stop-shop for all things homeware and kitchenware.
        </p>

        <details>
          <summary className='text-info'>Our Journey:</summary>
          <p>
            Senays was born out of a deep-seated love for creating spaces that
            resonate with your personality and serve your practical
            requirements. Our journey started with a simple idea: to provide a
            platform where homeowners, aspiring chefs, and anyone who cherishes
            their living environment can discover, explore, and acquire
            premium-quality products that enhance their daily lives.
          </p>
        </details>

        <details>
          <summary className='text-info'> What Sets Us Apart:</summary>

          <ul>
            <li>
              Curated Selection: We take pride in offering a thoughtfully
              curated selection of home and kitchen products...
            </li>
            <li>
              Quality Assurance: We understand the significance of durability
              and performance when it comes to home and kitchen essentials...
            </li>
            <li>
              Passionate Experts: Behind the scenes, we have a team of
              passionate experts who are dedicated to staying ahead of the
              latest trends...
            </li>
            <li>
              Customer-Centric Approach: Our customers are at the heart of
              everything we do...
            </li>
            <li>
              Inspiration and Ideas: Beyond just products, Senays is a source of
              inspiration for turning your house into a home...
            </li>
            <li>
              Sustainability: We understand the importance of responsible
              consumption...
            </li>
          </ul>
        </details>

        <details>
          <summary className='text-info'>Join Us in Creating Homes:</summary>
          <p>
            Whether you're revamping your kitchen, adding a touch of elegance to
            your living room...
          </p>
        </details>
        <p>
          Thank you for choosing Senays. Together, let's create homes that
          reflect who we are and bring joy to our everyday lives.
        </p>
      </section>
    </Container>
  );
};

export default AboutScreen;
