import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  max-width: 500px;

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

  .TableWrapper {
    margin-top: 15px;

    width: 100%;
    max-height: 500px;

    overflow-y: auto;
  }

  .Table {
    display: table;

    width: 100%;
  }

  .TableHead {
    display: table-row;

    .TableCell {
      position: sticky;
      top: 0;

      background: white;
    }
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
