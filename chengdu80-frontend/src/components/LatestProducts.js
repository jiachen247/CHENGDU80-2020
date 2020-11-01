import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import moment from "moment";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { ArrowDownward } from "@material-ui/icons";
import { deepPurple } from "@material-ui/core/colors";

const data = [
  {
    id: uuid(),
    name:
      "Perhaps that it will be more useful when you consider this strategy with fundamental analysis",
    icon: <ArrowDownward />,
    updatedAt: moment().subtract(2, "hours"),
  },
  {
    id: uuid(),
    name: "This is exactly what I needed. Great Job!",
    icon: <ArrowDownward />,
    updatedAt: moment().subtract(2, "hours"),
  },
  {
    id: uuid(),
    name:
      "The interpretability of the model is really helpful and make me a better investors, two thumbs up!",
    icon: <ArrowDownward />,
    updatedAt: moment().subtract(3, "hours"),
  },
  {
    id: uuid(),
    name: "Can you also do models specifically for a tech industry",
    icon: <ArrowDownward />,
    updatedAt: moment().subtract(5, "hours"),
  },
  {
    id: uuid(),
    name: "This is awesome!",
    icon: <ArrowDownward />,
    updatedAt: moment().subtract(9, "hours"),
  },
];

const useStyles = makeStyles({
  root: {
    height: "100%",
    paddingTop: 25,
  },
  image: {
    height: 48,
    width: 48,
  },
  paddingTop: 50,
  paddingBottom: 50,
});

const LatestProducts = ({ className, ...rest }) => {
  const classes = useStyles();
  const [products] = useState(data);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader subtitle={`${products.length} in total`} title="Feedback" />
      <Divider />
      <List>
        {products.map((product, i) => (
          <ListItem divider={i < products.length - 1} key={product.id}>
            <ListItemText
              primary={product.name}
              secondary={`Updated ${product.updatedAt.fromNow()}`}
            />
            <IconButton edge="end" size="small">
              {<MoreVertIcon />}
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

LatestProducts.propTypes = {
  className: PropTypes.string,
};

export default LatestProducts;
