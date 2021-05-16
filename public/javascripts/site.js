async function getJSEditon() {
    try {
        const response = await axios.get("/jsEditon");
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};


var dataToUse = new Vue({
    el: "#dataToUse",
    data: {
        dataA: "",
        dataB: "",
        dataACombined: ""
        //dataUnion: null,
        //dataIntersection: null,
        //dataOnlyA: null,
        //dataOnlyB: null
    },
    methods: {
        dataCalculate: function () {
            const artStrA = this.dataA.split(/\r?\n/);
            const dataACounts = this.getDataCounts(artStrA);
            this.dataACombined = this.printAryString(Object.keys(dataACounts));
        },
        getDataCounts: function (aryStr) {
            const result = {};
            aryStr.forEach(str => {
                if (result[str] === undefined) {
                    result[str] = 1;
                }
                result[str]++;
            });
            return result;
        },
        printAryString: function (aryStr) {
            let result = "";
            aryStr.forEach(str => {
                result += `${str}\n`;
            });
            return result;
        }
    }
});