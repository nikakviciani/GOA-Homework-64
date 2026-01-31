// 7) შექმენით MixedStylesContainer და MixedStylesView კომპონენტები.
//    გამოიყენეთ ერთ კომპონენტში:
//    - inline style
//    - CSS Module
//    - Tailwind CSS
//    Container-ში არ უნდა იყოს JSX სტილებისთვის.
//    View კომპონენტში მკაფიოდ გამოჩნდეს რომელი სტილი სად გამოიყენება.
import MixedStylesView from "./MixedStylesView";
import styles from './MixedStyles.module.css';
export default function MixedStylesContainer() {
    const inlineStyle = {
        color: 'blue',
        fontSize: '20px',
        margin: '10px 0'
    };}