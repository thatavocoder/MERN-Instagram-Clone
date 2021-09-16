import React from 'react'

export default function ProfileInfo() {
    return (
        <>
            <div className="row" style={{ maxWidth: "70%", margin: "30px", position: "relative", left: "50%", transform: "translate(-50%)" }}>
                <div className="col l3 m4 s12" style={{ marginTop: "2rem" }}>
                    <img src="https://init-svg.herokuapp.com/svg/Kakashi/Hatake/000000/animate" alt="Avatar" style={{ width: '160px', height: '160px', borderRadius: "50%" }} />
                </div>
                <div className="col l9 m8 s12">
                    <p style={{ fontSize: "5vmin", fontWeight: "lighter", marginBottom: "15px" }}>thecopyninja</p>
                    <div style={{ display: "flex", marginBottom: "0" }}>
                        <p style={{ marginRight: "40px", marginTop: "0px", fontSize: "1.1rem" }}><strong>40</strong> posts</p>
                        <p style={{ marginRight: "40px", marginTop: "0px", fontSize: "1.1rem" }}><strong>124</strong> followers</p>
                        <p style={{ marginRight: "40px", marginTop: "0px", fontSize: "1.1rem" }}><strong>97</strong> following</p>
                    </div>
                    <p style={{ fontSize: "1.1rem", marginBottom: "5px", marginTop: "0" }}><strong>Kakashi Hatake</strong></p>
                    <div>
                        <p style={{ fontSize: "1.1rem", marginTop: "0" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa corporis odit, in est quae recusandae illo tenetur dolores quos deleniti blanditiis libero hic dignissimos! Corporis quam adipisci ipsum molestias doloribus.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
