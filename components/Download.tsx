import * as React from "react";
import { Box, Button, Container, Paper, Stack } from "@mui/material";
import * as htmlToImage from "html-to-image";
// import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

interface DownloadProps {
  disabled: boolean;
}

export const Download: React.FunctionComponent<DownloadProps> = ({
  disabled = false,
}) => {
  const downloadImg = () => {
    var node = document.getElementById("roadmap");

    htmlToImage
      .toPng(node as HTMLElement)
      .then(function (dataUrl) {
        let img = new Image();
        img.src = dataUrl;
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });

    htmlToImage.toPng(node as HTMLElement).then(function (dataUrl) {
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "roadmap.png";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "end" }}>
      <Button
        disabled={disabled}
        variant="contained"
        color="secondary"
        onClick={downloadImg}
        endIcon={<FileDownloadIcon />}
      >
        Download PNG
      </Button>
    </Box>
  );
};
