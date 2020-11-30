import { React } from "react";

import { Container, ChartSlot } from "./styles";

export default function DashboardLayout() {
  const layouts = [
    { id: 1, cols: 1, rows: 1, charts: [{ id: 1, colSpan: 1 }] },
    {
      id: 2,
      cols: 2,
      rows: 2,
      charts: [
        { id: 1, colSpan: 1 },
        { id: 2, colSpan: 1 },
        { id: 3, colSpan: 1 },
        { id: 4, colSpan: 1 },
      ],
    },
    {
      id: 3,
      cols: 2,
      rows: 2,
      charts: [
        { id: 1, colSpan: 1 },
        { id: 2, colSpan: 1 },
        { id: 3, colSpan: 2 },
      ],
    },
    {
      id: 4,
      cols: 3,
      rows: 3,
      charts: [
        { id: 1, colSpan: 2 },
        { id: 2, colSpan: 1 },
        { id: 3, colSpan: 1 },
        { id: 4, colSpan: 2 },
        { id: 5, colSpan: 3 },
      ],
    },
    {
      id: 5,
      cols: 3,
      rows: 3,
      charts: [
        { id: 1, colSpan: 1 },
        { id: 2, colSpan: 1 },
        { id: 3, colSpan: 1 },
        { id: 4, colSpan: 1 },
        { id: 5, colSpan: 1 },
        { id: 6, colSpan: 1 },
        { id: 7, colSpan: 1 },
        { id: 8, colSpan: 1 },
        { id: 9, colSpan: 1 },
      ],
    },
    {
      id: 6,
      cols: 1,
      rows: 2,
      charts: [
        { id: 1, colSpan: 1 },
        { id: 2, colSpan: 1 },
      ],
    },
    {
      id: 7,
      cols: 2,
      rows: 2,
      charts: [
        { id: 1, colSpan: 2 },
        { id: 2, colSpan: 1 },
        { id: 3, colSpan: 1 },
      ],
    },
  ];

  const renderLayouts = () => {
    return (
      <div className="Layouts">
        {layouts.map((layout) => (
          <div className="LayoutComponent" key={layout.id}>
            {layout.charts.map((chart) => (
              <ChartSlot
                key={chart.id}
                width={(chart.colSpan * 100) / layout.cols + "%"}
                height={100 / layout.rows + "%"}
              >
                <div className="SlotGrid"></div>
              </ChartSlot>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <Container>
      <h1>Select Dashboard Layout</h1>
      <label>Instructions</label>
      <div className="Panel">
        <div className="PanelRow">
          <div className="GroupsPanel">
            <div>Group #1</div>
            <div>Group #2</div>
            <div>Group #3</div>
            <div>Group #4</div>
          </div>
          <div className="LayoutsPanel">{renderLayouts()}</div>
        </div>
      </div>
    </Container>
  );
}
