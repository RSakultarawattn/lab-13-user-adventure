

const USER = 'USER';

export function saveUser(user) {
    const stringyUser = JSON.stringify(user);

    localStorage.setItem(USER, stringyUser);

}

export function getUser()  {

    const stringyUser = localStorage.getItem(USER);

    return JSON.parse(stringyUser);
}

export function findById(someArray, id) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        
        if (item.id === id) {
            return item;
        }
    }
}