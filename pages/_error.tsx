import Errors from "@/components/Errors";
import { NextPageContext } from "next";

const Error = ({ statusCode }: any) => {
  return (
    <>
    <Errors/>
    </>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode }
};

export default Error;