import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Input(){
    const [form, setForm] = useState({
        string_to_cut: "",
    });

const navigate = useNavigate();

function updateForm(value){
    return setForm((prev) => {
        return { ...prev, ...value};
    });
}

async function onSubmit(e){
    e.preventDefault();

    const string_to_cut = { ...form };

    const response = await fetch("http://localhost:5000/test", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(string_to_cut),
    })
    .catch(error =>{
        window.alert(error);
        return
    });
    const new_string = await response.json();
    window.alert("Every 3rd character of your input created: " + new_string.return_string);
    setForm({string_to_cut: "",});
    navigate("/");
}

return (
    <div>
        <h3>Please enter any text in the box below. After entering text, please click the button below to receive a new string made up of every third character from your input!</h3>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="string"></label>
                <input
                    type="text"
                    className="form-control"
                    id="string_to_cut"
                    value={form.string_to_cut}
                    onChange={(e) => updateForm({ string_to_cut: e.target.value})}
                />
            </div>
            <div className="form-group">
                <input
                    type="submit"
                    value="Click here to receive your new string!"
                    className="btn btn-primary"
                />
            </div>
        </form>
    </div>
)

}