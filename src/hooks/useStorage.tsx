const Local_Storage_Keys ={
    AccountType: 'accountType',
    Name: 'name',
    Email: 'email',
    Age: 'age',
    Interest: 'interest',
    Description: 'description'
}

const getItem = (key:string) => {
    if(!key || typeof key !== 'string'){
        console.warn(`The${key} is not valid!`);
        return;
    }

    const value = localStorage.getItem(key);

    try {
        return value ? JSON.parse(value) : null;
    }catch {
        return value;
    }
}

const setItem = ({key, value}: {key: string; value:any;}) => {
    if(!key){
        console.warn(`The ${key} is not valid!`);
        return;
    }

    if(!value){
        console.warn(`The ${value} is not valid`);
        return;
    }

    const data = typeof value === 'object' ? JSON.stringify(value) : value;
    localStorage.setItem(key, data);
}

export default {Local_Storage_Keys, getItem, setItem}