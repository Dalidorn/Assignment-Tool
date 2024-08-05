const Settings = () => {
    return (
        <div className="page">
            <h1 className="pageTitle">Settings</h1>

            <div className="section">
                <h3>Legal Info</h3>
                <ul>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Cookies/Data Preferences</li>
                    <li>Complience Information</li>
                </ul>
            </div>

            <div className="section">
                <h2>Account Settings</h2>

                <button>Edit</button>
                <p>Profile Picture</p>
                <p>Display Name: XYZ</p>
                <p>Email:</p>
                <p>Preferred Language: English</p>
                <p>Time Zone: EST</p>
                <button>Change Date/Time Formatting</button>
                <button>Change/Update Password</button>
                <button>Delete Account</button>
                <button>Export Data</button>
                <button>Enable Two-Factor Authentication (2FA)</button>
                <button>View Account Activity Log</button>
                <button>Manage Connected Devices</button>
                <button>Manage Account Recovery Options</button>
            </div>

            <div className="section">
                <h2>Parental/Tutor/Admin Access</h2>

                <button>Add/Allow Admin Account</button>
                <button>Add Tutor to Account</button>
                <button>Add Parent to Account</button>
                <button>Manage Access</button>
            </div>

            <div className="section">
                <h2>Notificaion Preferences</h2>

                <button>SMS Notificaions</button>
                <button>Email Notifications</button>
                <button>Push Notifications</button>
            </div>

            <div className="section">
                <h2>3rd Party Integrations</h2>

                <p>List of all integrated apps and accounts linked to this app</p>
                <button>Sync Settings from Linked Apps (where supported)</button>
                <button>Manage Permissions</button>
                <button>Manage API Keys/Tokens</button>
            </div>

            <div className="section">
                <h2>User Interface and Accessibility</h2>

                <p>Appearence</p>
                <select>
                    <option>Light</option>
                    <option>Dark</option>
                    <option>High Contrast Light</option>
                    <option>High Contrast Dark</option>
                </select>

                <p>Font Size Override</p>
                <input type="range" min="-90" max="500" />

                <p>Assistive Tech Support</p>
                <label>Screen Reader Support</label>
                <input type="checkbox" />
                <label>Keyboard Navigation Controls</label>
                <input type="checkbox" />
                <label>Text-to-Speach Settings</label>
                <input type="checkbox" />
            </div>
        </div>
    );
};

export default Settings;