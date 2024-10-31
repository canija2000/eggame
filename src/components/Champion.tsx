import { Card, CardMedia, CardContent, CardActions } from "@mui/material";
import Button from "@mui/material/Button";

interface ChampionProps {
  name: string | undefined;
  image: string | undefined;
  egg: boolean | undefined;
}

export default function Champion({ name, image, egg }: ChampionProps) {
  let disabled = egg ? false : true;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" image={image} />
      <CardContent>
        <h2>{name}</h2>
        <p>{egg ? "Egg" : "No Egg :c"}</p>
      </CardContent>
      <CardActions>
        <Button disabled={disabled} color="primary">
          Register your discovery!
        </Button>
      </CardActions>
    </Card>
  );
}
