import React from "react";

import tshirtImage from "../../assets/tshirt.png";
import SellerInfo from "../SellerInfo";

import {
  Container,
  Row,
  Column,
  Gallery,
  Panel,
  Section,
  Description,
} from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="t-shirt" src={tshirtImage} />
          </Gallery>

          <Info />
        </Column>

        <Column>
          {/* <ProductAction /> */}
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">
          Receba o produto que está esperando ou devolvemos o seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre a garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
      laudantium hic repellat debitis magnam officiis nesciunt nam, saepe quis
      praesentium voluptate dolore architecto rem veniam natus quia esse enim
      animi.
      <br />
      <br />
      Itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, suscipit
      pariatur harum neque deleniti veniam sunt accusantium tenetur quis
      repellat architecto eius, quo aliquid fuga. Pariatur impedit iure maxime
      explicabo?
    </p>
  </Description>
);

export default Product;
