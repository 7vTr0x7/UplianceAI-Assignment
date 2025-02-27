import React from "react";
import { Button, Box, Typography, Stack } from "@mui/material";
import { useSpring, animated } from "react-spring";

interface CounterProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Counter: React.FC<CounterProps> = ({ count, setCount }) => {
  const backgroundProps = useSpring({
    height: `${Math.min(count * 10, 100)}%`,
    backgroundColor: `rgba(88, 80, 236, ${Math.min(count * 0.1, 0.8)})`,
    config: { tension: 120, friction: 14 },
  });

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);
  const reset = () => setCount(0);

  const AnimatedBox = animated(Box);

  return (
    <Box
      sx={{
        position: "relative",
        height: "280px",
        width: "100%",
        borderRadius: 1,
        overflow: "hidden",
        bgcolor: "background.paper",
      }}>
      <AnimatedBox
        style={{
          ...backgroundProps,
          position: "absolute",
          bottom: 0,
          width: "100%",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      />

      <Stack
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{
          height: "100%",
          position: "relative",
          zIndex: 1,
        }}>
        <Typography variant="h2" component="div" fontWeight="bold">
          {count}
        </Typography>

        <Stack direction="row" spacing={1}>
          <Button variant="contained" color="error" onClick={decrement}>
            -
          </Button>
          <Button variant="contained" color="warning" onClick={reset}>
            Reset
          </Button>
          <Button variant="contained" color="success" onClick={increment}>
            +
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Counter;
