import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import RouteIcon from "@mui/icons-material/Route";
import Image from "next/image";
import HeroImg from "assets/road.png";
import Link from "next/link";

import GithubIcon from "assets/social-media-icons/github.svg";
import LinkedinIcon from "assets/social-media-icons/linkedin.svg";
import InstagramIcon from "assets/social-media-icons/instagram.svg";
import XIcon from "assets/social-media-icons/x.svg";
import discordIcon from "assets/social-media-icons/discord.svg";

export default function Home() {
  return (
    <Stack height="100vh" justifyContent="space-between">
      <Stack direction="row" justifyContent="end" p={1}>
        <Typography sx={{ px: 1 }} variant="h5" fontWeight="700">
          Roadmapy
        </Typography>
        <Box flex={1} />

        <IconButton LinkComponent={Link} href="www.github.com" target="_blank">
          <Image src={GithubIcon} width={30} height={30} alt="github" />
        </IconButton>

        <IconButton
          LinkComponent={Link}
          href="www.linkedin.com"
          target="_blank"
        >
          <Image src={LinkedinIcon} width={30} height={30} alt="linkedin" />
        </IconButton>

        <IconButton LinkComponent={Link} href="www.twitter.com" target="_blank">
          <Image src={XIcon} width={30} height={30} alt="x" />
        </IconButton>

        <IconButton
          LinkComponent={Link}
          href="www.instagram.com"
          target="_blank"
        >
          <Image src={InstagramIcon} width={30} height={30} alt="instagram" />
        </IconButton>
        <IconButton LinkComponent={Link} href="www.discord.com" target="_blank">
          <Image src={discordIcon} width={30} height={30} alt="discord" />
        </IconButton>
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
