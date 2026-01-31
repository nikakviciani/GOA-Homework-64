// 5) შექმენით StylesheetContainer და StylesheetView კომპონენტები.
//    გამოიყენეთ ჩვეულებრივი CSS ფაილი (styles.css).
//    StylesheetView-ში გამოიყენეთ className.
//    Container კომპონენტში მხოლოდ მონაცემები და ლოგიკა უნდა იყოს.
//    View კომპონენტში:
//    - მინიმუმ ორი განსხვავებული styled ელემენტი

import React from 'react';

export default function StylesheetView() {                                              
    return (
        <div>              
            <h1 className="header">This is StylesheetView Component</h1>
            <p className="paragraph">
                This paragraph is styled using an external stylesheet.
            </p>
        </div>
    );
}