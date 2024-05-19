import { useQuery } from "@tanstack/react-query";

async function fetchUser() {
  const res = await fetch("/api/user");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
}

const TestPage = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>
        id: {data.id}, {data.title}!
      </h1>
    </div>
  );
};

export default TestPage;
