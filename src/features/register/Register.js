import React from "react";
import { CreateAccount } from "./CreateAccount";
import { PublicLayout } from "../../common/components/PublicLayout";
import { Identification } from "./Identification";
import { Bank } from "./Bank";
import { Employment } from "./Employment";
import { OTP } from "./OTP";
import { Personal } from "./Personal";
import { Photo } from "./Photo";
import { Residence } from "./Residence";

export const Register = () => {
  return (
    <PublicLayout>
      {/* <Bank /> */}
      <CreateAccount />
      {/* <Employment /> */}
      {/* <Identification /> */}
      {/* <OTP /> */}
      {/* <Personal /> */}
      {/* <Photo /> */}
      {/* <Residence /> */}
    </PublicLayout>
  );
};
