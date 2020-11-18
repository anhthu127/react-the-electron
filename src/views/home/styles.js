import styled from "styled-components";

export const Content = styled.div`
  text-align: center;

  width: 100%;

  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);

  .Table {
    display: table;
    width: 100%;
    min-height: 350px;
  }

  .Cell {
    display: table-cell;
    max-width: 100px;
  }

  .LoadDashboard {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 80px;
    margin: 5px;
  }

  hr {
    width: 90%;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  input {
    text-align: right;
  }
`;
