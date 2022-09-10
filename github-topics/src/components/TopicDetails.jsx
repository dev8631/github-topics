import React from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useTopicDetails from "./../hooks/useTopicDetails";
import Loader from "./reuseable/Loader";

export default function TopicDetails() {
  let params = useParams();
  const { data, loading, error } = useTopicDetails(params.topic);

  if (!loading && data.topic !== null) {
    return (
      <Box sx={{ mt: 2 }} data-testid="topicDetails">
        <Typography variant="subtitle1">
          Topic Name: <strong>{data.topic.name}</strong>
        </Typography>
        <Typography variant="body2">
          Stargazer Count: {data.topic.stargazerCount}
        </Typography>
        <Box>
          <Typography variant="h6" align="left">
            Related Topics
          </Typography>
          <List>
            {data.topic.relatedTopics.map((ele, i) => (
              <ListItem key={`related-list-${i}-${ele.id}`}>
                <ListItemText
                  primary={
                    <Typography>
                      {`${i + 1}.`} Topic name:{" "}
                      <Link to={`/${ele.name}`}>{ele.name}</Link>
                    </Typography>
                  }
                  secondary={`Stargazer count: ${ele.stargazerCount}`}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    );
  }

  if (data?.topic === null) {
    return (
      <Box sx={{ mt: 2 }} data-testid="error">
        <Typography variant="h6"> No Details found :(</Typography>
        <Link to="/">Go to Home</Link>
      </Box>
    );
  }
  if (error) {
    return <Box sx={{ mt: 2 }}>Error: {error.message}</Box>;
  }
  if (loading) {
    return <Loader status={loading} />;
  }
  return <></>;
}
