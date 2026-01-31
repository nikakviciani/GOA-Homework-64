// 4) შექმენით ModuleStyleContainer და ModuleStyleView კომპონენტები.
//    შექმენით CSS Module ფაილი (მაგ: Card.module.css).
//    ModuleStyleView-ში გამოიყენეთ className={styles.className}.
//    Container კომპონენტში არ უნდა იყოს styling ლოგიკა.
//    View კომპონენტში უნდა იყოს:
//    - სათაური
//    - ტექსტი
//    - ღილაკი
export default function ModuleStyleView({ styles }) {
  return (
    <div>
      <h1 className={styles.title}>Module Style Component</h1>
      <p className={styles.text}>This is a paragraph styled using CSS Modules.</p>
      <button className={styles.button}>Click Me</button>
    </div>
  )
}