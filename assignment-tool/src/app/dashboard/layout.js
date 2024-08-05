import Link from 'next/link';
import styles from "./dashboard.module.css"

export default function DashboardLayout({ children }) {
    return (
        <section className={styles.dashboard}>
            <nav className={styles.topNav}>
                <div className={styles.logo}>NF</div>

                <div className={styles.navSearch}>
                    <input type="text" placeholder="Search..."></input>
                </div>



                <div className={styles.userButtons}>
                    <p>Feedback/bug reporting</p>
                    <Link href="/dashboard/settings">Settings</Link>
                    <Link href="/">User</Link>
                </div>
            </nav>

            <main>
                {children}
            </main>

            <nav className={styles.bottomNav}>
                <div>
                    <Link href="/dashboard/submit">Submit</Link>
                    <Link href="/dashboard/create">Create</Link>
                </div>
                <Link href="/dashboard/assignments">Assignments</Link>
                <Link href="/dashboard">Home</Link>
                <Link href="/dashboard/classrooms">Classrooms</Link>
                <p>Notifications</p>
            </nav>
        </section>
    )
}