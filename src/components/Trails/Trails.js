import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TrailCard from "../Cards/TrailCard";

import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    trailWrapper: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
  })
);

export default function Trails() {
  const classes = useStyles();
  const trails = [
    { title: "Trail 1", description: "Description about Trail 1..." },
    { title: "Trail 2", description: "Description about Trail 2..." },
    { title: "Trail 3", description: "Description about Trail 3..." },
    { title: "Trail 4", description: "Description about Trail 4..." },
    { title: "Trail 5", description: "Description about Trail 5..." },
    { title: "Trail 6", description: "Description about Trail 6..." },
    { title: "Trail 7", description: "Description about Trail 7..." },
  ];
  return (
    <>
      <Typography component={"h2"} variant={"h2"}>
        Trails
      </Typography>
      <Box className={classes.trailWrapper}>
        {trails.map((trail) => (
          <TrailCard title={trail.title} description={trail.description} />
        ))}
      </Box>
    </>
  );
}
