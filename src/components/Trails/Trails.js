import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TrailCard from "../Cards/TrailCard";
import Trail from "../../images/trail.png";
import Trail2 from "../../images/trail2.png";
import Trail3 from "../../images/trail3.png";
import Trail4 from "../../images/trail4.png";
import Trail5 from "../../images/trail5.png";
import Trail6 from "../../images/trail6.png";
import Trail7 from "../../images/trail7.png";

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
    {
      id: 1,
      title: "Trail 1",
      description: "Description about Trail 1...",
      imageSrc: Trail,
    },
    {
      id: 2,
      title: "Trail 2",
      description: "Description about Trail 2...",
      imageSrc: Trail2,
    },
    {
      id: 3,
      title: "Trail 3",
      description: "Description about Trail 3...",
      imageSrc: Trail3,
    },
    {
      id: 4,
      title: "Trail 4",
      description: "Description about Trail 4...",
      imageSrc: Trail4,
    },
    {
      id: 5,
      title: "Trail 5",
      description: "Description about Trail 5...",
      imageSrc: Trail5,
    },
    {
      id: 6,
      title: "Trail 6",
      description: "Description about Trail 6...",
      imageSrc: Trail6,
    },
    {
      id: 7,
      title: "Trail 7",
      description: "Description about Trail 7...",
      imageSrc: Trail7,
    },
  ];
  return (
    <>
      <Typography component={"h2"} variant={"h2"}>
        The Trails
      </Typography>

      <Box className={classes.trailWrapper}>
        {trails.map((trail) => (
          <TrailCard
            key={trail.id}
            title={trail.title}
            description={trail.description}
            imageSrc={trail.imageSrc}
          />
        ))}
      </Box>
    </>
  );
}
