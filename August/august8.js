// You are given an array of strings consisting of grocery items, with prices in parentheses. Return an array of prices in float format.

function getPrices(arr) {
    let returnarr = []
	for (i =0;i<arr.length ; i++){
    returnarr.push(parseFloat((arr[i].substring( arr[i].indexOf('$')+1, arr[i].indexOf(')')))))
    }
    return returnarr
}

console.log(getPrices(["ice cream ($5.99)", "banana ($0.20)", "sandwich ($8.50)", "soup ($1.99)"]))