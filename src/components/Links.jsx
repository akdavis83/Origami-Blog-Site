import React from "react";

import Link from "./Link";

const Links = () => {

  return (
    <>
    {!sessionStorage.getItem('token')&&(
        <>
      <Link path="/register" title="Register" />
      <Link path="/login" title="Login" />

        </>
    )}

    {sessionStorage.getItem('token')&&(

        <>
      <Link path="/app/share" title="Post" />
      <Link path="/app/profile" title="Profile" />

        </>
    )}
    </>
  );
};

export default Links;
