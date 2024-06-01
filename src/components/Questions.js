import { useState } from "react";
import { Link } from "react-router-dom"
// TODO: 
// Lifecycle: when render the component, load the answers

function Questions() {
    return (
        <div>
            <div style={{ display: "flex", marginBottom: "40px" }}>
                <div style={{ margin: "8px", borderBottom: "2px solid blue" }}>個人資料</div>
                <div style={{ margin: "8px", borderBottom: "2px solid lightblue" }}>關於您的笑容問題</div>
                <div style={{ margin: "8px", borderBottom: "2px solid blue" }}>微笑預約</div>
            </div>
            <form>
                <fieldset>
                    <legend>1 您屬於哪個年齡層？</legend>
                    <div>
                        <input type="radio" id="" name="" value="" />
                        <label for="">18歲以下</label>

                        <input type="radio" id="" name="" value="" />
                        <label for="">18-25</label>

                        <input type="radio" id="" name="" value="" />
                        <label for="">26-35</label>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>2 您如何形容您的牙齒？</legend>
                    <p for="">選擇您的問題</p>
                    <div>
                        <input type="radio" id="" name="" value="" />
                        <label for="">齒列擁擠</label>

                        <input type="radio" id="" name="" value="" />
                        <label for="">咬合不正</label>

                        <input type="radio" id="" name="" value="" />
                        <label for="">牙縫問題</label>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>3 您對於透明牙套的考量是？</legend>
                    <p for="">選擇您的問題</p>
                    <div>
                        <input type="radio" id="" name="" value="" />
                        <label for="">價格</label>

                        <input type="radio" id="" name="" value="" />
                        <label for="">治療程序</label>

                        <input type="radio" id="" name="" value="" />
                        <label for="">療程週期</label>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>4 您覺得哪裡需要改善嗎？</legend>
                    <input type="text" id="" name="" value="" />
                </fieldset>
                <button>
                    <Link to="/camera">下一步</Link>
                </button>
            </form>
        </div >
    );
}

export default Questions;