// 3) შექმენით StyleObjectContainer და StyleObjectView კომპონენტები.
//    Container კომპონენტში აღწერეთ რამდენიმე style ობიექტი (მაგ: titleStyle, boxStyle).
//    props-ით გადასცით ისინი View კომპონენტს.
//    StyleObjectView-ში:
//    - გამოიყენეთ სხვადასხვა style ობიექტი სხვადასხვა ელემენტზე
//    - არ გამოიყენოთ className
import StyleObjectView from "./StyleObjectContainer";

export default function StyleObjectContainer() {
  const titleStyle = {
    color: 'darkblue',
    textAlign: 'center',
    marginBottom: '20px'
  };
  const boxStyle = {
    backgroundColor: 'lightgray',
    padding: '15px',
    borderRadius: '5px'
  };
  return (
    <StyleObjectView titleStyle={titleStyle} boxStyle={boxStyle} />
  )
}