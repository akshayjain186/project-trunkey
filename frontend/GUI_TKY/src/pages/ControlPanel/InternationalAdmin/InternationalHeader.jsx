import React from 'react'
import logo from '../../../assets/images/turnkey logo.png';

const InternationalHeader = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: "#41619A" }}>
                <div className="container-fluid ms-3">
                    {/* Logo image */}
                    <img
                        src={logo}
                        alt="Company Logo"
                        style={{ height: "25px" }}
                    />
                    {/* User Avatar */}
                    <div className="d-flex me-3">
                        <img
                            src=""
                            alt="User Avatar"
                            className="rounded-circle"
                        />
                    </div>
                </div>
            </nav>
        </>
    )
}
export default InternationalHeader;
