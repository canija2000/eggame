import { useQuery } from "@tanstack/react-query";
import Champion from "./components/Champion";
import { Box, Skeleton } from "@mui/material";

function App() {
  const {
    data: characterData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["character"],
    queryFn: async () => {
      const response = await fetch("/api/characters/random/");
      console.log(response);
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <Box>
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />
      </Box>
    );
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  const { name, image_url, egg } = characterData;
  console.log(characterData);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <Champion name={name} image={image_url} egg={egg} />
    </Box>
  );
}

export default App;
