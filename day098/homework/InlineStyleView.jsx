// 2) შექმენით InlineStyleContainer და InlineStyleView კომპონენტები.
//    InlineStyleContainer-ში შექმენით style ობიექტი JavaScript-ში.
//    ეს style props-ით გადასცით InlineStyleView-ს.
//    InlineStyleView-ში გამოიყენეთ inline styling:
//    - div ელემენტზე backgroundColor და padding
//    - ტექსტი გამოჩნდეს ცენტრში
import InlineStyleView from './InlineStyleView'

export default function InlineStyleContainer() {
  const style = {
    backgroundColor: 'lightblue',
    padding: '20px',
  }
  return (
    <InlineStyleView style={style} />
  )
}