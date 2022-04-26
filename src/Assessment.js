import Card from "./Card";
function Assessment(props) {
  return (
    <div
      style={{ width: props.width, height: props.height }}
      className="flex items-center justify-center"
    >
      {/* <span className="font-bold">Your code here 🥳</span> */}
      <Card width={800} height={300} />
    </div>
  );
}

export default Assessment;
