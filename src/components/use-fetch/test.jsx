import useFetch from ".";

export default function UseFetchHookTest() {
  const { data, error, pending, fetchData } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  const handleUseFetch = () => {
    fetchData();
  };

  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {pending ? <h3>Pending ! Please wait</h3> : null}
      {error ? <h3>{error}</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((productItem) => (
            <p key={productItem.id}>{productItem.title}</p>
          ))
        : null}
      <button onClick={handleUseFetch}>Fetch Data</button>
    </div>
  );
}
