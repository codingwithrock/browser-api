const values = (id) => {
    var value = document.getElementById(`${id}`).value;

    return value;
}



const setItem = async () => {


    try {
        localStorage.setItem(await values('item'), await values('budget'));

        // addingItemsInUi(values('item'),values('budget'));
        addingItemsInUi();
        // console.log(localStorage.getItem('book'));


        document.getElementById('item').value = '';
        document.getElementById('budget').value = '';
    }

    catch (error) {
        console.log(error)
    }
}


const modifyValue = () => {
    localStorage.setItem('key', 'key value Has been changed');
}


const clearAll = () => {
    localStorage.clear();
}











const addingItemsInUi = (key, value) => {



    loopLimit = localStorage.length;

    for (key in localStorage) {
        if (loopLimit != 1) {
            --loopLimit;


            value = localStorage.getItem(`${key}`);





            // !Adding All keys And values...
            // getting Ul as a parent.
            let ul = document.getElementById('display-value-ul');

            // !creating li and adding with value into the ul//

            let li = document.createElement('li');


            li.setAttribute('type', '1');

            li.innerText =`${key} = ${value}`;

            ul.appendChild(li);
        }
    }



}


addingItemsInUi();