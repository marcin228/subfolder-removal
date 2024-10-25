const removeSubfolders = function(folder){

    const ds = {};
    const search = {};
    let t = ds, result = [];
    
    for (let i1 = 0, l1 = folder.length; i1 < l1; i1++) {

        search[folder[i1]] = true;
        const path = folder[i1].split("/");
        path.shift();

        for (let j1 = 0, l2 = path.length; j1 < l2; j1++) {

            if (t[path[j1]] == undefined) t[path[j1]] = {};
            if (j1 + 1 >= l2) t[path[j1]].last = true;
            else delete t[path[j1]].last;

            t = t[path[j1]];
        }

        t = ds;
    }

    const dig = function (node, word) {

        for (let key in node) {
        
            if (search[word]) {
                delete node[key];
                result.push(word);
                return;
            }

            if (key != "last") dig(node[key], word + "/" + key);
        }
    };

    dig(ds, "");

    return [...new Set(result)];
}