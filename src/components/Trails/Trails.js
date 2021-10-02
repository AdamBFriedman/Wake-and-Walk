import { Typography } from "@material-ui/core";
import TrailCard from "../Cards/TrailCard";

export default function Trails() {
  return (
    <>
      <Typography component={"h2"} variant={"h2"}>
        Trails
      </Typography>
      <TrailCard />
    </>
  );
}
