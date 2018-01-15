const URL = ` http://localhost:4040`;

export function latestNews () {
    const request = fetch(`${URL}/articles?_order=desc&_end=3`, {method: 'GET'})
                    .then(response => response.json())

    return {
        type: 'GET_LATEST',
        payload: request
    }
}

export function otherNews () {
    const request = fetch(`${URL}/articles?_order=desc&_start=3`, {method: 'GET'})
                    .then(response => response.json())

    return {
        type: 'GET_OTHER',
        payload: request
    }
}

export function latestGallery () {
    const request = fetch(`${URL}/galleries?_order=desc`, {method: 'GET'})
                    .then(response => response.json())

    return {
        type: 'GET_LATEST_GALLERY',
        payload: request
    }
}


export function selectedNews (id) {
    const request = fetch(`${URL}/articles?id=${id}`, {method: 'GET'})
                    .then(response => response.json())

    return {
        type: 'GET_SELECTED_NEWS',
        payload: request
    }
}

export function clearSelectedNews (id) {
    return {
        type: 'CLEAR_SELECTED_NEWS',
        payload: []
    }
}

export function selectedGallery (id) {
    const request = fetch(`${URL}/galleries?id=${id}`, {method: 'GET'})
                    .then(response => response.json())

    return {
        type: 'GET_SELECTED_GALLERY',
        payload: request
    }
}

export function clearSelectedGallery (id) {
    return {
        type: 'CLEAR_SELECTED_GALLERY',
        payload: []
    }
}