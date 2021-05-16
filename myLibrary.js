const myLibrary = {
    isNumber: function (value) {
        return typeof value === "number" && isFinite(value);
        //return value === +value; //'+value' means Number(value)
    }
}
module.exports = myLibrary;