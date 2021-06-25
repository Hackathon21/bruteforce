import React from "react";
import "../css/resume.css";

// import

const skills = [
  {
    head: "web design",
    para: "Assertively exploit wireless initiatives rather than synergistic core competencies",
  },
  {
    head: "web design",
    para: "Assertively exploit wireless initiatives rather than synergistic core competencies",
  },
  {
    head: "web design",
    para: "Assertively exploit wireless initiatives rather than synergistic core competencies",
  },
];
const tech = [
  { name: "macos" },
  { name: "macos" },
  { name: "macos" },
  { name: "macos" },
  { name: "macos" },
];

const ResumeTemp = () => {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div id="doc2" class="yui-t7" style={{ width: "65%" }}>
        <div id="inner">
          <div id="hd">
            <div
              class="yui-gc"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div class="yui-u first">
                <h1>Jonathan Doe</h1>
                <h2>Web Designer, Director</h2>
              </div>

              <div class="yui-u">
                <div class="contact-info">
                  <h3>
                    <a id="pdf" href="#">
                      Download PDF
                    </a>
                  </h3>
                  <h3>
                    <a href="mailto:name@yourdomain.com">name@yourdomain.com</a>
                  </h3>
                  <h3>(313) - 867-5309</h3>
                </div>
              </div>
            </div>
          </div>

          <div id="bd">
            <div id="yui-main">
              <div class="yui-b">
                <div class="yui-gf">
                  <div class="yui-u first">
                    <h1>Profile</h1>
                  </div>
                  <div class="yui-u">
                    <p class="enlarge">
                      Progressively evolve cross-platform ideas before impactful
                      infomediaries. Energistically visualize tactical
                      initiatives before cross-media catalysts for change.
                    </p>
                  </div>
                </div>

                <div class="yui-gf">
                  <div class="yui-u first">
                    <h1>Skills</h1>
                  </div>
                  <div class="yui-u">
                    {skills.map((val) => (
                      <div class="talent">
                        <h2>{val.head}</h2>
                        <p>{val.para}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div class="yui-gf">
                  <div class="yui-u first">
                    <h1>Technical</h1>
                  </div>
                  <div class="yui-u" style={{ display: "flex" }}>
                    <ul
                      class="talent"
                      style={{ display: "flex", flexWrap: "wrap" }}
                    >
                      {tech.map((val) => (
                        <li
                          style={{
                            width: "33%",
                            borderBottom: "none",
                            padding: "12px 12px",
                            fontSize: "1.2rem",
                          }}
                        >
                          {val.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div class="yui-gf">
                  <div class="yui-u first">
                    <h1>Experience</h1>
                  </div>

                  <div class="yui-u">
                    <div class="job">
                      <h2>Facebook</h2>
                      <h3>Senior Interface Designer</h3>
                      <h4>2005-2007</h4>
                      <p>
                        Intrinsicly enable optimal core competencies through
                        corporate relationships. Phosfluorescently implement
                        worldwide vortals and client-focused imperatives.
                        Conveniently initiate virtual paradigms and top-line
                        convergence.{" "}
                      </p>
                    </div>

                    <div class="job">
                      <h2>Apple Inc.</h2>
                      <h3>Senior Interface Designer</h3>
                      <h4>2005-2007</h4>
                      <p>
                        Progressively reconceptualize multifunctional "outside
                        the box" thinking through inexpensive methods of
                        empowerment. Compellingly morph extensive niche markets
                        with mission-critical ideas. Phosfluorescently deliver
                        bricks-and-clicks strategic theme areas rather than
                        scalable benefits.{" "}
                      </p>
                    </div>

                    <div class="job">
                      <h2>Microsoft</h2>
                      <h3>Principal and Creative Lead</h3>
                      <h4>2004-2005</h4>
                      <p>
                        Intrinsicly transform flexible manufactured products
                        without excellent intellectual capital. Energistically
                        evisculate orthogonal architectures through covalent
                        action items. Assertively incentivize sticky platforms
                        without synergistic materials.{" "}
                      </p>
                    </div>

                    <div class="job last">
                      <h2>International Business Machines (IBM)</h2>
                      <h3>Lead Web Designer</h3>
                      <h4>2001-2004</h4>
                      <p>
                        Globally re-engineer cross-media schemas through viral
                        methods of empowerment. Proactively grow long-term
                        high-impact human capital and highly efficient
                        innovation. Intrinsicly iterate excellent e-tailers with
                        timely e-markets.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="yui-gf last">
                  <div class="yui-u first">
                    <h1>Education</h1>
                  </div>
                  <div class="yui-u">
                    <h2>Indiana University - Bloomington, Indiana</h2>
                    <h3>
                      Dual Major, Economics and English &mdash;{" "}
                      <strong>4.0 GPA</strong>{" "}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="ft">
            <p>
              Jonathan Doe &mdash;{" "}
              <a href="mailto:name@yourdomain.com">name@yourdomain.com</a>{" "}
              &mdash; (313) - 867-5309
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeTemp;
