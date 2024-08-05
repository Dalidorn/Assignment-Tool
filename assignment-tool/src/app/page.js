import Link from 'next/link';
import styles from "./landing.module.css";

const Landing = () => {
  return (
    <div className={styles.landing}>
      <nav className={styles.header}>
        <div className={styles.logo}>NF</div>

        <ul className={styles.ctaButtons}>
          <li><Link href="/dashboard">Demo</Link></li>
          <li><Link href="/login">Login</Link></li>
          <li><Link href="/signup">Sign-up</Link></li>
        </ul>
      </nav>

      <div className={styles.hero}>
        <h1>Assignment Tool</h1>
        <p className={styles.sub}>Empowering Classrooms with AI</p>

        <div className={styles.carousel}>
          <div className={styles.slide}>
            <h2>AI Assisted Assignment Administration</h2>
            <p>Create and host high quality, clear assignments. We outsource the most tedious of tasks to AI...</p>
            <ul>
              <li>Difficulty Balancing</li>
              <li>Proofing and Grading</li>
              <li>Accessibility Concerns</li>
              <li>Instant Feedback</li>
            </ul>

            <div className={styles.teacherFacts}>
              <h3>For Teachers</h3>
              <p>That means your attention is back in the classrooms where it belongs. Reduce the strain of proofing, grading, and creating assignments on your own. </p>
            </div>

            <div className={styles.studentFacts}>
              <h3>For Students</h3>
              <p>Gone are the unclear or confusing questions. Every assignment is easier than ever to tailor directly to your skill level.</p>
            </div>
          </div>

          <div className={styles.slide}>
            <h2>Automated Submission Evaluation</h2>
            <p>Let AI handle the initial submission checks, ensuring students meet requirements before final grading...</p>
            <ul>
              <li>Consistency in Evaluation</li>
              <li>Time-Saving Automation</li>
              <li>Highlighting Key Areas</li>
              <li>Fair and Accurate</li>
            </ul>

            <div className={styles.teacherFacts}>
              <h3>For Teachers</h3>
              <p>Spend less time on manual checks and more time teaching. Maintain consistent evaluations and easily identify submissions that need further attention.</p>
            </div>

            <div className={styles.studentFacts}>
              <h3>For Students</h3>
              <p>Receive instant feedback on whether your submissions meet requirements. Benefit from a fair and consistent evaluation process.</p>
            </div>
          </div>

          <div className={styles.slide}>
            <h2>Insightful Feedback and Analytics</h2>
            <p>Receive detailed insights and analytics on student performance to adapt your curriculum effectively...</p>
            <ul>
              <li>Performance Tracking</li>
              <li>Data-Driven Insights</li>
              <li>Personalized Feedback</li>
              <li>Curriculum Adaptation</li>
            </ul>

            <div className={styles.teacherFacts}>
              <h3>For Teachers</h3>
              <p>Gain detailed insights and analytics on student performance. Tailor your teaching methods and curriculum based on data-driven insights.</p>
            </div>

            <div className={styles.studentFacts}>
              <h3>For Students</h3>
              <p>Receive detailed feedback on assignments to understand strengths and weaknesses. Track personal progress and performance over time.</p>
            </div>
          </div>

          <div className={styles.slide}>
            <h2>Instant Feedback on Assignments</h2>
            <p>Get instant feedback on your assignments, understand your strengths, and improve your performance...</p>
            <ul>
              <li>Immediate Guidance</li>
              <li>Quick Corrections</li>
              <li>Continuous Improvement</li>
              <li>Reduced Anxiety</li>
            </ul>

            <div className={styles.teacherFacts}>
              <h3>For Teachers</h3>
              <p>Enable students to receive instant feedback on their assignments. Reduce the volume of follow-up questions and clarifications needed.</p>
            </div>

            <div className={styles.studentFacts}>
              <h3>For Students</h3>
              <p>Get instant feedback on assignments, reducing anxiety and uncertainty. Understand mistakes and areas for improvement immediately.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>

        <ul className={styles.links}>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/privacy">Privacy</Link></li>
          <li><Link href="/terms">Terms</Link></li>
        </ul>


        <div className={styles.copyright}>
          <p>&#169; 2024 - Nathaniel Fritz. Licensed under the Apache License, Version 2.0.</p>

          <p>Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
