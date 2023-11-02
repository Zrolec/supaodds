
let baseUrl;
let createPredictionURL, getPredictionsURL, createAccumulatorURL, updatePredictionsUrl, getAccumulationUrl

const setBaseUrl = ()=>{
    if(process.env.REACT_APP_ENVIROMENT === 'production'){
        baseUrl = 'https://predictsitebackend.onrender.com/api/v1/supaodds'
        createPredictionURL = `${baseUrl}/prediction`
        getPredictionsURL = `${baseUrl}/predictions/all`
        createAccumulatorURL = `${baseUrl}/createAccumulator`
        updatePredictionsUrl = `${baseUrl}/updatePredictions`
        getAccumulationUrl = `${baseUrl}/accumulations`
    }else{
        baseUrl = 'http://localhost:8001/api/v1/supaodds'
        createPredictionURL = `${baseUrl}/prediction`
        getPredictionsURL = `${baseUrl}/predictions/all`
        createAccumulatorURL = `${baseUrl}/createAccumulator`
        updatePredictionsUrl = `${baseUrl}/predictions/nameOfLeague`
        getAccumulationUrl = `${baseUrl}/accumulations`
    }
}
setBaseUrl()

export {
    createPredictionURL,
    getPredictionsURL,
    createAccumulatorURL,
    updatePredictionsUrl,
    getAccumulationUrl
}