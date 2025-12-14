function App() {
  const username = "nika"; 
  return (
    <>
      {username ? (
        <p>Hello {username}</p>
      ) : (
      )}
    </>
  );
}

export default App