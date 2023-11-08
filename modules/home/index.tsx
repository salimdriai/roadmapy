import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import RouteIcon from "@mui/icons-material/Route";
import Image from "next/image";
import HeroImg from "assets/road.png";
import Link from "next/link";

import { SocialMedia } from "components";

export default function Home() {
  return (
    <Stack height="100vh" justifyContent="space-between">
      <Stack direction="row" justifyContent="end" p={1}>
        <Typography sx={{ px: 1 }} variant="h5" fontWeight="700">
          Roadmapy
        </Typography>
        <Box flex={1} />
        <SocialMedia />
      </Stack>
      <Container
        maxWidth="lg"
        sx={{ display: "flex", alignItems: "center", gap: 5 }}
      >
        <Stack justifyContent="center" alignItems="start" spacing={4}>
          <div>
            <Typography variant="h1">Quickly Create</Typography>
            <Typography variant="h3">Nice looking roadmaps.</Typography>
          </div>
          <Button
            LinkComponent={Link}
            href="/roadmap"
            variant="contained"
            size="large"
            startIcon={<RouteIcon />}
          >
            Create roadmap
          </Button>
        </Stack>
        <Image src={HeroImg} width={500} height={300} alt="roadmap" />
      </Container>
      <Stack p={2} spacing={2} alignItems="center">
        <Box width={200}>
          <Divider />
        </Box>
        <Typography variant="body2" color="text.secondary">
          created by @salimdriai | 2023 all rights reserved
        </Typography>
      </Stack>
    </Stack>
  );
}
