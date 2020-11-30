import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  width: 820px;

  .Panel {
    display: table;
    width: 100%;
  }

  .PanelRow {
    display: table-row;
  }

  .GroupsPanel {
    width: 20%;
    display: table-cell;
  }

  .LayoutsPanel {
    width: 80%;
    display: table-cell;
  }

  .Layouts {
    display: flex;
    flex-wrap: wrap;
    justify-content: right;

    max-height: 500px;

    overflow-y: scroll;
  }

  .LayoutComponent {
    width: 200px;
    height: 200px;

    margin: 5px;

    display: flex;
    flex-wrap: wrap;

    border-style: solid;
    border-width: 1px;
    border-color: grey;
    border-radius: 6px;

    :hover {
      background-color: blue;
    }
  }
`;

export const ChartSlot = styled.div`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  .SlotGrid {
    position: absolute;
    height: auto;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    margin: 5px;

    border-style: dashed;
    border-width: 1px;
    border-radius: 6px;
  }
`;
