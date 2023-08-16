import WorldMap from "react-svg-worldmap";

function Map() {
  const data = [
    { country: "cn", value: 1389618778 }
  ];

  return (
    <div className="App">
      <WorldMap
        color="red"
        title="Top 10 Populous Countries"
        value-suffix="people"
        size="xxl"
        data={data}
        backgroundColor="black"
        borderColor="white"
      />
    </div>
  );
}

export default Map;