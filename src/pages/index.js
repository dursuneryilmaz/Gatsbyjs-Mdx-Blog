import React from "react";
import { Container, FeatureImage, Content, ContentCard } from "../components";

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard
          date="11.11.2020"
          title="Test Blog"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim libero nunc, vitae congue turpis fermentum quis. Etiam arcu ex, semper a accumsan nec, hendrerit et metus. Nullam "
          slug="/test"
        />
      </Content>
    </Container>
  );
};

export default IndexPage;
