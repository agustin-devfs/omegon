import React from "react";
import { Backdrop, IconButton, useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import { InlineWidget } from "react-calendly";

export default function CalendlyModal({
  open,
  onClose,
  calendlyUrl,
}: {
  open: boolean;
  onClose: () => void;
  calendlyUrl: string;
}) {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isNormalScreen = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <AnimatePresence>
      {open && (
        <>
          <Backdrop
            open
            onClick={onClose}
            sx={{
              zIndex: 1200,
              backdropFilter: "blur(8px)",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}
          />

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              position: "fixed",
              top: "1%",
              left: isNormalScreen ? "5%" : "35%",
              transform: "translate(-50%, 0)",
              zIndex: 1300,
              background: "#fff",
              borderRadius: "12px",
              padding: "0",
              width: isMediumScreen ? "90%" : "30%",
              height: isNormalScreen? "80%" : "95%",
              overflow: "hidden",
              boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <IconButton
              onClick={onClose}
              sx={{ position: "absolute", top: 10, right: 10, zIndex: 2 }}
            >
              <CloseIcon />
            </IconButton>

            <InlineWidget
              url={calendlyUrl}
              styles={{
                flex: 1,
                border: "none",
                borderRadius: "0 0 12px 12px",
              }}
              pageSettings={{
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
              }}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
