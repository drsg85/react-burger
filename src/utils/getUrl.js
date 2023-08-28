const URL = 'https://norma.nomoreparties.space/api/ingredients';
const ORDER_URL = 'https://norma.nomoreparties.space/api/orders';

export const checkResponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const fetchIngredients = () => {
    return fetch(URL)
        .then(checkResponse)
        .then(data => {
            if (data?.success) return data.data;
            return Promise.reject(data)
        });
};

export const fetchOrder = (ingredients) => {
    return fetch(ORDER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ingredients })
    })
        .then(checkResponse)
        .then(data => {
            if (data?.success) return data;
            return Promise.reject(data)
        });
};