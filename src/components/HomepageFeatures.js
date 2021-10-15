import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Generate your documentation anytime in seconds. Execute it from your CI/CD and
        integrate it with your documentation page.
      </>
    ),
  },
  {
    title: "Open Source",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Free and open source forever! You only need sfdx-cli to install this
        plugin.
      </>
    ),
  },
  {
    title: "Never stop developing",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Focus in your development and new features. Stop dealing with incomplete
        or outdated documentation.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
