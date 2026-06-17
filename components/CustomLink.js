import Link from "next/link"

import styles from "../styles/CustomLink.module.css"

const CustomLink = ({ text, customTo }) => (
  <li>
    <Link href={customTo} className={styles.link}>
      {text}
    </Link>
  </li>
)

export default CustomLink
