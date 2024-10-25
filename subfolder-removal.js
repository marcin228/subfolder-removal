const removeSubfolders = function(folder){

    let ds = {};
    let t = ds;

    for (let i1 = 0, l1 = folder.length; i1 < l1; i1++) {

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
}