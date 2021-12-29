import { Dialog, DialogContent } from "@mui/material";
import React from "react";
import ExploreDropDown from "../../molecules/ExploreDropDown/ExploreDropDown";

function ExplorerDropDown(props) {
  const { openPopup } = props;
  return (
    <Dialog open={openPopup} maxwidth="md">
      <DialogContent sx={{ padding: "0px" }}>
        <ExploreDropDown {...props} />
      </DialogContent>
    </Dialog>
  );
}

export default ExplorerDropDown;
