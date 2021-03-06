import styled from "styled-components";

const config = require("../../settings/settings.json");

export const Container = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;

  height: 25px;

  background-color: ${config.theme.primary};
  color: ${config.theme.primary_font};

  display: flex;
  align-items: center;

  margin: 0px;
  padding-left: 5px;
`;
