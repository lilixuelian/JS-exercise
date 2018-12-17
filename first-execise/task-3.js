function parseQuery(query) {
    var arr = query.split('&')
    var obj = {}
    for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split('=')
        if (arr2[0]) { obj[arr2[0]] = arr2[1] || '' }
    }
    return obj
}