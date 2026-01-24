import { useState, useEffect } from 'react';


// **პროექტი – Book Library App**

// შექმენით React აპლიკაცია **Book Library App**, რომელიც მომხმარებელს მისცემს საშუალებას მოძებნოს წიგნები ინტერნეტში და დაამატოს ისინი საკუთარ ბიბლიოთეკაში. წიგნების მოძიებისთვის გამოიყენეთ **Google Books API** შემდეგი მისამართით:
// `https://www.googleapis.com/books/v1/volumes?q=${e.target.name.value}`
// მომხმარებლის მიერ ინფუთში შეყვანილი ტექსტი უნდა გადაეცეს `q` პარამეტრს.

// აპლიკაციაში უნდა იყოს:

// * საძიებო ინფუთი და ღილაკი, რომლის დაჭერისას იგზავნება მოთხოვნა API-ზე
// * მოძიებული წიგნების სია (სათაური, ავტორი, სურათი, აღწერა)
// * ღილაკი თითოეულ წიგნზე, რომლითაც ის დაემატება პირად ბიბლიოთეკაში
// * შენახული წიგნების ცალკე სია
// * შესაძლებლობა წიგნის სტატუსის მონიშვნის (read / unread)
// * ყველა შენახული მონაცემი უნდა ინახებოდეს `localStorage`-ში, რათა გვერდის გადატვირთვის შემდეგაც დარჩეს ინფორმაცია

export default function BookLibraryApp() {
    const [searchResults, setSearchResults] = useState([]);
    const [myLibrary, setMyLibrary] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('myLibrary');
        if (saved) setMyLibrary(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
    }, [myLibrary]);

    const handleSearch = async (e) => {
        e.preventDefault();
        const query = e.target.search.value;
        if (!query.trim()) return;

        setLoading(true);
        try {
            const res = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`
            );
            const data = await res.json();
            setSearchResults(data.items || []);
        } catch (err) {
            console.error('Search error:', err);
        }
        setLoading(false);
    };

    const addToLibrary = (book) => {
        const newBook = {
            id: book.id,
            title: book.volumeInfo.title,
            author: book.volumeInfo.authors?.[0] || 'Unknown',
            image: book.volumeInfo.imageLinks?.thumbnail || '',
            description: book.volumeInfo.description || '',
            read: false,
        };
        if (!myLibrary.find((b) => b.id === book.id)) {
            setMyLibrary([...myLibrary, newBook]);
        }
    };

    const toggleReadStatus = (id) => {
        setMyLibrary(
            myLibrary.map((b) => (b.id === id ? { ...b, read: !b.read } : b))
        );
    };

    const removeFromLibrary = (id) => {
        setMyLibrary(myLibrary.filter((b) => b.id !== id));
    };

    return (
        <div className="app">
            <h1>📚 Book Library App</h1>

            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    name="search"
                    placeholder="Search books..."
                    required
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}

            <div className="container">
                <div className="search-results">
                    <h2>Search Results</h2>
                    {searchResults.map((book) => (
                        <div key={book.id} className="book-card">
                            {book.volumeInfo.imageLinks?.thumbnail && (
                                <img src={book.volumeInfo.imageLinks.thumbnail} alt="cover" />
                            )}
                            <div>
                                <h3>{book.volumeInfo.title}</h3>
                                <p>{book.volumeInfo.authors?.[0]}</p>
                                <p>{book.volumeInfo.description?.substring(0, 100)}...</p>
                                <button onClick={() => addToLibrary(book)}>
                                    Add to Library
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="my-library">
                    <h2>My Library ({myLibrary.length})</h2>
                    {myLibrary.map((book) => (
                        <div key={book.id} className={`book-item ${book.read ? 'read' : ''}`}>
                            {book.image && <img src={book.image} alt="cover" />}
                            <div>
                                <h3>{book.title}</h3>
                                <p>{book.author}</p>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={book.read}
                                        onChange={() => toggleReadStatus(book.id)}
                                    />
                                    Read
                                </label>
                                <button onClick={() => removeFromLibrary(book.id)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
