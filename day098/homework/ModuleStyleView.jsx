// 4) შექმენით ModuleStyleContainer და ModuleStyleView კომპონენტები.
//    შექმენით CSS Module ფაილი (მაგ: Card.module.css).
//    ModuleStyleView-ში გამოიყენეთ className={styles.className}.
//    Container კომპონენტში არ უნდა იყოს styling ლოგიკა.
//    View კომპონენტში უნდა იყოს:
//    - სათაური
//    - ტექსტი
//    - ღილაკიimpoo
import ModuleStyleView from "./ModuleStyleContainer";
    import styles from './Card.module.css';

function ModuleStyleContainer() { 
    return (
        <ModuleStyleView styles={styles} />)}