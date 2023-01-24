import { useEffect, useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import { Box, Button, Dialog } from "@mui/material";
import { Template, SignaturePad } from "./components";
import { getBooking } from "./services/bookingService";

export default function Document() {
  const [booking, setBooking] = useState();
  const [signature, setSignature] = useState('');
  const [signaturePadIsOpen, setSignaturePadIsOpen] = useState(false);

  useEffect(() => {
    setBooking(getBooking());
  }, []);

  const afterConfirm = signature => {
    setSignature(signature);
    setSignaturePadIsOpen(false);
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <PDFViewer width={800} height={800}>
          <Template booking={booking} signature={signature} />
        </PDFViewer>
        <Box
          sx={{
            display: "flex",
            width: "800px",
            gap: 2,
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            onClick={() => {  }}
          >
            Send
          </Button>
          <Button
            variant="outlined"
            onClick={() => setSignaturePadIsOpen(true)}
          >
            Sign
          </Button>
        </Box>
      </Box>
      <Dialog
        open={signaturePadIsOpen}
        onClose={() => setSignaturePadIsOpen(false)}
      >
        <SignaturePad afterConfirm={afterConfirm}></SignaturePad>
      </Dialog>
    </>
  );
}
