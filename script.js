function modify_qty(val) {
    var qty = document.getElementById('qty').value;
    var new_qty = parseInt(qty,10) + val;

    if (new_qty < 0) {
        new_qty = 0;
    }

    document.getElementById('qty').value = new_qty;
    return new_qty;
}

function reset_qty(){
    document.getElementById('qty').value = 0;
    return 0;
}

function modify_resetqty(resval) {
    var resetqty = document.getElementById('resetqty').value;
    var new_resetqty = parseInt(resetqty,10) + resval;

    if (new_resetqty < 0) {
        new_resetqty = 0;
    }

    document.getElementById('resetqty').value = new_resetqty;
    return new_resetqty;
}

function reset_resetqty(){
    document.getElementById('resetqty').value = 0;
    return 0;
}
