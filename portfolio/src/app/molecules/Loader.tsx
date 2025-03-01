import React from "react";

import { CSSProperties } from "react";
import FadeLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "##000000",
};

const Loader = ({
  loading = false,
  color = "##000000",
}: {
  loading: boolean;
  color: string;
}) => {
  return (
    <FadeLoader
      color={color}
      loading={loading}
      cssOverride={override}
      size={25}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
