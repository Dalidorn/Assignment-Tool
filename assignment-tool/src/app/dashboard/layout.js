import Link from 'next/link';

export default function DashboardLayout({ children }) {
    return (
        <section>
            <nav>
                <div>NF</div>

                <div>
                    <input type="text" placeholder="Search..."></input>
                </div>



                <div>
                    <p>Feedback/bug reporting</p>
                    <Link href="/dashboard/settings">Settings</Link>
                    <p>user profile</p>
                </div>
            </nav>

            <main>
                {children}
            </main>

            <nav>
                <ul>
                    <li><Link href="/dashboard/submit">Submit</Link></li>
                    <li><Link href="/dashboard/create">Create</Link></li>
                    <li><Link href="/dashboard/assignments">Assignments</Link></li>
                    <li><Link href="/dashboard/classrooms">Classrooms</Link></li>
                    <li>notifications</li>
                </ul>
            </nav>
        </section>
    )
}