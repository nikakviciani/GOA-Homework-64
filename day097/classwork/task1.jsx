// როცა usseffect ში ვამატებთ addiventListener-ს, აუცილებელია რომ კომპონენტის განადგურებისას (unmount) ამოიღოთ ის, რათა თავიდან ავიცილოთ მეხსიერების გაჟონვა და გაუთვალისწინებელი ქცევები.
// ამისათვის, useEffect-ის დაბრუნების ფუნქციაში უნდა დავწეროთ removeEventListener.
// useEffect(() => {
//   window.addEventListener('resize', handleResize);
//  return () => {
//    window.removeEventListener('resize', handleResize);
//  };
// }, []);