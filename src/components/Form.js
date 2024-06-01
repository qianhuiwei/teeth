import { useState } from "react";
import { Link } from "react-router-dom"

// TODO: check out SpaceX for handling multiple inputs
// 比照目標網站 input check
// Lifecycle: when render the component, load the personal info

function From() {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [agree, setAgree] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`${name}, ${city}, ${agree}`);
    }

    const handleChangeName = (e) => {
        setName(e.target.value);
    }
    const handleChangeCity = (e) => {
        setCity(e.target.value);
    }
    const handleChangeAgree = (e) => {
        setAgree(e.target.checked);
    }

    return (
        <div>
            <div style={{ display: "flex", marginBottom: "40px" }}>
                <div style={{ margin: "8px", borderBottom: "2px solid lightblue" }}>個人資料</div>
                <div style={{ margin: "8px", borderBottom: "2px solid blue" }}>關於您的笑容問題</div>
                <div style={{ margin: "8px", borderBottom: "2px solid blue" }}>微笑預約</div>
            </div>


            <form onSubmit={handleSubmit}>
                <div>
                    <label for="">您的名字</label>
                    <input value={name} type="text" onChange={handleChangeName} />
                </div>
                {/* <div>
                    <label for="">您的電子信箱</label>
                    <input value={email} type="email" onChange={handleChangeEmail}/>
                </div>
                <div>
                    <label for="">您的手機號碼</label>
                    <input type="tel" />
                </div> */}
                <div>
                    <label for="">選擇城市</label>
                    <select name="" id="" onChange={handleChangeCity}>
                        <option value="">選擇縣市</option>
                        <option value="基隆市">基隆市</option>
                        <option value="台北市">台北市</option>
                    </select>

                </div>
                <div style={{ display: "flex" }}>
                    <input type="checkbox" onChange={handleChangeAgree} />
                    <p>同意</p>
                </div>


                <button disabled={!name || !city || !agree}>
                    <Link to="/questions">下一步</Link>
                </button>
            </form>
        </div>
    );
}

export default From;