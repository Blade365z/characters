import styled from "styled-components";
import { Theme } from "@razorpay/blade/components";

export const Wrapper = styled.div(
  ({ theme }: { theme: Theme }) => `
    min-height: 100vh;
    background-color: ${theme.colors.surface.background.level1.lowContrast}
  `
);

export const ChractersContainer = styled.div`
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
  ul {
    margin: 1rem;
    padding: 0;
    list-style: none;
  }
`;

export const ImageWrapper = styled.div(
  ({ imageUrl }: { imageUrl: string }) => `
    background-image: url("${imageUrl}");
    height: 245px;
    border-radius: 4px;
    margin-bottom: 1rem;
`
);