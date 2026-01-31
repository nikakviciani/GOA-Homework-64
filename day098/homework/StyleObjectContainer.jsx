// 3) შექმენით StyleObjectContainer და StyleObjectView კომპონენტები.
//    Container კომპონენტში აღწერეთ რამდენიმე style ობიექტი (მაგ: titleStyle, boxStyle).
//    props-ით გადასცით ისინი View კომპონენტს.
//    StyleObjectView-ში:
//    - გამოიყენეთ სხვადასხვა style ობიექტი სხვადასხვა ელემენტზე
//    - არ გამოიყენოთ className
export default function StyleObjectView({ titleStyle, boxStyle }) {
  return (
    <div>
      <h1 style={titleStyle}>This is StyleObjectView Component</h1>
      <div style={boxStyle}>
        This box is styled using boxStyle object
      </div>
    </div>
  )
}