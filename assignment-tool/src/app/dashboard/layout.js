import Link from 'next/link';
import styles from "./dashboard.module.css"

export default function DashboardLayout({ children }) {
    return (
        <section className={styles.dashboard}>
            <nav className={styles.topNav}>
                <div className={styles.logo}>NF</div>

                <ul className={styles.userButtons}>
                    <li><Link href="/bugreport">Report Bug</Link></li>
                    <li><Link href="/dashboard/settings">Settings</Link></li>
                    <li><Link href="/">User</Link></li>
                </ul>
            </nav>

            <main>
                {children}
            </main>

            <nav className={styles.bottomNav}>
                <div className={styles.btmButtons}>
                    <Link href="/dashboard/submit">Submit</Link>
                    <Link href="/dashboard/create">Create</Link>
                </div>

                <div className={styles.btmButtons}>
                    <Link href="/dashboard/assignments">Assignments</Link>
                    <Link href="/dashboard">Home</Link>
                    <Link href="/dashboard/classrooms">Classrooms</Link>
                </div>

                <div className={styles.btmButtons}>
                    <Link href="/notifications" >Notifications</Link>
                </div>
            </nav>
        </section>
    )
}