import React from "react";
import { Link } from "react-router-dom"

function AllSet() {
    // get all the pic data and show the pics
    return (
        <div>
            <div style={{ display: "flex", marginBottom: "40px" }}>
                <div style={{ margin: "8px", borderBottom: "2px solid blue" }}>個人資料</div>
                <div style={{ margin: "8px", borderBottom: "2px solid blue" }}>關於您的笑容問題</div>
                <div style={{ margin: "8px", borderBottom: "2px solid lightblue" }}>微笑預約</div>
            </div>
            您已經完成了！
            <div>
                <button>
                    <Link to="/">下一步</Link>
                </button>
            </div>
            <div>
                <button>
                    <Link to="/camera">重新拍照</Link>
                </button>
            </div>

        </div>
    );
}

export default AllSet;