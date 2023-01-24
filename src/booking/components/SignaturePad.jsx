import { useRef } from "react";
import { Box, Button } from "@mui/material";
import SignatureCanvas from "react-signature-canvas";

export default function SignaturePad({ afterConfirm }) {
  const padRef = useRef();

  const onClear = () => padRef?.current?.clear();
  const onConfirm = () => {
    afterConfirm(padRef?.current?.toDataURL());
  };

  return (
    <Box sx={{ m: 2 }}>
      <Box sx={{ border: 1, borderRadius: 2 }}>
        <SignatureCanvas
          ref={padRef}
          canvasProps={{
            width: 500,
            height: 200,
          }}
        />
      </Box>

      <Box sx={{ display: "flex", pt: 2, gap: 1, direction: "rtl" }}>
        <Button variant="outlined" color="primary" onClick={onClear}>
          Clear
        </Button>
        <Button variant="contained" color="primary" onClick={onConfirm}>
          Confirm
        </Button>
      </Box>
    </Box>
  );
}
