import Head from "next/head"

import CustomLink from "./CustomLink"

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta name="keywords" content={"next js example" + keywords}></meta>
        <title>next js</title>
      </Head>
      <div className="navbar">
        <CustomLink customTo="/" text="main" />
        <CustomLink customTo="/users" text="users" />
      </div>
      <div>{children}</div>
      <style jsx>{`
        .navbar {
          background: orange;
          padding: 15px;
          list-style-type: none;
        }
      `}</style>
    </>
  )
}

export default MainContainer
