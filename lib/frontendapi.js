import { getToken } from "./session";
import axios from "axios";

export const login = async(data) => {
    return new Promise((resolve, reject) => {
        const req = axios.request(process.env.NEXT_PUBLIC_API_URL + '/user-login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                //'Authorization': 'Bearer '+getToken()
            },
            data: {
                ...data
            },
        });
        req.then(res => resolve(res.data))
            .catch(err => reject(err));
    });
};

export const getCurrentUserData = async(data) => {
    return new Promise((resolve, reject) => {
        const req = axios.request(process.env.NEXT_PUBLIC_API_URL + '/getcurrentuserdata', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            },
            params: {
                ...data
            },
        });
        req.then(res => resolve(res.data))
            .catch(err => reject(err));
    });
};


export const getCountries = async(data) => {
    return new Promise((resolve, reject) => {
        const req = axios.request(process.env.NEXT_PUBLIC_API_URL + '/countries', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
            },
            data: {
                ...data
            },
        });
        req.then(res => resolve(res.data))
            .catch(err => reject(err));
    });
};

export const joinToInvestAPI = async(email) => {
    return new Promise((resolve, reject) => {
        const req = axios.request(process.env.NEXT_PUBLIC_API_URL + '/join_to_invest', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
            },
            data: {
                email: email
            },
        });
        req.then(res => resolve(res.data))
            .catch(err => reject(err));
    });
};

export const userRegister = async(data) => {
    return new Promise((resolve, reject) => {
        const req = axios.request(process.env.NEXT_PUBLIC_API_URL + '/register', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
            },
            data: {
                ...data
            },
        });
        req.then(res => resolve(res.data))
            .catch(err => reject(err));
    });
};

export const confirmOtp = async(otp, userId) => {
    return new Promise((resolve, reject) => {
        const req = axios.post(`${process.env.NEXT_PUBLIC_API_URL}/confirm-otp`, { otp, userId }, {
                headers: {
                    Accept: "application/json",
                },
            })
            .then((res) => resolve(res.data))
            .catch((err) => reject(err));
    });
};


export const sendOtp = async() => {
    return new Promise((resolve, reject) => {
        const req = axios.request(process.env.NEXT_PUBLIC_API_URL + '/send-otp', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
            },
            data: {
                ...data
            },
        });
        req.then(res => resolve(res.data))
            .catch(err => reject(err));
    });
};

export const saveContact = async(data) => {
    return new Promise((resolve, reject) => {
        const req = axios.request(process.env.NEXT_PUBLIC_API_URL + '/save-contact', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
            },
            data: {
                ...data
            },
        });
        req.then(res => resolve(res.data))
            .catch(err => reject(err));
    });
};

export const saveInvestorProfile = async(id,data) => {
    return new Promise((resolve, reject) => {
        const req = axios.request(process.env.NEXT_PUBLIC_API_URL + '/investor-profile/'+id, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            },
            data: {
                ...data
            },
        });
        req.then(res => resolve(res.data))
            .catch(err => reject(err));
    });
};


