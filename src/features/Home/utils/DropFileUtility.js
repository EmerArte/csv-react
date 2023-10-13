export const getColor = (props) => {
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isFocused) {
    return "#F3F3F3";
  }
  return "white";
};
