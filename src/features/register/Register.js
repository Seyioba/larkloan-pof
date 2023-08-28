import React from "react";
import { CreateAccount } from "./CreateAccount";
import { PublicLayout } from "../../common/components/PublicLayout";
import { Identification } from "./Identification";

export const Register = () => {
  return (
    <PublicLayout>
      {/* <CreateAccount /> */}
      <Identification />
    </PublicLayout>
  );
};
