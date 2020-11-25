import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  max-width: 500px;
  max-heigh: 500px;

  input {
    text-align: center;
  }

  .IdField {
    width: 50px;

    margin-left: 10px;
    margin-right: 10px;
  }

  .NameField {
    width: 120px;

    margin-left: 10px;
    margin-right: 10px;
  }

  .UnitsField {
    width: 120px;

    margin-left: 10px;
    margin-right: 10px;
  }

  .Table {
    display: table;
    width: 100%;

    margin-top: 15px;
  }

  .TableRow {
    display: table-row;
  }

  .TableCell {
    display: table-cell;
  }

  .FootMessage {
    margin-top: 15px;

    i {
      cursor: default;
    }
  }
`;
