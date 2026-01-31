// 2) შექმენით InlineStyleContainer და InlineStyleView კომპონენტები.
//    InlineStyleContainer-ში შექმენით style ობიექტი JavaScript-ში.
//    ეს style props-ით გადასცით InlineStyleView-ს.
//    InlineStyleView-ში გამოიყენეთ inline styling:
//    - div ელემენტზე backgroundColor და padding
//    - ტექსტი გამოჩნდეს ცენტრში
export default function InlineStyleView({ style }) {
  return (
    <div style={{ backgroundColor: style.backgroundColor, padding: style.padding, textAlign: 'center' }}>
      This is InlineStyleView component
    </div>
  )
}