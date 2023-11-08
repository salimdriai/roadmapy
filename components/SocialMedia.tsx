import * as React from "react";

import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import Link from "next/link";

import GithubIcon from "assets/social-media-icons/github.svg";
import LinkedinIcon from "assets/social-media-icons/linkedin.svg";
import InstagramIcon from "assets/social-media-icons/instagram.svg";
import XIcon from "assets/social-media-icons/x.svg";
import discordIcon from "assets/social-media-icons/discord.svg";

export const SocialMedia: React.FunctionComponent = () => {
  return (
    <Stack direction="row">
      <IconButton LinkComponent={Link} href="www.github.com" target="_blank">
        <Image src={GithubIcon} width={30} height={30} alt="github" />
      </IconButton>

      <IconButton LinkComponent={Link} href="www.linkedin.com" target="_blank">
        <Image src={LinkedinIcon} width={30} height={30} alt="linkedin" />
      </IconButton>

      <IconButton LinkComponent={Link} href="www.twitter.com" target="_blank">
        <Image src={XIcon} width={30} height={30} alt="x" />
      </IconButton>

      <IconButton LinkComponent={Link} href="www.instagram.com" target="_blank">
        <Image src={InstagramIcon} width={30} height={30} alt="instagram" />
      </IconButton>
      <IconButton LinkComponent={Link} href="www.discord.com" target="_blank">
        <Image src={discordIcon} width={30} height={30} alt="discord" />
      </IconButton>
    </Stack>
  );
};
