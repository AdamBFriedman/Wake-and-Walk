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

/* Color Palette: 
#070625 // Black
#112152 // Blue
#999a9e // Grey
#fae12c // Yellow
#f5f5f5 // Light Grey
*/

const useStyles = makeStyles((theme) =>
  createStyles({
    trailsWrapper: {
      backgroundColor: "#112152",
      minHeight: "100vh",
    },
    trailWrapper: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    title: {
      color: "#f5f5f5",
    },
  })
);

export default function Trails() {
  const classes = useStyles();
  const trails = [
    {
      id: 1,
      title: "Trail 1",
      length: 1.4,
      imageSrc: Trail,
    },
    {
      id: 2,
      title: "Trail 2",
      length: 2.3,
      imageSrc: Trail2,
    },
    {
      id: 3,
      title: "Trail 3",
      length: 3.7,
      imageSrc: Trail3,
    },
    {
      id: 4,
      title: "Trail 4",
      length: 1.6,
      imageSrc: Trail4,
    },
    {
      id: 5,
      title: "Trail 5",
      length: 1.5,
      imageSrc: Trail5,
    },
    {
      id: 6,
      title: "Trail 6",
      length: 2.1,
      imageSrc: Trail6,
    },
    {
      id: 7,
      title: "Trail 7",
      length: 5.2,
      imageSrc: Trail7,
    },
  ];
  return (
    <div className={classes.trailsWrapper}>
      <Typography component={"h2"} variant={"h2"} className={classes.title}>
        The Trails
      </Typography>

      <Box className={classes.trailWrapper}>
        {trails.map((trail) => (
          <TrailCard
            key={trail.id}
            title={trail.title}
            length={trail.length}
            imageSrc={trail.imageSrc}
          />
        ))}
      </Box>
    </div>
  );
}
