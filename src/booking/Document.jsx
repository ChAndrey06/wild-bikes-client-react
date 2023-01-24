import { useEffect, useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import { Box, Button, Dialog } from "@mui/material";
import { Template, SignaturePad } from "./components";
import { getBooking, signBooking } from "./services/bookingService";

export default function Document() {
  const [booking, setBooking] = useState();
  const [signaturePadIsOpen, setSignaturePadIsOpen] = useState(false);

  useEffect(() => {
    getBooking()
      .then(booking => setBooking(booking))
      .catch(() => console.log('Failed to load booking'));
  }, []);

  const afterConfirm = signature => {
    setBooking({ ...booking, signature });
    setSignaturePadIsOpen(false);
  }

  const onSend = () => {
    signBooking(booking.signature)
      .then(() => console.log('signed'));
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
          <Template booking={booking} />
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
            onClick={onSend}
            disabled={!booking?.signature}
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
