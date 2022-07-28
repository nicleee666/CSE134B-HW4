export function show_alert() {
    document.getElementById("myalert").show();
}

export function show_confirm() {
    document.getElementById("myconfirm").show();
}

export function show_prompt() {
    document.getElementById("myprompt").show();
}

export function confirm_mess() {
    var con = document.getElementById("myconfirm");
    con.close()
    document.getElementById("conMess").innerHTML = "Confirm Result: True";

}
export function confirm_mess2() {
    var con = document.getElementById("myconfirm");
    con.close()
    document.getElementById("conMess").innerHTML = "Confirm Result: False";

}

export function prompt_mess() {
    var prom = document.getElementById("myprompt");
    var messa = document.getElementById("mytext").value;
    prom.close();
    document.getElementById("conMess").innerHTML = "Prompt Result: " + messa;
}