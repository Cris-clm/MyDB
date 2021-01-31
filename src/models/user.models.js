const dbUser = []

let getUsers = () => {
    return dbUser;
}

let addUser = (item) => {
    dbUser.push(item)
}

let updateUser = (itemOld, itemNew) => {
    //let usuarioBuscado=dbUser.find(item=>item==itemOld)
    let indiceBuscado = -1;
    for (let i = 0; i < dbUser.length; i++) {
        const element = dbUser[i];
        if (element == itemOld) {
            indiceBuscado = 1

        }
    }
    if(indiceBuscado==-1){
        return false;
    }else {
        dbUser[indiceBuscado]=itemNew;
        return true;
    }
}

let deleteUser = (item) => {
    let indiceBuscado = -1;
    for (let i = 0; i < dbUser.length; i++) {
        const element = dbUser[i];
        if (element == item) {
            indiceBuscado = i;

        }
    }
    if(indiceBuscado==-1){
        return false;
    }else {
        dbUser[indiceBuscado]=null;
        return true;
    }
}

module.exports={getUsers,addUser,updateUser,deleteUser}
