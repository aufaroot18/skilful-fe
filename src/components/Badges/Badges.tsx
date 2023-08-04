import { badges } from "../../models/filter";

import Badge from "./Badge";
import styles from "./Badges.module.css";
import type { BadgesProps } from "./types";

const Badges = (props: BadgesProps) => {
  return (
    <div className={styles.container}>
      {badges.map((badge) => (
        <Badge {...props} key={badge} title={badge} />
      ))}
    </div>
  );
};

export default Badges;
