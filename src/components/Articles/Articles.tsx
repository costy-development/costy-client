import styled from "styled-components";

import { Articles as ArticlesList, Logo } from "@/components/Layouts";

const ArticlesWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
  margin-top: 0rem;

  [data-logo] {
    position: unset;
  }

  .articles-head {
    padding: 0 3rem;
  }
`;

const Articles: React.FC = () => {
  return (
    <ArticlesWrapper>
      <ArticlesList root="client" headChildren={<Logo />} />
    </ArticlesWrapper>
  );
};

export default Articles;
