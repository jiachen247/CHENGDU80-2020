import React, { useEffect, useRef } from "react";
import { DataSet, Network } from "vis-network/standalone/esm/vis-network";
import correlation from "../data/correlation";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import companies from "../data/companies";
import { getCompany, getCompanyName } from "../services/companyService";

function componentToHex(c) {
  var hex = Math.round(c).toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const CorrelationNetworkGraph = ({ ticker }) => {
  // A reference to the div rendered by this component
  const domNode = useRef(null);

  // A reference to the vis network instance
  const network = useRef(null);
  ticker = ticker.toUpperCase();
  const corr = correlation[ticker];
  // An array of nodes

  const mapping = { [ticker]: 0 };
  let edges = [];

  let srcColor = "#D1ADF5";
  let nodeId = 1;
  let nodes = [
    { id: 0, label: ticker, color: srcColor, title: getCompanyName(ticker) },
  ];

  for (let neig of corr) {
    let corrValue = neig[0];
    let ntick = neig[1].toUpperCase();

    if (ntick in mapping) {
      continue;
    }

    mapping[ntick] = nodeId;
    nodes.push({
      id: nodeId,
      label: ntick,
      color: rgbToHex(100, 105 + 150 * corrValue, 150),
      title: getCompanyName(ntick),
    });
    edges.push({ to: nodeId, from: 0, label: corrValue.toString() });
    nodeId += 1;
  }

  for (let neig of corr) {
    let parent = neig[1].toUpperCase();
    let parentId = mapping[parent];

    for (let neig of correlation[parent]) {
      let corrValue = neig[0];
      let ntick = neig[1];

      if (ntick in mapping) {
        edges.push({
          to: parentId,
          from: mapping[ntick],
          label: corrValue.toString(),
        });
      } else {
        mapping[ntick] = nodeId;
        nodes.push({
          id: nodeId,
          label: ntick,
          color: rgbToHex(155 + 100 * corrValue, 80, 80),
          title: getCompanyName(ntick),
        });
        edges.push({ to: parentId, from: nodeId, label: corrValue.toString() });
        nodeId += 1;
      }
    }
  }

  // const nodes = new DataSet([{id: 0, label: ticker, color: "#D2E5FF"}]
  //     .concat(appl.map(function(v, i){
  //     mapping[v[1]] = i + 1;
  //     console.log(rgbToHex(255, 0, 0, v[0]))
  //     return {id: i + 1, label: v[1], title: getCompanyName(v[1]), color: rgbToHex(0, 105 + 150 * v[0], 0)}
  // })));
  //
  // // An array of edges
  // const edges = new DataSet(appl.map(function(v) {
  //     return {to: 0, from: mapping[v[1]], label: v[0].toString()}
  // }));

  const data = {
    nodes: new DataSet(nodes),
    edges: new DataSet(edges),
  };

  const options = {
    height: "600px",
    width: "600px",
    physics: {
      stabilization: {
        enabled: true,
        iterations: 5000,
        fit: true,
      },
      repulsion: {
        nodeDistance: 100000,
      },
    },
    nodes: {
      borderWidth: 4,
      borderWidthSelected: 1,
      opacity: 0.8,
      font: {
        size: 24,
      },
      shadow: {
        enabled: true,
      },
      shape: "circle",
      shapeProperties: {
        borderRadius: 13,
      },
      size: 37,
    },
    edges: {
      selfReferenceSize: null,
      selfReference: {
        angle: 0.7853981633974483,
      },
      smooth: {
        forceDirection: "none",
        roundness: 0.8,
      },
    },
    interaction: {
      dragView: true,
      hover: true,
      zoomSpeed: 0.4,
    },
    physics: {
      springLength: 195,
      springConstant: 0.395,
      avoidOverlap: 0.41,
    },
  };

  useEffect(() => {
    network.current = new Network(domNode.current, data, options);
    network.current.setSize("100%", "100%");
    network.current.fit({ minZoomLevel: 5, maxZoomLevel: 10, animation: true });
  }, [domNode, network, data, options]);

  return (
    <div style={{ padding: "10px" }}>
      <Paper style={{ minWidth: "600px" }}>
        <Typography
          style={{
            padding: "20px",
            textAlign: "left",
            fontWeight: 700,
            color: "#714C9C",
          }}
          variant="h5"
          color="default"
        >
          Most Correlated Companies
        </Typography>
        <div ref={domNode} />
      </Paper>
    </div>
  );
};

export default CorrelationNetworkGraph;
