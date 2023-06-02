const URL = 'https://norma.nomoreparties.space/api/ingredients';

const checkResponse = (res) => {
    return res.ok ? res.json() : res.json().than((err) => Promise.reject(err));
};

export const getIngredients = () => {
    return fetch(URL)
        .then(checkResponse)
        .then(data => {
            if (data?.success) return data.data;
            return Promise.reject(data)
        });
};